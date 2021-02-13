<script>
    import LightButton from "../button/LightButton.svelte";
    import {onMount, tick} from "svelte";

    let selected
    let current = new Date()
    let today = new Date()
    let showPicker = false
    let pickerWrapper
    let datepicker
    let picker
    let shrink = false
    let w
    let translateX = 0
    let translateY = 0

    $: days = (() => {
        let y = current.getFullYear()
        let m = current.getMonth()
        let firstDay = new Date(y, m, 1)
        let lastDay = new Date(y, m + 1, 0)
        let startDay = new Date(y, m, 1 - firstDay.getDay())
        let days = []

        for (let i = 0; i < 42; i++) {
            let d = new Date(startDay.getFullYear(), startDay.getMonth(), startDay.getDate() + i)
            days.push({
                obj: d,
                day: d.getDate(),
                inPrevMonth: d.getTime() < firstDay.getTime(),
                inNextMonth: d.getTime() > lastDay.getTime()
            })
        }

        return days
    })()

    function isSameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
    }

    function format(d) {
        return d.getFullYear() + '-' + (d.getMonth() + 1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0')
    }

    function checkForFocusLoss(evt) {
        if (!showPicker) return;
        // if (selected) {
        //     current = selected
        // } else {
        //     current = new Date()
        // }
        let el = evt.target;
        // eslint-disable-next-line
        do {
            if (el === datepicker) return;
            // eslint-disable-next-line
        } while (el = el.parentNode);
        close();
    }

    let once = (el, evt, cb) => {
        function handler() {
            cb.apply(this, arguments);
            el.removeEventListener(evt, handler);
        }

        el.addEventListener(evt, handler);
    };

    const getDistanceToEdges = async () => {
        if (!showPicker) showPicker = true
        await tick();
        let rect = pickerWrapper.getBoundingClientRect();
        return {
            top: rect.top + (-1 * translateY) - 63,
            bottom: window.innerHeight - rect.bottom + translateY,
            left: rect.left + (-1 * translateX),
            right: document.body.clientWidth - rect.right + translateX - 10
        };
    };
    const getTranslate = async () => {
        let dist = await getDistanceToEdges();
        let x;
        let
            y;
        if (w < 480) {
            y = dist.bottom;
        } else if (dist.top < 0) {
            y = Math.abs(dist.top);
        } else if (dist.bottom < 0) {
            y = dist.bottom;
        } else {
            y = 0;
        }
        if (dist.left < 0) {
            x = Math.abs(dist.left);
        } else if (dist.right < 0) {
            x = dist.right;
        } else {
            x = 0;
        }
        return {x, y};
    };

    const doOpen = async () => {
        const {x, y} = await getTranslate();
        translateX = x;
        translateY = y;
        showPicker = true;
    };

    function close() {
        shrink = true;
        once(picker, 'animationend', () => {
            shrink = false;
            showPicker = false;
        });
    }

    onMount(() => {
        document.addEventListener('click', checkForFocusLoss);

        // eslint-disable-next-line
        return () => {
            document.removeEventListener('click', checkForFocusLoss);
        };
    });
</script>

<svelte:window bind:innerWidth={w}/>
<div class="datepicker" bind:this={datepicker}>
    <LightButton clickHandler={doOpen}>{format(selected || today)}</LightButton>
    <div class="picker-wrapper" class:show={showPicker} bind:this={pickerWrapper}
         style="transform: translate(-50%,-50%) translate({translateX}px, {translateY}px)">
        <div class="picker" bind:this={picker} class:shrink={shrink}>
            <div class="navbar">
                <div class="control" on:click={() => {current = new Date(current.getFullYear(), current.getMonth() - 1)}}><span class="iconfont icon-shangyige"></span></div>
                <div class="label">{current.getFullYear()}年{current.getMonth() + 1}月</div>
                <div class="control" on:click={() => {current = new Date(current.getFullYear(), current.getMonth() + 1)}}>
                    <span class="iconfont icon-xiayige"></span>
                </div>
            </div>
            <div>
                <div class="legend">
                    <div>日</div>
                    <div>一</div>
                    <div>二</div>
                    <div>三</div>
                    <div>四</div>
                    <div>五</div>
                    <div>六</div>
                </div>
                <div class="month-container">
                    {#each days as day}
                        <div class="day"
                             class:selected={day.obj === selected}
                             class:today={isSameDay(day.obj, today)}
                             class:in-next-month={day.inNextMonth}
                             class:in-prev-month={day.inPrevMonth}
                             on:click={() => {
                             selected = day.obj
                             close()
                         }}
                        >
                            {day.day}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .datepicker {
        position: relative;
    }

    .month-container {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(6, 1fr);
        font-size: 12px;
        grid-gap: 6px;
    }

    .day {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
    }

    .legend {
        display: flex;
        font-size: 12px;
        justify-content: space-between;
    }

    .legend > div {
        width: 28px;
        height: 28px;
        line-height: 28px;
        text-align: center;
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
    }

    .label {
        font-size: 20px;
        font-weight: bold;
    }

    .control {
        cursor: pointer;
    }

    .control > .iconfont {
        font-size: 15px;
    }

    .picker-wrapper {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    .picker {
        background: #fff;
        box-shadow: 0 10px 26px rgb(0 0 0 / 40%);
        padding: 5px;
        animation: grow 200ms forwards cubic-bezier(.92, .09, .18, 1.05);
    }

    .day {
        border-radius: 50%;
        cursor: pointer;
        box-sizing: border-box;
    }

    .day.in-prev-month, .day.in-next-month {
        opacity: 0.35;
    }

    .day:not(.selected):hover {
        background: #efefef;
    }

    .day.selected {
        background: orange;
        color: white;
    }

    .shrink {
        animation: shrink 150ms forwards cubic-bezier(.92, .09, .18, 1.05);
    }

    .today:not(.selected):hover {
        background: none;
    }

    .today {
        border: 1px solid orange;
    }

    .picker-wrapper.show {
        display: block;
    }

    @keyframes grow {
        0% {
            transform: scale(.9, .1);
            opacity: 0;
        }
        30% {
            opacity: 1;
        }

        100% {
            transform: scale(1);
        }
    }

    @keyframes shrink {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(.9, .1);
        }
    }
</style>