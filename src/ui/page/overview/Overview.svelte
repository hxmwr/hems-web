<script>
    import KPI from "./KPI.svelte";
    import AjaxContent from "../../widget/ajax/AjaxContent.svelte";
    import KPIAnalysis from "./KPIAnalysis.svelte";
    import Board from "../../widget/card/Board.svelte";
    import ProdUnit from "./ProdUnit.svelte";
    import SimpleTable from "../../widget/table/SimpleTable.svelte";
    import CostChart from "./CostChart.svelte";

    let url = "http://47.105.46.129:3000/mock/11/api/overview"
    let energyTableOpts = {
        key: "_key",
        columns: [
            {
                label: "名称",
                data: "name"
            },
            {
                label: "单耗",
                data: "uc"
            },
            {
                label: "环比",
                data: "change"
            },
            {
                label: "日累计流量",
                data: "apd"
            },
            {
                label: "月累计流量",
                data: "apm"
            },
            {
                label: "年累计流量",
                data: "apy"
            }
        ]
    }
    let energyTableData = [
        {
            _key: 1,
            name: "燃料气",
            uc: "134.638Nm3/万标",
            change: "-0.46%",
            apd: "0.96Nm3/万标",
            apm: "5.772",
            apy: "49.029"
        },
        {
            _key: 2,
            name: "电",
            uc: "2593.604Nm3/万标",
            change: "9.83%",
            apd: "13.065Nm3/万标",
            apm: "99.568",
            apy: "730.449"
        },
        {
            _key: 3,
            name: "冷却水",
            uc: "2593.604Nm3/万标",
            change: "9.83%",
            apd: "13.065Nm3/万标",
            apm: "99.568",
            apy: "730.449"
        },
        {
            _key: 4,
            name: "氮气",
            uc: "2593.604Nm3/万标",
            change: "9.83%",
            apd: "13.065Nm3/万标",
            apm: "99.568",
            apy: "730.449"
        }
    ]
</script>

<div class="container">
    <div class="board-0">
        <Board title="主要指标">
            <div class="kpi" slot="content">
                <AjaxContent url={url} let:json>
                    {#each json.data.metrics as metric}
                        <KPI data={metric}/>
                    {/each}
                </AjaxContent>
            </div>
        </Board>
    </div>

    <div class="board-1">
        <Board title="关键设备及系统">
            <div class="kpu" slot="content">
                <ProdUnit />
                <ProdUnit />
            </div>
        </Board>
    </div>
    <Board title="产品趋势">
        <div class="trend" slot="content">
            <KPIAnalysis data={{title: "乙烷", metric: "收率", value: "78.5%", cmpStd: "-4.8%", errStat: [2, 9, 25]}}/>
            <KPIAnalysis data={{title: "丙烷", metric: "收率", value: "68.5%", cmpStd: "3.6%", errStat: [2, 9, 25]}}/>
        </div>
    </Board>
    <Board title=能耗情况>
        <div class="energy" slot="content">
            <div class="table">
                <SimpleTable options={energyTableOpts} data={energyTableData} />
            </div>
            <div class="chart">
                <CostChart />
            </div>
        </div>
    </Board>
    <Board title="生产情况">
        <div class="production" slot="content">
            <SimpleTable options={energyTableOpts} data={energyTableData} />
        </div>
    </Board>
</div>


<style>
    .container {
        width: 100%;
        display: grid;
        grid-template-columns: 3fr 3fr;
        grid-template-rows: min-content 1fr;
        grid-gap: 16px;
    }

    .kpi {
        display: flex;
        padding: 16px;
    }

    /*key device and system*/
    .kpu, .trend,.energy,.production {
        padding: 16px;
    }

    .energy {
        display: flex;
        height: 100%;
        box-sizing: border-box;
    }

    .energy > .table {
        flex-grow: 1;
    }

    .energy > .chart {
        width: 180px;
    }

    .board-0 {
        height: 176px;
    }

    .board-1 {
        grid-area: 1/2/3/3;
    }
</style>