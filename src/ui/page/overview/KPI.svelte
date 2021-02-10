<script>
    import Highcharts from "highcharts"
    import {onMount} from "svelte";
    import {colors} from "../../../res/values";

    Highcharts.SparkLine = function (a, b, c) {
        const hasRenderToArg = typeof a === 'string' || a.nodeName;
        let options = arguments[hasRenderToArg ? 1 : 0];
        const defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || (hasRenderToArg && a),
                backgroundColor: null,
                borderWidth: 0,
                type: 'line',
                margin: [2, 0, 2, 0],
                height: 16,
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
            }
        };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    export let data
    let chartContainer

    onMount(() => {
        Highcharts.SparkLine(chartContainer, {
            series: [{
                color: colors.main,
                data: data.data,
                pointStart: 1
            }],
            chart: {}
        })
    })
</script>

<div class="container">
    <div class="r1">
        <div class="title-bar">
            {data.title}
        </div>
        <div class="metric">
            {data.metric}
        </div>
        <div class="rate">
            {data.rate}
        </div>
    </div>
    <div class="r2">
        <span class="number">{data.total}</span><span class="unit">{data.unit}</span>
    </div>
    <div class="r3" bind:this={chartContainer}>
    </div>
</div>


<style>
     .container {
         margin-right: 8px;
         flex-grow: 1;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         height: 110px;
     }

     .container:last-child {
         margin-right: 0;
     }
    .r1, .r2, .r3 {
        display: flex;
        align-items: center;
    }
    .r1 {
        height: 24px;
    }
    .r3 {
        height: 50px;
    }
    .r2 {
        font-size: 22px;
    }
    .r2 > .number {
        line-height: 1;
        align-self: flex-end;
    }

    .r2 > .unit {
        font-size: 14px;
        align-self: flex-end;
        color: #808080;
    }
    .title-bar {
        font-size: 16px;
        color: grey;
        margin-right: 4px;
    }
    .metric {
        font-size:16px;
        color: grey;
        margin-right: 4px;
    }
    .rate {
        font-size: 16px;
        margin-right: 4px;
    }
</style>