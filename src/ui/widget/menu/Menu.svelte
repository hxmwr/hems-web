<script>
    import {Link} from "../../../lib/routing"
    import {getContext, onMount} from "svelte";
    import {ROUTER} from "../../../lib/routing/contexts";

    const { activeRoute } = getContext(ROUTER)

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
                    path: '/electricity'
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
                    title: '环境检测',
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
                            path: '/user'
                        },
                        {
                            key: 702,
                            title: '角色权限',
                            path: '/auth'
                        }
                    ]
                }
            ]
        }
    ]
    let activeItemKey = 1

    function findPath(root, path) {
        if (root.path === path) return root.key
        if (root.children && root.children.length > 0) {
            for (let i = 0; i < root.children.length; i++) {
                let res = findPath(root.children[i], path)
                if (res != null) {
                    return res
                }
            }
        }
        return null
    }

    let unsubscribe = activeRoute.subscribe((v) => {
        if (!v) return
        for (let i = 0; i < menus.length; i++) {
            for (let j = 0; j < menus[i].items.length; j++) {
                let res = findPath(menus[i].items[j], v.route._path)
                if (res != null) {
                    activeItemKey = res
                    return
                }
            }
        }
    })

    onMount(() => {
        unsubscribe()
    })

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
        max-height: calc(100vh - 53px);
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
        padding-top: 24px;
    }

    .mi {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        color: #535a60;
        font-size: 12px;
        padding: 8px 10px 8px 16px;
        margin-bottom: 2px;
    }

    .mi.expanded {
        padding-bottom: 6px;
    }

    .mi:hover {
        color: #0c0d0e;
    }

    .mi-i {
        font-size: 14px;
    }

    .mi-t {
        margin-left: 10px;
        font-size: 13px;
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
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 12px;
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