<script>
    import * as Highcharts from 'highcharts'
    import more from 'highcharts/highcharts-more'
    import {onMount} from "svelte";

    let container

    more(Highcharts)

    onMount(() => {
        Highcharts.chart(container, {
            chart: {
                polar: true,
                type: 'line'
            },

            accessibility: {
                description: 'A spiderweb chart compares the allocated budget against actual spending within an organization. The spider chart has six spokes. Each spoke represents one of the 6 departments within the organization: sales, marketing, development, customer support, information technology and administration. The chart is interactive, and each data point is displayed upon hovering. The chart clearly shows that 4 of the 6 departments have overspent their budget with Marketing responsible for the greatest overspend of $20,000. The allocated budget and actual spending data points for each department are as follows: Sales. Budget equals $43,000; spending equals $50,000. Marketing. Budget equals $19,000; spending equals $39,000. Development. Budget equals $60,000; spending equals $42,000. Customer support. Budget equals $35,000; spending equals $31,000. Information technology. Budget equals $17,000; spending equals $26,000. Administration. Budget equals $10,000; spending equals $14,000.'
            },

            title: {
                text: 'Budget vs spending',
                x: -80
            },

            pane: {
                size: '80%'
            },

            credits: {
              enabled: false
            },

            xAxis: {
                categories: ['电压偏差', '频率偏差', '负载波动性', '谐波畸变率',
                    '三相不平衡', '功率因数'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },
            legend: {
                enabled: false,
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
            series: [{
                name: 'Allocated Budget',
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        pane: {
                            size: '70%'
                        }
                    }
                }]
            }

        });
    })
</script>


<div bind:this={container}>

</div>


<style>

</style>