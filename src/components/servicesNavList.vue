<template>
    <ul id="ul" class=" m-0 p-0 ps-a bg-f1">
        <li><router-link to="/western" class="d-block fs-12 c-77">Western Blot 实验服务</router-link></li>
        <li><router-link to="/real_time" class="d-block fs-12 c-77">Real-time PCR 实验服务</router-link></li>
        <li><router-link to="/bingli" class="d-block fs-12 c-77">病理实验服务</router-link></li>
        <li><router-link to="/elisa" class="d-block fs-12 c-77">ELISA 检测</router-link></li>
        <li><router-link to="/mopian" class="d-block fs-12 c-77">膜片钳电生理技术服务</router-link></li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    ul{
        bottom: -1.78rem;
        left: 0;
        z-index: 100000;
        li a{
            padding: .1rem .22rem;
            width: 1.5rem;
            &:hover{
                color: #000;
                background: #ccc;
            }
        }
    }
</style>
