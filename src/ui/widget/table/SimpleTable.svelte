<script>
    export let options = {
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
        ],
        data: [
            {
                name: "燃料气",
                uc: "134.638Nm3/万标",
                change: "-0.46%",
                apd: "0.96Nm3/万标",
                apm: "5.772",
                apy: "49.029"
            },
            {
                name: "电",
                uc: "2593.604Nm3/万标",
                change: "9.83%",
                apd: "13.065Nm3/万标",
                apm: "99.568",
                apy: "730.449"
            },
            {
                name: "冷却水",
                uc: "2593.604Nm3/万标",
                change: "9.83%",
                apd: "13.065Nm3/万标",
                apm: "99.568",
                apy: "730.449"
            },
            {
                name: "氮气",
                uc: "2593.604Nm3/万标",
                change: "9.83%",
                apd: "13.065Nm3/万标",
                apm: "99.568",
                apy: "730.449"
            }
        ]
    }
</script>

{#if options}
    <table>
        <thead>
        <tr>
            {#each options.columns as col}
                <th style={"width:" + (col.width ? col.width: "auto")}>{col.label}</th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each options.data as d}
            <tr>
                {#each options.columns as col}
                    <td>{d[col.data]}</td>
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
    }
</style>