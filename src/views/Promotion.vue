<template>
    <common title="促销活动" pic="http://www.simuwubio.com/upload/img/20190515113613.jpg">
        <div class="content d-flex jc-center" style="background:#f1f1f1;padding: .3rem 0">
            <div class="d-flex dir-column ai-between con">
                <router-link to="">
                    <img src="http://www.simuwubio.com/upload/20200318141332.png" width="126px" alt="买一送一，火爆促销">
                </router-link>

            <router-link to=""><p>买一送一，火爆促销</p></router-link>
            </div>
        </div>
    </common>
</template>

<script>
    import Common from '../components/common';

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
    }
</style>
