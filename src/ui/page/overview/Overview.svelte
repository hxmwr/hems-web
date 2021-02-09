<script>
    import KPI from "./KPI.svelte";
    import AjaxContent from "../../widget/ajax/AjaxContent.svelte";
    import KPIAnalysis from "./KPIAnalysis.svelte";
    import Board from "../../widget/card/Board.svelte";

    let url = "http://47.105.46.129:3000/mock/11/api/overview"
</script>

<div class="container">
    <div class="board-0">
        <Board title="主要指标">
            <div class="data-labels">
                <AjaxContent delay={500} url={url} let:json>
                    {#each json.data.metrics as metric}
                        <KPI data={metric} />
                    {/each}
                </AjaxContent>
            </div>
        </Board>
    </div>

    <div class="board-1">
        <Board title="关键设备及系统">
            <div class="kds"></div>
        </Board>
    </div>
    <Board title="产品趋势">
            <div class="trend">
                <KPIAnalysis data={{title: "乙烷", metric: "收率", value: "78.5%", cmpStd: "-4.8%", errStat: [2, 9, 25]}} />
                <KPIAnalysis data={{title: "丙烷", metric: "收率", value: "68.5%", cmpStd: "3.6%", errStat: [2, 9, 25]}} />
            </div>
    </Board>
    <Board title=能耗情况>
        <div class="energy">
        </div>
    </Board>
    <Board title="生产情况">
        <div class="production">

        </div>
    </Board>
</div>


<style>
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 3fr;
        grid-template-rows: min-content 1fr 1fr;
        grid-gap: 16px;
    }
    .data-labels {
        display: flex;
        padding: 16px;
    }
    /*key device and system*/
    .kds,.trend {
        padding: 16px;
    }
    .board-0 {
        height: 176px;
    }
    .board-1 {
        grid-area: 1/2/3/3;
    }
</style>