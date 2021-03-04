<script>
    import GaugeTree from "./GaugeTree.svelte";
    import Tab from "../../widget/tab/Tab.svelte";
    import Board from "../../widget/card/Board.svelte";
    import Percentage from "./Percentage.svelte";
    import SimpleLineChart from "../../widget/chart/SimpleLineChart.svelte";
    import {colors} from "../../../res/values";
    import RadioButtonGroup from "../../widget/button/RadioButtonGroup.svelte";
    import Datepicker from "../../widget/calendar/Datepicker.svelte";
    import SpiderWebChart from "../../widget/chart/SpiderWebChart.svelte";
    import SimpleTable from "../../widget/table/SimpleTable.svelte";
    import AjaxContent from "../../widget/ajax/AjaxContent.svelte";
    import XRangeChart from "../../widget/chart/XRangeChart.svelte";
    import {Urls} from "../../../api";

    let tree = {
        children: [
            {
                key: 1,
                label: "中心电表",
                children: [
                    {
                        key: 101,
                        label: "电表001"
                    },
                    {
                        key: 102,
                        label: "电表002"
                    },
                    {
                        key: 103,
                        label: "辅助用电-X"
                    }
                ]
            },
            {
                key: 2,
                label: "辅助用电"
            }
        ]
    }

    let activeTreeKey = 1
    $:title = ''
    let tabs = [{
        title: "图表"
    }, {
        title: "数据"
    }, {
        title: "报表"
    }]
    let activeTabIndex = 0
    let typeOfVoltage = 1
    $:{
        function getTitle(tree) {
            if (tree.key === activeTreeKey) {
                return tree.label
            } else if (tree.children) {
                for (let i = 0; i < tree.children.length; i++) {
                    let title = getTitle(tree.children[i])
                    if (title) {
                        return title
                    }
                }
            }
            return null
        }

        title = getTitle(tree)
    }
</script>

<div class="container">
    <div class="tree">
        <GaugeTree bind:activeKey={activeTreeKey} {tree}/>
    </div>
    <div class="content">
        <div class="title-bar">
            <span class="title">{title}</span>
            <div class="actions">
                <RadioButtonGroup buttons={[
                    {text: "日"},
                    {text: "周"},
                    {text: "月"}
                ]}/>
                <div style="margin-left: 16px;">
                    <Datepicker/>
                </div>
            </div>
        </div>
        <div class="tabs">
            <Tab tabs={tabs} activeTabIndex={activeTabIndex}/>
        </div>
        <div class="main">
            <div>
                <Board title="有功电量"/>
            </div>
            <div style="width: 352px;height: 392px;" class="with-loader">
                <AjaxContent url={Urls.get('electricity_kpi')} let:json>
                    <div class="kpi" {json}>
                        {#each json.data as d}
                            <Board title={d.item}>
                                <div class="ki" slot="content">
                                    <div class="kiv"><span>{d.value}</span><span class="unit">{d.unit}</span></div>
                                    <div class="kic">
                                        <SimpleLineChart options={{series: [{data: d.data,color: colors.bar}]}}/>
                                    </div>
                                </div>
                                <div slot="actions">
                                    <Percentage value={d.change}/>
                                </div>
                            </Board>
                        {/each}
                    </div>
                </AjaxContent>
            </div>
            <Board title="电能健康">
                <div class="eh-wrapper" slot="content">
                    <AjaxContent url={Urls.get('electricity_health')} let:json>
                        <div class="eh">
                            <div class="chart">
                                <SpiderWebChart/>
                            </div>
                            <div class="table">
                                <div style="height: 30px;margin-bottom: 30px;">
                                    <SimpleLineChart options={{series: [{data: [2,3,5,8,1,2,4]}]}}/>
                                </div>
                                <div>
                                    <SimpleTable options={{
                                        columns: [
                                            {
                                                label: typeOfVoltage === 1 ? '线电压':'相电压',
                                                data: 'type'
                                            },
                                            {
                                                label: '平均V',
                                                data: 'avg'
                                            },
                                            {
                                                label: typeOfVoltage === 1 ? 'UaV' : 'Uab V',
                                                data: typeOfVoltage === 1 ? 'uav' : 'uabv'
                                            },
                                            {
                                                label: typeOfVoltage === 1 ? 'UbV' : 'Ubc V',
                                                data: typeOfVoltage === 1 ? 'ubv' : 'ubcv'
                                            },
                                            {
                                                label: typeOfVoltage === 1 ? 'UcV' : 'Uac V',
                                                data: typeOfVoltage === 1 ? 'ucv' : 'uacv'
                                            }
                                        ]
                                    }} data={typeOfVoltage === 1 ? [
                                            {
                                                type: '最大', avg: json.data.lv.v.max, uav: json.data.lv.uav.max, ubv: json.data.lv.ubv.max, ucv: json.data.lv.ucv.max
                                            },{
                                                type: '最小', avg: json.data.lv.v.min, uav: json.data.lv.uav.min, ubv: json.data.lv.ubv.min, ucv: json.data.lv.ucv.min
                                            },{
                                                type: '平均', avg: json.data.lv.v.avg, uav: json.data.lv.uav.avg, ubv: json.data.lv.ubv.avg, ucv: json.data.lv.ucv.avg
                                            }
                                        ]: [
                                            {
                                                type: '最大', avg: json.data.pv.v.max, uabv: json.data.pv.uabv.max, ubcv: json.data.pv.ubcv.max, uacv: json.data.pv.uacv.max
                                            },{
                                                type: '最小', avg: json.data.pv.v.min, uabv: json.data.pv.uabv.min, ubcv: json.data.pv.ubcv.min, uacv: json.data.pv.uacv.min
                                            },{
                                                type: '平均', avg: json.data.pv.v.avg, uabv: json.data.pv.uabv.avg, ubcv: json.data.pv.ubcv.avg, uacv: json.data.pv.uacv.avg
                                            }
                                        ]}/>
                                </div>
                            </div>
                        </div>
                    </AjaxContent>
                </div>
            </Board>
            <div class="board-3">
                <Board title="峰谷平用电分析">
                    <div class="cost-analysis" slot="content">
                        <XRangeChart />
                    </div>
                </Board>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
    }

    .title-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title-bar > .title {
        font-size: 27px;
    }

    .tabs {
        margin: 16px 0;
        display: flex;
    }

    .tree {
        width: 220px;
        background-color: var(--ring-sidebar-background-color);
        border: 1px solid var(--ring-line-color);
        margin-top: 16px;
        align-self: flex-start;
    }

    .content {
        margin-left: 32px;
        flex-grow: 1;
    }

    .main {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 2fr 2fr 4fr;
        grid-template-rows: 1fr min-content;
    }

    .board-3 {
        grid-area: 2/1/3/4;
    }

    .kpi {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 16px;
        font-size: 13px;
    }



    /* kpi item */
    .ki {
        padding: 8px 16px;
    }

    /* kpi item value */
    .kiv {
        font-size: 26px;
        font-weight: bold;
    }

    /* kpi item chart */
    .kic {
        height: 40px;
    }

    .actions {
        display: flex;
    }

    .eh-wrapper {
        display: flex;
        height: 100%;
    }

    /* electricity health */
    .eh {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 16px;
        align-items: center;
    }

    .unit {
        vertical-align: middle;
        font-size: 12px;
        font-weight: normal;
        margin-left: 4px;
    }

    .eh > .chart {
        width: 200px;
        height: 300px;
    }

    .eh > .table {
        margin-left: 32px;
        flex-grow: 1;
    }

    .cost-analysis {
        padding: 16px;
    }
</style>