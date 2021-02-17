<script>
    export let options = {
        key: "_key",
        selectable: false,
        ajax: null,
        fullWidth: false,
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
    export let data = []
    export let selectedRows = {}
    export let focusedRow = null

    let selectAll = false
    let actionCheckAll = false
    $: if (selectAll && actionCheckAll) {
        data.forEach(d => {
            selectedRows[d[options.key]] = true
        })
    } else {
        if (Object.values(selectedRows).filter(v => v).length === data.length && data.length > 0) {
            if (actionCheckAll) {
                focusedRow = null
                for (let x in selectedRows) {
                    selectedRows[x] = false
                }
            } else {
                selectAll = true
            }
        } else {
            selectAll = false
        }
    }

    async function load(url) {
        const res = await fetch(url)
        const json = await res.json()
        if (res.ok) {
            data = options.ajax.parse(json)
            return json
        } else {
            throw new Error("Internal Error")
        }
    }

    if (!!options.ajax) {
        load(options.ajax.url)
    }
</script>

{#if options}
    <table class:full-width={options.fullWidth}>
        <thead>
        <tr>
            {#if options.selectable && options.key}
                <th class="col-checkbox">
                    <label class="checkbox" data-test="ring-checkbox">
                        <input type="checkbox" class="input" bind:checked={selectAll}
                               on:click={() => actionCheckAll = true}>
                        <span class="cell">
                                <span class="icon-check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         viewBox="0 0 16 16"
                                         class="glyph_f10">
                                        <path d="M6.16 14.41L1.37 9.66l1.26-1.28 3.24 3.21L13.23.5l1.5 1-8.57 12.91z"></path>
                                    </svg>
                                </span>
                            </span>
                        <span class="label"></span>
                    </label>
                </th>
            {/if}
            {#each options.columns as col}
                {#if typeof (col.label) === "function"}
                    <th style={"width:" + (col.width ? col.width: "auto")}>
                        <svelte:component this={col.label}/>
                    </th>
                {:else}
                    <th style={"width:" + (col.width ? col.width: "auto")}>{col.label}</th>
                {/if}
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each data as d, i}
            <tr
                    on:click={() => {focusedRow = d[options.key]}}
                    id={"row_" + (d[options.key]?d[options.key]:i)}
                    class:selected={options.selectable?(selectedRows[d[options.key]]):false}
                    class:focused={options.selectable?(focusedRow === d[options.key]):false}
            >
                {#if options.selectable}
                    <td class="col-checkbox">
                        <label class="checkbox" data-test="ring-checkbox">
                            <input data-checked="false" type="checkbox" class="input"
                                   bind:checked={selectedRows[d[options.key]]} on:click={() => actionCheckAll = false}>
                            <span class="cell">
                                <span class="icon-check">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         viewBox="0 0 16 16"
                                         class="glyph_f10">
                                        <path d="M6.16 14.41L1.37 9.66l1.26-1.28 3.24 3.21L13.23.5l1.5 1-8.57 12.91z"></path>
                                    </svg>
                                </span>
                            </span>
                            <span class="label"></span>
                        </label>
                    </td>
                {/if}
                {#each options.columns as col}
                    <td>
                        {#if typeof (col.render) === 'function'}
                            <svelte:component this={col.render} data={data} row={d}/>
                        {:else}
                            {d[col.data]}
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
{/if}

<style>
    table {
        border: none;
        width: 100%;
        position: relative;
        border-spacing: 0;
    }

    th {
        height: 24px;
        font-size: 14px;
        font-weight: normal;
        text-align: left;
        white-space: nowrap;
        color: var(--ring-secondary-color);
    }

    thead:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: var(--ring-line-color);
    }

    tbody > tr:hover {
        background-color: var(--ring-hover-background-color);
    }

    td {
        font-size: 13px;
        height: 32px;
        color: var(--ring-text-color);
    }

    .checkbox {
        position: relative;
    }

    .input {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .cell {
        display: inline-block;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        user-select: none;
        position: relative;
        transition: border-color var(--ring-ease), background-color var(--ring-ease), box-shadow var(--ring-ease), -webkit-box-shadow var(--ring-ease);
        vertical-align: middle;
        pointer-events: none;
        border: 1px solid var(--ring-borders-color);
        border-radius: 3px;
        background-color: var(--ring-content-background-color);
    }

    .icon-check {
        position: absolute;
        width: 16px;
        height: 16px;
        transition: opacity var(--ring-fast-ease), transform var(--ring-fast-ease), -webkit-transform var(--ring-fast-ease);
        opacity: 0;
        top: -12px;
        left: 1px;
    }

    .input:checked + .cell .icon-check {
        transform: translateY(8px);
        opacity: 1;
    }

    .full-width th:first-child,
    .full-width td:first-child {
        padding-left: 16px;
    }

    .col-checkbox {
        width: 1%;
        padding-right: 8px;
    }

    .selected {
        background-color: var(--ring-selected-background-color);
    }

    .focused {
        background-color: var(--ring-hover-background-color);
    }

</style>