<script>
    import Card from "../../widget/card/Card.svelte";
    import DataLabel from "./DataLabel.svelte";
    import AjaxContent from "../../widget/ajax/AjaxContent.svelte";
    import DetailedDataLabel from "./DetailedDataLabel.svelte";
    import Board from "./Board.svelte";

    let url = "http://47.105.46.129:3000/mock/11/api/overview"
</script>

<div class="container">
    <div class="board-0">
        <Board title="主要指标">
            <div class="data-labels">
                <AjaxContent url={url} let:json>
                    {#each json.data.metrics as metric}
                        <DataLabel {...metric} />
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
        <AjaxContent url="" delay={5000}>
            <div class="trend">

            </div>
        </AjaxContent>
    </Board>
    <Board title=能耗情况>
        <div class="trend">
            <DetailedDataLabel />
            <DetailedDataLabel />
            <DetailedDataLabel />
        </div>
    </Board>
    <Board title="生产情况">
        <div class="trend">
            <DetailedDataLabel />
            <DetailedDataLabel />
            <DetailedDataLabel />
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
        height: 186px;
    }
    .board-1 {
        grid-area: 1/2/3/3;
    }
</style>