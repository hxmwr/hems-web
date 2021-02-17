<script>
    import SimpleTable from "../../widget/table/SimpleTable.svelte";
    import RoleNameDesc from "./RoleNameDesc.svelte"
    import Permissions from "./Permissions.svelte"
    import PrimaryBtn from "../../widget/button/PrimaryBtn.svelte";
    import LightButton from "../../widget/button/LightButton.svelte";

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
    let selectedRows = {}
    let focusedRow = null
</script>


<div class="container">
    <div class="title">
        角色列表
    </div>
    <div class="toolbar">
        <PrimaryBtn>新建角色</PrimaryBtn>
        {#if Object.values(selectedRows).filter(v => v).length > 0 || focusedRow != null}
            <LightButton clazz="danger">删除</LightButton>
        {/if}
    </div>
    <div style="margin: 0 -16px;">
        <SimpleTable options={options} bind:selectedRows={selectedRows} bind:focusedRow={focusedRow}/>
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
