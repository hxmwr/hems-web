<script>
    import Highcharts from 'highcharts'
    import XRange from 'highcharts/modules/xrange'
    import {onMount} from "svelte";

    let container

    onMount(() => {
        XRange(Highcharts)
        Highcharts.chart(container, {
            chart: {
                type: 'xrange'
            },
            title: {
                text: '峰谷平用电分析'
            },
            accessibility: {
                point: {
                    descriptionFormatter: function (point) {
                        var ix = point.index + 1,
                            category = point.yCategory,
                            from = new Date(point.x),
                            to = new Date(point.x2);
                        return ix + '. ' + category + ', ' + from.toDateString() +
                            ' to ' + to.toDateString() + '.';
                    }
                }
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: ''
                },
                categories: ['峰', '谷', '平'],
                reversed: true
            },
            legend: false,
            series: [{
                // pointPadding: 0,
                // groupPadding: 0,
                borderColor: 'gray',
                pointWidth: 20,
                data: [{
                    x: Date.UTC(2014, 10, 21),
                    x2: Date.UTC(2014, 11, 2),
                    y: 0,
                    partialFill: 0.25
                }, {
                    x: Date.UTC(2014, 11, 2),
                    x2: Date.UTC(2014, 11, 5),
                    y: 1
                }, {
                    x: Date.UTC(2014, 11, 8),
                    x2: Date.UTC(2014, 11, 9),
                    y: 2
                }, {
                    x: Date.UTC(2014, 11, 9),
                    x2: Date.UTC(2014, 11, 19),
                    y: 1
                }, {
                    x: Date.UTC(2014, 11, 10),
                    x2: Date.UTC(2014, 11, 23),
                    y: 2
                }],
                dataLabels: {
                    enabled: true
                }
            }]

        })
    })
</script>

<div class="container" bind:this={container}></div>

<style>
    .container {
        height: 100%;
        width: 100%;
    }
</style>