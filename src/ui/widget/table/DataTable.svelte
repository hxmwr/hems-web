<script>
    import Pagination from "./Pagination.svelte";
    import RingLoader from "../spinner/RingLoader.svelte";

    export let options
    export let title = "数据表"
    export let groupOperationsComponent = null

    let data = []
    let limit = "1"
    let page = 1
    let total = 1
    let loading = true
    let showLoader = false
    let timer = null

    async function load(url) {
        if (timer) clearTimeout(timer)
        setTimeout(() => {
            if (loading) showLoader = true
        }, 100)
        loading = true
        const res = await fetch(url)
        const json = await res.json()
        data = json.data.records
        total = json.data.total
        if (page > total) {
            page = 1
        }
        loading = false
        showLoader = false
        if (res.ok) {
            return json
        } else {
            throw new Error("Internal Error")
        }
    }

    $:promise = load(options.ajax + "?limit=" + limit + "&page=" + page)
</script>

<div class="container">
    <div class="top-bar">
        <div class="title">{title}</div>
        <div class="op-group">
            <svelte:component this={groupOperationsComponent} />
        </div>
    </div>
    <div class="menu-bar">
        <div class="pg-size">
            显示
            <select bind:value={limit}>
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">30</option>
                <option value="4">50</option>
                <option value="5">100</option>
            </select>
            条记录
        </div>
    </div>
    <div class="dt-wrapper">
        <div class="dt-pb"></div>
        <table class="dt">
            <thead class="dt-h">
            <tr>
                {#each options.columns as column}
                    <th>{column.title}</th>
                {/each}
            </tr>
            </thead>
            <tbody class="dt-b">
            {#each data as d,i}
                <tr>
                    {#each options.columns as col}
                        <td>{d[col.data]}</td>
                    {/each}
                </tr>
            {/each}
            </tbody>
            <tfoot class="dt-f">
            {#if data.length === 0}
                <tr>
                    <td colspan={options.columns.length}>
                        <div class="no-data">暂无数据</div>
                    </td>
                </tr>
            {/if}
            </tfoot>
        </table>
    </div>
    {#if data.length > 0}
        <Pagination bind:page={page} total={total}/>
    {/if}
    {#if showLoader}
        <div class="mask">
            <div class="loader">
                <RingLoader/>
            </div>
        </div>
    {/if}
</div>

<style>
    .container {
        background: white;
        position: relative;
    }

    .dt-wrapper {
        position: relative;
    }

    /* progress bar */
    .dt-pb {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #0095ff;
        transform: translate3d(0%, 0px, 0px);
        transition: all 0ms ease 0s;
        display: none;
    }

    .menu-bar {
        margin: 6px 0;
        font-size: 12px;
    }

    .pg-size > select {
        height: 21px;
        padding: 0;
    }

    .dt {
        width: 100%;
        border: 1px solid #e9ecef;
        border-collapse: separate !important;
        border-spacing: 0;
    }

    th {
        border: 1px solid #e9ecef;
        border-left-width: 0;
        border-bottom: 2px solid #e9ecef;
        padding: 0.5rem;
        text-align: left;
        font-size: 14px;
    }

    th:last-child {
        border-right-width: 0;
    }

    tbody > tr:nth-of-type(odd) {
        background: rgba(0, 0, 0, 0.03);
    }

    tbody > tr:hover {
        background: #e0f3ff;
    }

    td {
        padding: 0.55rem;
        border: 1px solid #e9ecef;
        border-left-width: 0;
        border-bottom-width: 0;
        font-size: 14px;
    }

    td:last-child {
        border-right-width: 0;
    }

    .no-data {
        text-align: center;
        font-style: italic;
        color: grey;
        font-size: 14px;
    }

    .top-bar {
        margin: 19px 0 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .top-bar > .title {
        font-size: 28px;
    }

    .top-bar > .op-group {
        font-size: 14px;
    }

    .menu-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .mask {
        top: 0;
        z-index: 999;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255,255,255,0.7);
    }
    .loader {
        position: fixed;
        border-radius: 8px;
        margin-left: -12px;
        margin-top: -12px;
    }
</style>