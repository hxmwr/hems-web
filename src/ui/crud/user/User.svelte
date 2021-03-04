<script>
    import DataTable from "../../widget/table/DataTable.svelte";
    import Actions from "./Actions.svelte"
    import {Urls} from "../../../api";

    let dataTableOptions = {
        ajax: Urls.get('users'),
        columns: [
            {
                title: "Name",
                data: "name",
                width: "20%"
            },
            {
                title: "Age",
                data: "age",
                width: "10%"
            },
            {
                title: "Address",
                data: "address",
                width: "20%"
            },
            {
                title: "Email",
                data: "email",
                width: "30%"
            },
            {
                title: "角色",
                data: "phone",
                width: "10%"
            }
        ]
    }
</script>
<div>
    <DataTable title="用户列表" options={dataTableOptions} actionsComponent={Actions} />
</div>