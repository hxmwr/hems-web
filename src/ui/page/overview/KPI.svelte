<script>
    import {colors} from "../../../res/values";
    import SimpleLineChart from "../../widget/chart/SimpleLineChart.svelte";

    export let data
</script>

<div class="container">
    <div class="r1">
        <div class="title-bar">
            {data.title}
        </div>
        <div class="metric">
            {data.metric}
        </div>
        <div class="rate" class:negative={data.rate < 0} class:positive={data.rate > 0}>
            {data.rate}
        </div>
    </div>
    <div class="r2">
        <span class="number">{data.total}</span><span class="unit">{data.unit}</span>
    </div>
    <div class="r3">
        <SimpleLineChart options={{series: [{marker: {enabled: false},data: data.data, pointStart: 1, color: colors.blue}]}} />
    </div>
</div>


<style>
     .container {
         margin-right: 8px;
         flex-grow: 1;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         height: 85px;
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
        margin-top: 4px;
        height: 20px;
        box-sizing: border-box;
        overflow: visible;
    }
    .r2 {
        font-size: 22px;
        line-height: 30px;
        display: block;
        font-weight: bold;
    }
    .r2 > .number {
        line-height: 1;
        align-self: flex-end;
    }

    .r2 > .unit {
        font-size: 14px;
        align-self: flex-end;
    }
    .title-bar {
        font-size: 14px;
        color: var(--ring-text-color);
        margin-right: 4px;
    }
    .metric {
        font-size:14px;
        color: var(--ring-text-color);
        margin-right: 4px;
    }
    .rate {
        font-size: 13px;
        margin-right: 4px;
    }
    .rate.positive {
        color: #76a800;
    }
    .rate.negative {
        color: red;
    }
</style>