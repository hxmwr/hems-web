<script>
    import SimpleTable from "../../widget/table/SimpleTable.svelte";
    import RoleNameDesc from "./RoleNameDesc.svelte"
    import Permissions from "./Permissions.svelte"
    import PrimaryBtn from "../../widget/button/PrimaryBtn.svelte";

    let options = {
        selectable: true,
        fullWidth: true,
        ajax: {
            url: "http://47.105.46.129:3000/mock/11/api/auth/roles",
            parse: json => json.data.rows
        },
        key: "key",
        columns: [
            {
                label: "名称",
                render: RoleNameDesc
            },
            {
                label: "key",
                data: "key"
            },
            {
                label: "权限",
                render: Permissions
            }
        ]
    }
</script>


<div class="container">
    <div class="title">
        角色列表
    </div>
    <div class="toolbar">
        <PrimaryBtn>新建角色</PrimaryBtn>
    </div>
    <div style="margin: 0 -16px;">
        <SimpleTable options={options} />
    </div>
</div>

<style>
    .title {
        font-size: 24px;
        margin-bottom: 16px;
    }
    .toolbar {
        padding: 16px 0;
    }
</style>
