<template>
    <ul>
        <li><router-link to="/about">公司简介</router-link></li>
        <li><router-link to="/job_recruitment">职位招聘</router-link></li>
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
        bottom: -.7rem;
        left: 0;
        z-index: 100000;
        background: #f1f1f1;
        li a{
            display: block;
            font-size: .12rem;
            padding: .1rem .22rem;
            width: 1.3rem;
            color: #777;
            &:hover{
                color: #000;
                background: #ccc;
            }
        }
    }
</style>
