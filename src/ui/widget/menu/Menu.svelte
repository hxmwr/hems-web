<script>
    import {Link} from "../../../lib/routing"

    let menus = [
        {
            name: "",
            items: [
                {
                    key: 1,
                    title: '指标看板',
                    path: '/overview',
                    icon: 'icon-biaoqianguanli',
                    isExpanded: false,
                    children: []
                },
                {
                    key: 2,
                    title: '用电分析',
                    icon: 'icon-bociguanli',
                    isExpanded: false,
                    children: [
                        {
                            key: 201,
                            title: 'Home',
                            path: ''
                        },
                        {
                            key: 202,
                            title: 'User',
                            path: 'user'
                        },
                        {
                            key: 203,
                            title: '菜单3',
                            path: ''
                        },
                        {
                            key: 204,
                            title: '菜单4',
                            path: ''
                        }
                    ]
                },
                {
                    key: 3,
                    title: '实时监控',
                    path: '/',
                    icon: 'icon-chukuguanli',
                    isExpanded: false,
                    children: []
                },
                {
                    key: 4,
                    title: '能耗报警',
                    path: '/',
                    icon: 'icon-renwuguanli',
                    isExpanded: false,
                    children: []
                },
                {
                    key: 5,
                    title: '成本管理',
                    path: '/',
                    icon: 'icon-jichuguanli',
                    isExpanded: false,
                    children: []
                },
                {
                    key: 6,
                    title: '环境与排放监测',
                    path: '/',
                    icon: 'icon-kucunguanli',
                    isExpanded: false,
                    children: []
                },
                {
                    key: 7,
                    title: '系统设置',
                    icon: 'icon-xitongguanli',
                    isExpanded: false,
                    children: [
                        {
                            key: 701,
                            title: '用户管理',
                            path: 'user'
                        },
                        {
                            key: 702,
                            title: '权限管理',
                            path: 'auth'
                        }
                    ]
                }
            ]
        }
    ]
    let activeItemKey = 1

    function handleClickMenuItem(event, key) {
        activeItemKey = key
    }
</script>

<div class="container">
    {#each menus as menu}
        <div>{menu.name}</div>
        <ul>
            {#each menu.items as item}
                {#if item.path && item.path !== '' && !(item.children && item.children.length > 0)}
                    <div class="mi" class:active={item.key === activeItemKey}>
                        <Link to={item.path} on:click={e => {handleClickMenuItem(e, item.key)}}>
                            <span class={"iconfont mi-i " + item.icon}>
                                <span class="mi-t">{item.title}</span>
                            </span>
                        </Link>
                    </div>
                {:else}
                    <div class="mi has-children" class:expanded={item.isExpanded}
                         on:click={() => {item.isExpanded = !item.isExpanded}}>
                            <span class={"iconfont mi-i " + item.icon}>
                                <span class="mi-t">{item.title}</span>
                            </span>
                        {#if !item.isExpanded}
                            <span class="iconfont icon-xiala mi-ei" class:expanded={item.isExpanded}></span>
                        {/if}
                    </div>
                    {#if item.children && item.children.length > 0}
                        <div class="sm" class:expanded={item.isExpanded}>
                            {#each item.children as child}
                                <div class="smi" class:active={activeItemKey === child.key}>
                                    <Link to={child.path}
                                          on:click={e => {handleClickMenuItem(e, child.key)}}>{child.title}</Link>
                                </div>
                            {/each}
                        </div>
                    {/if}
                {/if}
            {/each}
        </ul>
    {/each}
</div>

<style>
    .container {
        height: calc(100vh - 53px);
        position: sticky;
        top: 53px;
        overflow-y: auto;
    }

    .container::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: transparent;
    }

    .container::-webkit-scrollbar-corner {
        background-color: transparent;
        border-color: transparent;
    }

    .container::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .container::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: transparent;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding-left: 0;
        padding-top: 16px;
    }

    .mi {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        color: #535a60;
        font-size: 13px;
        padding: 10px 10px 10px 16px;
    }

    .mi.expanded {
        padding-bottom: 6px;
    }

    .mi:hover {
        color: #0c0d0e;
    }

    .mi-i {
    }

    .mi-t {
        margin-left: 10px;
        font-size: 14px;
    }

    .mi-ei {
        font-size: 12px;
    }

    .mi-ei {
        transform: rotateZ(0deg);
    }

    .mi-ei.expanded {
        transform: rotateZ(180deg);
    }

    .sm {
        transition: all .2s;
        height: 0;
        overflow: hidden;
    }

    .sm.expanded {
        transition: all .2s;
        height: auto;
    }

    .smi {
        position: relative;
        cursor: pointer;
        padding-left: 52px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 13px;
        color: #535a60;
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
    }

    .smi:hover {
        color: #0c0d0e;
    }

    .mi.active,
    .smi.active {
        border-right: 3px solid #1bbc9c;
        background: #f4f4f4;
        font-weight: bold;
        color: #0c0d0e;
    }

    .mi.active .mi-i,
    .smi.active .mi-i {
        font-weight: normal;
    }

    .mi.active .mi-i > .mi-t,
    .smi.active .mi-i > .mi-t {
        font-weight: bold;
    }
</style>