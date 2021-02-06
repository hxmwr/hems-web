<script>
    import Highcharts from "highcharts"
    import {onMount} from "svelte";
    import Card from "../widget/card/Card.svelte";

</script>

<div class="container">
    <Card>
        <div class="data-labels">
            <div class="data-label">
                <div class="row">
                    <div class="title">原料气</div>
                    <div class="metric">流量</div>
                    <div class="rate">8.96%</div>
                </div>
                <div class="total">34278.056万Nm3</div>
                <div class="chart">chart</div>
            </div>
            <div class="data-label">
                <div class="title">原料气</div>
                <div class="metric">流量</div>
                <div class="rate">8.96%</div>
                <div class="total">34278.056万Nm3</div>
                <div class="chart">chart</div>
            </div>
            <div class="data-label">
                <div class="title">原料气</div>
                <div class="metric">流量</div>
                <div class="rate">8.96%</div>
                <div class="total">34278.056万Nm3</div>
                <div class="chart">chart</div>
            </div>
            <div class="data-label">
                <div class="title">原料气</div>
                <div class="metric">流量</div>
                <div class="rate">8.96%</div>
                <div class="total">34278.056万Nm3</div>
                <div class="chart">chart</div>
            </div>
            <div class="data-label">
                <div class="title">原料气</div>
                <div class="metric">流量</div>
                <div class="rate">8.96%</div>
                <div class="total">34278.056万Nm3</div>
                <div class="chart">chart</div>
            </div>
        </div>
    </Card>
    <Card>

    </Card>
</div>


<style>
    .container {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 8px;
    }

    .data-labels {
        display: flex;
    }

    .data-label {
        min-width: 165px;
    }
</style>