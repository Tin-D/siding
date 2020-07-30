<template>
    <common title="上海司鼎生物欢迎您" pic="http://www.simuwubio.com/upload/img/20200320142331.jpg">
        <div class="content d-flex jc-center" style="background:#f1f1f1;">
            <ul class="d-flex wrap-wrap jc-between ac-between">
                <li class="" v-for="i in content" :key="i.id" :style="{backgroundImage: 'url('+ i.bgImg +')'}">
                    <a href="#" class="content_title">{{i.title}}</a>
                    <div class="content_con">
                        <span>{{i.con}}</span>
                        <span>{{i.read}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </common>
</template>

<script>
    import Common from '../components/common';

    export default {
        components: { Common },
        data() {
            return {
                content: [
                    {
                        id: 1,
                        title: 'WB产品促销',
                        con: '购买产品送二抗',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200408132807.jpg',
                    },
                    {
                        id: 2,
                        title: '细胞培养产品促销活动',
                        con: '特价促销',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200408105303.jpg',
                    },
                    {
                        id: 3,
                        title: 'qPCR实验服务',
                        con: '促销',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200409101123.jpg',
                    },
                    {
                        id: 4,
                        title: 'western blot 实验服务',
                        con: '促销',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200409100750.jpg',
                    },
                    {
                        id: 5,
                        title: '病理实验服务',
                        con: '促销',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200409101526.jpg',
                    },
                    {
                        id: 6,
                        title: '实验中心掠影',
                        con: '欢迎参观',
                        read: 'Read More',
                        bgImg: 'http://www.simuwubio.com/upload/20200409102952.jpg',
                    },
                ],
            };
        },
    }
</script>

<style scoped lang="scss">

    .content {
        margin-top: -10px;
        ul {
            width: 8rem;
            height: 6.56rem;
            padding: 0;
            padding-top: .26rem;
            li {
                width: 1.82rem;
                height: 3.2rem;
                position: relative;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50% 50%;
                box-shadow: 0px 35px 30px -35px #000 inset;
                .content_title {
                    font-size: .1rem;
                    padding: 4px 6px;
                    background: #d60c8c;
                    color: #fff;
                    border-radius: 6px;
                    position: absolute;
                    top: .12rem;
                    left: .1rem;
                    text-decoration: none;
                }

                .content_con {
                    color: #fff;
                    font-size: .22rem;
                    position: absolute;
                    width: 100%;
                    background: #00000099;
                    bottom: 0;
                    height: 30%;
                    transition: all .6s ease;
                    border-bottom-right-radius: 0;
                    span {
                        display: block;
                        margin-left: .12rem;
                    }

                    span:nth-child(2) {
                        color: #004271;
                        font-size: .16rem;
                    }

                    &:hover {
                        height: 40%;
                        transition: all .6s ease;
                    }
                }
            }

            li:nth-child(1) {
                width: 3.88rem;

                .content_con {
                    color: #fff;
                    font-size: .26rem;
                }
            }

            li:nth-child(2) {
                width: 3.88rem;

                .content_con {
                    color: #fff;
                    font-size: .26rem;
                }
            }
        }
    }

</style>
