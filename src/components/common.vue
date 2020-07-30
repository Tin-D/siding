<template>
    <div>
        <div class="nav d-flex jc-center">
            <router-link to="/" class="d-flex ai-center"><img src="http://www.simuwubio.com/upload/img/20190117203216.jpg" width="100px"></router-link>
            <ul class="tab d-flex">
                <li><router-link to="/">首页</router-link></li>
                <li style="position: relative">
                    <router-link to="/services">
                        实验服务
                        <i class="el-icon-caret-bottom"></i>
                        <i class="el-icon-caret-top"></i>
                        <services-nav-list class="list"/>
                    </router-link>
                </li>
                <li style="position: relative">
                    <router-link to="/product_center">
                        产品中心
                        <i class="el-icon-caret-bottom"></i>
                        <i class="el-icon-caret-top"></i>
                    </router-link>
                    <center-nav-list class="center"/>
                </li>
                <li style="position: relative">
                    <router-link to="/about">
                        关于我们
                        <i class="el-icon-caret-bottom"></i><i class="el-icon-caret-top"></i>
                        <about-nav-list class="list"/>
                    </router-link>
                </li>
                <li><router-link to="/news">新闻动态</router-link></li>
                <li><router-link to="/promotion">促销活动</router-link></li>
                <li><router-link to="/phone">联系我们</router-link></li>
            </ul>
        </div>
        <div class="search" :style="{backgroundImage:'url(' + pic + ')'}">
            <div class="search1">
                <div class="search2">
                    <el-input placeholder="请输入关键词" v-model="input1" style="align-self: center;">
                        <template slot="prepend" style="background:#fff;"><i class="el-icon-search"></i></template>
                        <el-button slot="append" style="background:#00989e;color: #fff;font-weight: 600;width: 200px;">
                            SEARCH NOW
                        </el-button>
                    </el-input>
                </div>
            </div>
            <div class="title">
                <a>{{title}}</a>
            </div>
        </div>
        <slot></slot>
        <footer class="footer bg-f1 d-flex ai-center dir-column">
            <el-divider></el-divider>
            <div class="top">
                <ul class="d-flex jc-between">
                    <li>
                        <p>促销活动</p>
                    </li>
                    <li class="d-flex dir-column jc-between">
                        <div>
                            <p>上海司鼎生物科技有限公司</p>
                            <p>上海徐汇区银都路398号1号楼401室</p>
                        </div>
                        <div>
                            <p>021-51216849</p>
                            <p>15221073672@163.com</p>
                        </div>
                    </li>
                    <li class="d-flex jc-center">
                        <img src="http://www.simuwubio.com/upload/img/20200320133149.jpg" width="80%" alt="底部logo">
                    </li>
                    <li class="d-flex jc-center">
                        <img src="http://www.simuwubio.com/upload/img/20200320133414.jpg" width="80%" alt="底部logo2">
                    </li>
                </ul>
            </div>
            <el-divider></el-divider>
            <div class="bottom d-flex jc-between">
                <div class="left">
                    <p>Copyright  ©  2019-2020   上海司鼎生物科技有限公司  All Rights Reserved.</p>
                </div>
                <ul class="right d-flex">
                    <li><a href="#"><i class="fa fa-2x">
                        <img src="http://www.simuwubio.com/images/youtube-play.png"></i></a></li>
                    <li><a href="#"><i class="fa fa-2x">
                        <img src="http://www.simuwubio.com/images/linkedin-square.png"></i></a></li>
                    <li><a href="#"><i class="fa fa-2x">
                        <img src="http://www.simuwubio.com/images/twitter.png"></i></a></li>
                    <li><a href="#"><i class="fa fa-2x">
                        <img src="http://www.simuwubio.com/images/facebook-square.png"></i></a></li>
                    <li class="show-for-small"><a href="[LiveChat]"><i class="fa fa-2x">
                        <img src="http://www.simuwubio.com/images/comment.png"></i></a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
    import AboutNavList from '../components/aboutNavList';
    import ServicesNavList from '../components/servicesNavList';
    import centerNavList from '../components/centerNavList';

    export default {
        components: { AboutNavList, ServicesNavList, centerNavList },
        data() {
            return {
                input1: '',
            };
        },
        props: {
            title: {
                type: String,
                required: true,
            },
            pic: {
                type: String,
                required: true,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .nav {
        .tab {
            margin: 0;

            li{
                display: block;
                font-size: .12rem;
                padding: .22rem;
                a{
                    color: #777777;
                }
                .el-icon-caret-top, .list, .center {
                    display: none;
                }

                &:hover {
                    background: #f1f1f1;
                    color: #000;
                    .list{
                        display: block;
                    }
                    .center{
                        display: flex;
                    }
                    .el-icon-caret-bottom {
                        display: none;
                    }
                    .el-icon-caret-top {
                        display: inline-block;
                    }
                }
            }
        }
    }

    .search {
        height: 2.4rem;
        display: flex;
        flex-direction: column;
        position: relative;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        .search1 {
            height: .69rem;
            width: 100%;
            display: flex;
            justify-content: center;
            background: #57657e;

            .search2 {
                margin: 0 auto;
                width: 8rem;
                align-self: center;
            }
        }

        .title {
            align-self: center;
            font-size: .48rem;
            color: #fff;
            font-weight: 200;
            position: absolute;
            bottom: .7rem;
        }
    }

    .footer {
        margin-top: -12px;
        .top{
            margin: 20px 0 0 0;
            ul{
                margin: 0;
                padding: 0;
                width: 8rem;
                li{
                    height: 1.6rem;
                    width: 24%;
                    border-right: 1px solid #777777;
                    font-size: .1rem;
                    font-weight: bold;
                }
                li:nth-last-child(1){
                    border-right: 0;
                }
            }
        }
        .bottom{
            padding: .2rem 0;
            width: 8rem;
            .left{
                color: #777777;
                font-size: .12rem;
            }
            .right{
                li{
                    margin: 0 .05rem;
                }
            }
        }
    }
</style>
