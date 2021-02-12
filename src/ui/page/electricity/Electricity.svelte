<script>
    import GaugeTree from "./GaugeTree.svelte";
    import Tab from "../../widget/tab/Tab.svelte";
    import Board from "../../widget/card/Board.svelte";
    import Percentage from "./Percentage.svelte";
    import SimpleLineChart from "../../widget/chart/SimpleLineChart.svelte";
    import {colors} from "../../../res/values";
    import RadioButtonGroup from "../../widget/button/RadioButtonGroup.svelte";
    import Datepicker from "../../widget/calendar/Datepicker.svelte";

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
        <GaugeTree bind:activeKey={activeTreeKey} {tree} />
    </div>
    <div class="content">
        <div class="title-bar">
            <span class="title">{title}</span>
            <div class="actions">
                <RadioButtonGroup buttons={[
                    {text: "日"},
                    {text: "周"},
                    {text: "月"}
                ]} />
                <div style="margin-left: 16px;">
                    <Datepicker />
                </div>

            </div>
        </div>
        <div class="tabs">
            <Tab  tabs={tabs} activeTabIndex={activeTabIndex}/>
        </div>
        <div class="main">
            <div>
                <Board title="有功电量" />
            </div>
            <div class="kpi">
                <Board title="电价指数">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={-2.68} />
                    </div>
                </Board>
                <Board title="电费">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={-2.68} />
                    </div>
                </Board>
                <Board title="平均电价">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={-2.68} />
                    </div>
                </Board>
                <Board title="最大需量">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={2.68} />
                    </div>
                </Board>
                <Board title="无功电量">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={-2.68} />
                    </div>
                </Board>
                <Board title="有功功率">
                    <div class="ki" slot="content">
                        <div class="kiv">
                            1.176
                        </div>
                        <div class="kic">
                            <SimpleLineChart options={{
                                series: [
                                    {
                                        data: Array(10).fill(0).map(() => Math.random()),
                                        color: colors.main
                                    }
                                ]
                            }} />
                        </div>
                    </div>
                    <div slot="actions">
                        <Percentage value={-2.68} />
                    </div>
                </Board>
            </div>
            <div>
                <Board title="电能健康" />
            </div>
            <div>
                <Board title="峰谷平用电分析" />
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
        grid-template-rows: 1fr 1fr;
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
</style>