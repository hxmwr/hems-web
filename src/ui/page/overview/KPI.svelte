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
        <div class="rate">
            {data.rate}
        </div>
    </div>
    <div class="r2">
        <span class="number">{data.total}</span><span class="unit">{data.unit}</span>
    </div>
    <div class="r3">
        <SimpleLineChart options={{series: [{data: data.data, pointStart: 1, color: colors.main}]}} />
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
        box-sizing: border-box;
        padding: 8px 0;
        overflow: visible;
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