<template>
    <div class="table d-flex m-0 p-0 ps-a c-black" style="background: #F1F1F1; min-width: 820%;">

        <div class="columns">
            <h3>Western blot</h3>

            <span v-for="i in Western" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>

        </div>

        <div class="columns">
            <h3>免疫组化</h3>

            <span v-for="i in Mianyi" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>

        </div>

        <div class="columns">
            <h3>细胞培养产品</h3>

            <span v-for="i in Cell" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>
        </div>

        <div class="columns">
            <h3>Elisa试剂盒</h3>

            <span v-for="i in Elisa" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>
        </div>

        <div class="columns">
            <h3>常规耗材</h3>

            <span v-for="i in Changgui" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>
        </div>

        <div class="columns">
            <h3>常用生化试剂</h3>

            <span v-for="i in Changyong" :key="i" ><router-link to="" :title="i">{{i}}</router-link></span>

        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                Western: ['蛋白抽提', '蛋白定量', '蛋白电泳', '转膜/显色', 'WB常用试剂耗材', '抗体'],
                Mianyi: ['取材固定', '灭活/修复/封闭', '染色试剂盒', '免疫荧光二抗', '显色/复染/封片', 'IHC常用试剂耗材'],
                Cell: ['血清/ 培养基', '胰酶/双抗', '细胞培养试剂', '细胞相关培养耗材', '细胞增殖与毒性试剂'],
                Elisa: ['常用人ELISA', '常用小鼠ELISA', '常用大鼠ELISA'],
                Changgui: ['吸头', '移液器', 'PCR管/离心管', '其他'],
                Changyong: ['常用缓冲液', '生化试剂'],
            };
        },
    }
</script>

<style lang="scss" scoped>
    .table{
        bottom: -3rem;
        left: -3rem;
        z-index: 100000;
        .columns{
            margin: .2rem;
            span{
                a{
                    color: #777;
                }
                display: block;
                padding: .1rem;
                &:hover{
                    background: #ccc;
                    color: #000;
                }
            }
        }
    }
</style>
