<template>
    <common title="病理实验服务" pic="http://www.simuwubio.com/upload/img/20190515113613.jpg">
        <div class="d-flex jc-center" style="background:#f1f1f1;padding: .3rem 0;">
            <div class="d-flex dir-column ai-between con">
                <router-link to="">
                    <img src="http://www.simuwubio.com/upload/20200407150412.jpg" width="120px" alt="Real-time PCR实验服务">
                </router-link>

                <router-link to=""><p>切片扫描</p></router-link>
            </div>
            <div class="d-flex dir-column ai-between con">
                <router-link to="">
                    <img src="http://www.simuwubio.com/upload/20200407145419.jpg" width="126px" alt="Real-time PCR实验服务">
                </router-link>

                <router-link to=""><p>免疫荧光</p></router-link>
            </div>
            <div class="d-flex dir-column ai-between con">
                <router-link to="">
                    <img src="http://www.simuwubio.com/upload/20200407141109.png" width="126px" alt="Real-time PCR实验服务">
                </router-link>

                <router-link to=""><p>免疫组化（IHC）</p></router-link>
            </div>
            <div class="d-flex dir-column ai-between con">
                <router-link to="">
                    <img src="http://www.simuwubio.com/upload/20200407115306.png" width="126px" alt="Real-time PCR实验服务">
                </router-link>

                <router-link to=""><p>样本处理/染色</p></router-link>
            </div>
        </div>
    </common>
</template>

<script>
    import Common from '../../components/common';

    export default {
        components: { Common },
        data() {
            return {
            };
        },
    }
</script>

<style lang="scss" scoped>
    .con{
        padding: .05rem;
        background: #fff;
        margin-right: .2rem;
    }
</style>
