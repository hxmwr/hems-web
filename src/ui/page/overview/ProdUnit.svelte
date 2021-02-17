<script>
    import Tab from "../../widget/tab/Tab.svelte";

    let tab1 = 0
    let tab2 = 0

</script>

<div class="container">
    <div class="r1">
        <div class="title-bar">原料气压缩机</div>
        <div>
            <Tab tabs={[{title: "总效率"},{title: "总功耗"}, {title: "电单耗"}]} bind:activeTabIndex={tab1}/>
        </div>
    </div>
    <div class="r2">
        <div>
            <span class="main">77.169</span><span class="unit">%</span>
        </div>
        <div>4.07%</div>
        <div>
            <div class="indicator">
                <div class="value" style={"width:" + "70%"}></div>
                <div class="target-value" style="left: 79%"></div>
            </div>
        </div>
    </div>
    <div class="r3">
        <div>1段效率79.6%</div>
        <div>2段效率74%</div>
        <div>34段效率67%</div>
    </div>
</div>

<style>
    .container {
        padding-top: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid var(--ring-border-disabled-color);
    }
    .container:first-child {
        padding-top: 0;
    }
    .container:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
    .r1, .r2, .r3 {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
    }

    .r2{
        padding: 30px 0;
    }

    .title-bar {
        font-weight: bold;
        font-size: 14px;
        line-height: 24px;
    }
    .indicator {
        position: relative;
        border-radius: 4px;
        height: 30px;
        width: 300px;
        background: var(--ring-line-color);
    }
    .indicator > .value {
        height: 100%;
        border-radius: 4px;
        background: var(--chart-bar-color);
    }
    .indicator > .target-value {
        position: absolute;
        height: 50px;
        top: -10px;
        width: 2px;
        background: var(--chart-line-color);
    }
    .main {
        font-size: 26px;
        font-weight: bold;
    }
</style>