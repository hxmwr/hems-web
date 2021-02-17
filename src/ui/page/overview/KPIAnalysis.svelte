<script>
    import Highcharts from "highcharts"
    import {onMount} from "svelte";
    import {colors} from "../../../res/values";

    export let data

    let chart

    onMount(() => {
        Highcharts.chart(chart, {
            chart: {
                backgroundColor: null,
                borderWidth: 0,
                type: 'spline',
                margin: [2, 0, 2, 0],
                height: 50,
                style: {
                    overflow: 'visible'
                },
                // small optimalization, saves 1-2 ms each sparkline
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                visible: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                visible: false,
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                hideDelay: 0,
                outside: true,
                shared: true
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        enabled: false,
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            },
            series: [
                {
                    color: colors.blue,
                    data: Array(100).fill(0).map(() => Math.random()),
                    pointStart: 1
                }
            ]
        })
    })
</script>

<div class="container with-loader">
    <div class="left">
        --
    </div>
    <div class="middle">
        <div class="r1"><h3>{data.title}{data.metric}{data.value}, 比标准{data.cmpStd}</h3></div>
        <div class="r2">
             异常次数，本周{data.errStat[0]}次，本月{data.errStat[1]}次，本年{data.errStat[2]}次
        </div>
        <div class="r3">
            原因分析：无
        </div>
    </div>
    <div class="right" bind:this={chart}>

    </div>
</div>

<style>
    .container {
        display: flex;
        box-sizing: border-box;
        padding: 0 0 8px;
    }
    .container:last-child {
        padding-bottom: 0;
    }
    .left {
        width: 100px;
        height: 100px;
    }
    .middle {
        display: flex;
        flex-direction: column;
        font-size: 13px;
        margin: 0 16px;
    }
    .right {
        padding: 16px 16px;
        flex-grow: 1;
    }
    .r1 {
        line-height: 24px;
        margin-bottom: 8px;
        white-space: nowrap;
    }
    .r2, .r3 {
        line-height: 22px;
        white-space: nowrap;
    }
    h3 {
        margin: 0;
        white-space: nowrap;
    }
</style>