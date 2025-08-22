
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

type EChartsOption = echarts.EChartsOption;

var option: EChartsOption;

option = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
        {
            type: 'candlestick',
            data: [
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
            ]
        }
    ]
};

function PriceHistory() {
    return (
        <>
            <ReactECharts className='price-history-chart' option={option}/>
        </>
    );
}

export default PriceHistory;