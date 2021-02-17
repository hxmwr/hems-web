<script>
    import Pagination from "./Pagination.svelte";
    import RingLoader from "../spinner/RingLoader.svelte";
    import {fade} from 'svelte/transition'

    export let options
    export let title = "数据表"
    export let actionsComponent = null

    let data = []
    let limit = 50
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
    </div>
    <div class="toolbar">
        <svelte:component this={actionsComponent}/>
    </div>
    <div class="dt-wrapper">
        <div class="dt-wrapper">
            <table class="dt">
                <thead class="dt-h">
                <tr>
                    {#each options.columns as column}
                        <th style={"width:" + (column.width ? column.width : "auto")}>{column.title}</th>
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
                {#if data.length === 0 && !loading}
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
            <div class="pagination">
                <Pagination bind:page={page} total={total} bind:limit={limit}/>
            </div>
        {/if}
        {#if loading}
            <div class="mask" out:fade>
                <div class="loader">
                    <RingLoader />&nbsp;&nbsp;<span class="loading">Loading...</span>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .container {
        background: white;
        position: relative;
    }

    .dt-wrapper {
        position: relative;
    }

    .toolbar {
        padding: 16px 0;
    }

    .pg-size > select {
        height: 21px;
        padding: 0;
        margin: 0 1px;
    }

    .dt {
        width: 100%;
        border: 1px solid #e9ecef;
        border-collapse: separate !important;
        border-spacing: 0;
        border-left: none;
        border-right: none;
    }

    th {
        border-left-width: 0;
        border: none;
        border-bottom: 1px solid #e9ecef;
        padding: 0.5rem;
        text-align: left;
        font-size: 14px;
    }

    th:last-child {
        border-right-width: 0;
    }

    tbody > tr:hover {
        background: var(--ring-hover-background-color);
    }

    td {
        padding: 0.55rem;
        border-left-width: 0;
        border-bottom-width: 0;
        font-size: 14px;
        color: var(--ring-text-color);
        border: none;
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
        margin: 24px 0 16px;
    }

    .top-bar > .title {
        font-size: 27px;
    }

    .pagination {
        margin: 16px 0;
    }

    .mask {
        top: 0;
        z-index: 999;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
    }

    .loader {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
    }

    .loading {
        font-size: 13px;
        color: var(--ring-secondary-color);
    }
</style>