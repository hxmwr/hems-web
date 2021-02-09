<script>
    import Highcharts from "highcharts"
    import {onMount} from "svelte";

    Highcharts.SparkLine = function (a, b, c) {
        const hasRenderToArg = typeof a === 'string' || a.nodeName;
        let options = arguments[hasRenderToArg ? 1 : 0];
        const defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || (hasRenderToArg && a),
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
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

    export let title
    export let metric
    export let rate
    export let total
    export let data
    let chartContainer

    onMount(() => {
        Highcharts.SparkLine(chartContainer, {
            series: [{
                data: data,
                pointStart: 1
            }],
            chart: {}
        })
    })
</script>

<div class="container">
    <div class="row1">
        <div class="title">
            {title}
        </div>
        <div class="metric">
            {metric}
        </div>
        <div class="rate">
            {rate}
        </div>
    </div>
    <div class="row2">
        {total} Nm3
    </div>
    <div class="row3" bind:this={chartContainer}>
    </div>
</div>


<style>
     .container {
         margin-right: 8px;
         flex-grow: 1;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         height: 120px;
     }

     .container:last-child {
         margin-right: 0;
     }
    .row1, .row2, .row3 {
        display: flex;
        align-items: center;
    }
    .row3 {
        height: 50px;
    }
    .row2 {
        font-size: 26px;
    }
    .title {
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