<script>
    import DataTable from "../../widget/table/DataTable.svelte";
    import Operations from "./Operations.svelte"

    let dataTableOptions = {
        ajax: 'http://47.105.46.129:3000/mock/11/api/users',
        columns: [
            {
                title: "Name",
                data: "name"
            },
            {
                title: "Age",
                data: "age"
            },
            {
                title: "Sex",
                data: "sex"
            },
            {
                title: "Address",
                data: "address"
            },
            {
                title: "Email",
                data: "email"
            },
            {
                title: "Phone",
                data: "phone"
            }
        ]
    }
</script>
<div>
    <DataTable title="数据表" options={dataTableOptions} groupOperationsComponent={Operations} />
</div>