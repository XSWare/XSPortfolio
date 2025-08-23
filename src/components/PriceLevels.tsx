import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

type EChartsOption = echarts.EChartsOption;

interface PriceLevel {
    price: number;
    quantity: number;
}

interface PriceLevelsData {
    bids: PriceLevel[];
    asks: PriceLevel[];
}

const baseOption: EChartsOption = {
    title: {
        text: 'Order book',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: (params: any) => {
            const data = params[0];
            const price = data.axisValue;
            const size = data.value;
            const color = data.data.itemStyle.color;
            const type = color === '#00b167' ? 'Bid' : 'Ask';
            return `${type}<br/>Price: ${price}<br/>Quantity: ${size}`;
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        inverse: true,
    },
    yAxis: {
        type: 'category',
        data: [],
    },
    series: [
        {
            name: 'Price Levels',
            type: 'bar',
            data: [],
            barMaxWidth: 10,
        }
    ]
};

function PriceLevels() {
    const [option, setOption] = useState<EChartsOption>(baseOption);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/list_order_levels`);
                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                    return;
                }

                const data: PriceLevelsData = await response.json();


                const y_label = [...data.bids.map(order => order.price), ...data.asks.map(order => order.price)];
                const bids: echarts.SeriesOption[] = data.bids.map(order => ({ value: order.quantity, itemStyle: { color: '#00b167' } }));
                const asks: echarts.SeriesOption[] = data.asks.map(order => ({ value: order.quantity, itemStyle: { color: '#ff6962' } }));

                const chartData = [...bids, ...asks];

                setOption({
                    yAxis: {
                        type: 'category',
                        data: y_label,
                    },
                    series: [{ data: chartData }]
                });

            } catch (error) {
                console.error("Failed to fetch price levels:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ReactECharts
                className='price-levels-chart'
                option={option}
                lazyUpdate={true}
                style={{ height: '100%', width: '100%' }}
            />
        </>
    );
}

export default PriceLevels;