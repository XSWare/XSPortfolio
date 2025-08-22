
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';

type EChartsOption = echarts.EChartsOption;

var option: EChartsOption;

option = {
    xAxis: {
        inverse: true,
        type: 'value'

    },
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
        {
            data: [{ value: 120, itemStyle: { color: 'green' } },
            { value: 200, itemStyle: { color: 'green' } },
            { value: 180, itemStyle: { color: 'green' } },
            { value: 120, itemStyle: { color: 'red' } },
            { value: 120, itemStyle: { color: 'red' } },
            { value: 120, itemStyle: { color: 'red' } },],
            type: 'bar'
        }
    ]
};

function PriceLevels() {
    return (
        <>
            <ReactECharts className='price-levels-chart' option={option} />
        </>
    );
}

export default PriceLevels;