<script>
    export let value = "--"

</script>
<div class:positive={value > 0} class:negative={value < 0}>
    <span class="iconfont icon-triangle" class:hide={value==='--' || !value}></span>
    <span>{value}%</span>
</div>
<style>
    .iconfont {
        font-size: 9px;
        vertical-align: middle;
    }
    .iconfont.hide {
        visibility: hidden;
    }
    .negative {
        color: red;
    }
    .positive {
        color: green;
    }
</style>
