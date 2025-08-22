
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

type EChartsOption = echarts.EChartsOption;

interface PriceHistoryData {
    timestamp: string;
    low: number;
    high: number;
    open: number;
    close: number;
}

const chart_coloring =
{
    color: '#00b167', // Bullish (green)
    color0: '#ff6962', // Bearish (red)
    borderColor: '#00b167',
    borderColor0: '#ff6962'
}

const initialOption: EChartsOption = {
    title: {
        text: 'Price History',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        data: []
    },
    yAxis: {
        scale: true
    },
    series: [
        {
            type: 'candlestick',
            data: [],
            itemStyle: chart_coloring
        }
    ]
};

function PriceHistory() {
    const [option, setOption] = useState<EChartsOption>(initialOption);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8080/historical_pricing');
                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                    return;
                }
                const data: PriceHistoryData[] = await response.json();

                data.reverse();

                const timestamps = data.map(item => {
                    const date = new Date(item.timestamp);
                    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
                });

                const candlestickData = data.map(item => [item.open, item.close, item.low, item.high]);

                setOption({
                    ...initialOption,
                    xAxis: { data: timestamps },
                    series: [{ type: 'candlestick', data: candlestickData, itemStyle: chart_coloring }]
                });
            } catch (error) {
                console.error("Failed to fetch price history:", error);
            }
        };

        fetchData();
        const intervalId = setInterval(fetchData, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <ReactECharts className='price-history-chart' option={option} notMerge={true} lazyUpdate={true} />
        </>
    );
}

export default PriceHistory;