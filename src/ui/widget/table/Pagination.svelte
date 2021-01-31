<script>
    export let total = 100
    export let current = 3
    $: let pages = (() => {
        current + 2
    })()
</script>

<div>
    <div>上一页</div>

    <div>下一页</div>
</div>

<style>
    .pg-btn {

    }
</style>