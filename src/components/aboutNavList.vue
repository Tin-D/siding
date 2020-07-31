<template>
    <ul class="d-block m-0 p-0 bg-f1 ps-a">
        <li><router-link to="/about" class="d-block fs-12 c-77">公司简介</router-link></li>
        <li><router-link to="/job_recruitment" class="d-block fs-12 c-77">职位招聘</router-link></li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    ul{
        bottom: -.7rem;
        left: 0;
        z-index: 100000;
        li a{
            padding: .1rem .22rem;
            width: 1.3rem;
            &:hover{
                color: #000;
                background: #ccc;
            }
        }
    }
</style>
