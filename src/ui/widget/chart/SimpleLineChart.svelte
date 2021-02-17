<script>
    import Highcharts from "highcharts";
    import {onMount} from "svelte";

    export let options = {}
    let container

    const defaultOptions = {
        chart: {
            backgroundColor: null,
            borderWidth: 0,
            type: 'line',
            margin: [2, 0, 2, 0],
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

    let opts = Highcharts.merge(defaultOptions, options);
    onMount(()=> {
        Highcharts.chart(container, opts)
    })
</script>
<div bind:this={container} class="container"></div>
<style>
    .container {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
</style>