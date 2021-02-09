<script>
    export let total = 1
    export let page = 1

    let jumpToPage = total
    $: model = (() => {
        let model = {
            total: total,
            page: page,
            moreBefore: false,
            moreAfter: false
        }

        let end = page + 2
        let start = page - 2
        if (end > total) {
            start = start - (end - total)
            end = total
        }
        if (start < 1) {
            start = 1
        }
        if (end - start + 1 < 5) {
            end = end + 5 - (end - start + 1)
            if (end > total) {
                end = total
            }
        }
        if (start > 3) {
            model.moreBefore = true
        }
        if (end < total - 1) {
            model.moreAfter = true
        }

        model.start = start
        model.end = end

        return model
    })()

    function gotoPage(index) {
        if (index === model.page || index < 1 || index > model.total) {
            // ignore invalid operation
        } else {
            page = index
        }
    }
</script>

<div class="pg">
    <div class="item prev" class:disabled={model.page < 2} on:click={() => gotoPage(model.page - 1)}><span class="iconfont icon-shangyige"></span>上一页</div>
    {#if model.moreBefore}
        <div class="item" on:click={() => gotoPage(1)}>1</div>
        <div class="item" on:click={() => gotoPage(2)}>2</div>
        <div class="item dot">...</div>
    {:else}
        {#each Array.from({length: model.start - 1}, (x, i) => i) as e,i}
            <div class="item" on:click={() => gotoPage(i + 1)}>{1 + i}</div>
        {/each}
    {/if}
    {#each Array.from({length: model.end - model.start + 1}, (x, i) => i) as e, i}
        <div class="item" class:current={model.start + i == model.page} on:click={() => gotoPage(model.start + i)}>{model.start + i}</div>
    {/each}
    {#if model.moreAfter}
        <div class="item dot">...</div>
    {:else}
        {#if model.end < model.total}
            <div class="item" on:click={() => gotoPage(model.total)}>{model.total}</div>
        {/if}
    {/if}
    <div class="item next" class:disabled={model.page >= model.total} on:click={() => gotoPage(model.page + 1)}>下一页<span class="iconfont icon-xiayige"></span></div>
    <div class="jump">共{model.total}页，到第<input on:keypress={e => {if (e.keyCode === 13) gotoPage(jumpToPage)}} type="number" min="1" max={model.total} bind:value={jumpToPage} />页<button on:click={() => gotoPage(jumpToPage)}>确定</button></div>
</div>

<style>
    .pg {
        display: flex;
        font-size: 14px;
        user-select: none;
    }
    .pg > .item {
        width: 35px;
        height: 35px;
        margin-left: -1px;
        border: 1px solid #ededed;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        color: #3d3d3d;
        cursor: pointer;
    }
    .pg > .prev,
    .pg > .next {
        width: 70px;
        line-height: 1;
    }
    .pg > .prev > .iconfont,
    .pg > .next > .iconfont {
        font-size: 10px;
        font-weight: bolder;
    }

    .pg > .prev {
        margin-right: 6px;
    }
    .pg > .next {
        margin-left: 5px;
        margin-right: 5px;
    }
    .pg > .dot {
        border: none;
        width: 24px;
        cursor: default;
    }
    .pg > .item.current {
        cursor: default;
        background: #1bbc9c;
        border-color: #1bbc9c;
        z-index: 1;
        color: #fff;
    }

    .pg > .item.disabled {
        color: #ccc;
        cursor: not-allowed;
    }

    .pg > .item:not(.current, .disabled):hover {
        border-color: #1bbc9c;
        z-index: 1;
    }

    .pg > .jump {
        font-size: 12px;
    }

    .pg > .jump > input {
        border: solid 1px #ededed;
        height: 21px;
        text-align: center;
        margin: 7px 4px 0;
    }

    .pg > .jump > button {
        height: 21px;
        padding: 0 4px;
        font-size: 12px;
        margin-left: 5px;
    }
</style>