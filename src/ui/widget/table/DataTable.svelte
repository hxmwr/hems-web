<script>
    import Pagination from "./Pagination.svelte";
</script>

<div class="container">
    <div class="header">
        <select>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
            <option>100</option>
        </select>
        条记录每页
    </div>
    <table class="dt">
        <thead class="dt-h">
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Start Date</th>
            </tr>
        </thead>
        <tbody class="dt-b">
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
            <tr>
                <td>wefa</td>
                <td>wefa</td>
                <td>21</td>
                <td>wefa</td>
                <td>wefa</td>
            </tr>
        </tbody>
        <tfoot class="dt-f">

        </tfoot>
    </table>
    <Pagination page={1} total={100} />
</div>

<style>
    .container {
        background: white;
    }

    .header {
        margin: 6px 0;
         font-size: 12px;
    }

    .header > select {
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
    }

    th:last-child {
        border-right-width: 0;
    }

    tbody > tr:nth-of-type(odd) {
        background: rgba(0,0,0,0.03);
    }

    tbody > tr:hover {
        background: #e0f3ff;
    }

    td {
        padding: 0.55rem;
        border: 1px solid #e9ecef;
        border-left-width: 0;
        border-bottom-width: 0;
    }

    td:last-child {
        border-right-width: 0;
    }
</style>