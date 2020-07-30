<template>
    <ul id="ul">
        <li><router-link to="/western">Western Blot 实验服务</router-link></li>
        <li><router-link to="/real_time">Real-time PCR 实验服务</router-link></li>
        <li><router-link to="/bingli">病理实验服务</router-link></li>
        <li><router-link to="/elisa">ELISA 检测</router-link></li>
        <li><router-link to="/mopian">膜片钳电生理技术服务</router-link></li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    ul{
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: -1.78rem;
        left: 0;
        z-index: 100000;
        background: #f1f1f1;
        li a{
            display: block;
            font-size: .12rem;
            padding: .1rem .22rem;
            width: 1.5rem;
            color: #777;
            &:hover{
                color: #000;
                background: #ccc;
            }
        }
    }
</style>
