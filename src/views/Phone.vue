<template>
    <common title="联系我们" pic="http://www.simuwubio.com/upload/img/20190515113613.jpg">
        <div class="content d-flex jc-center" style="background:#f1f1f1;">
            <ul>
                <li>
                    上海司鼎生物科技有限公司
                </li>
                <li>
                    地址：上海市徐汇区银都路398号1号楼401
                </li>
                <li>
                    联系人：周先生
                </li>
                <li>
                    电话：021-51216849
                </li>
                <li>
                    Email：15221073672@163.com
                </li>
                <li>
                    QQ：2509922745
                </li>
                <li>
                    手机：18018586648
                </li>
                <li>
                    微信号：18018586648
                </li>
                <li>
                    <ve-bmap
                            :settings="chartSettings"
                            :series="chartSeries"
                            :tooltip="chartTooltip">
                    </ve-bmap>
                </li>
            </ul>
        </div>
    </common>
</template>

<script>
    import Common from '../components/common';

    export default {
        components: { Common },
        data () {
            this.chartSettings = {
                key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
                bmap: {
                    center: [121.44, 31.04],
                    zoom: 14,
                    roam: true,
                    mapStyle: {}
                }
            };
            this.chartTooltip = { show: true };
            return {
                chartSeries: [
                    {
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: [
                            [121.44, 31.04, 1] // 经度，维度，value，...
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        ul{
            li{
                color: #777777;
                width: 5rem;
                list-style: square;
                padding: .08rem;
                font-size: .12rem;
                border-bottom: 1px dashed orange;
            }
        }
    }

</style>
