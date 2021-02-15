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
            title: {
                text: null
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
                enabled: false
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
    div {
        height: 100%;
        width: 100%;
    }
</style>