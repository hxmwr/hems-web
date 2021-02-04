<div data-test="ring-loader-inline" class="ring-loader">

</div>

<style>
    .ring-loader {
        animation: spin_d9f 1s linear infinite;
        border-radius: 8px;
        overflow: hidden;
    }

    .ring-loader:after {
        -webkit-mask-image: radial-gradient(8px, transparent 71.875%, #ffffff 78.125%);
        background-image: conic-gradient(#ff00eb, #bd3bff, #008eff, #58ba00, #f48700, #ff00eb);
        display: block;
        width: 16px;
        height: 16px;
        content: '';
        -webkit-animation: pulse_757 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;
        animation: pulse_757 0.85s cubic-bezier(0.68, 0, 0.74, 0.74) infinite alternate;
    }

    @-webkit-keyframes spin_d9f {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes spin_d9f {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes pulse_757 {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        100% {
            -webkit-transform: scale(1.41667);
            transform: scale(1.41667);
        }
    }

    @keyframes pulse_757 {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }

        100% {
            -webkit-transform: scale(1.41667);
            transform: scale(1.41667);
        }
    }
</style>