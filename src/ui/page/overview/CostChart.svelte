<script>
    import Highcharts from "highcharts"
    import {onMount} from "svelte";

    let chart

    onMount(() => {
        Highcharts.chart(chart, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: '能耗成本占比',
                align: 'center',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    size: '110%',
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: '成本占比',
                innerSize: '60%',
                data: [
                    ['燃料气', 58.9],
                    ['电', 13.29],
                    ['冷却水', 13],
                    ['氮气', 3.78],
                ]
            }]
        });
    })
</script>


<div class="container" bind:this={chart}>

</div>

<style>
    .container {
        height: 280px;
        width: 100%;
    }
</style>