<template>
    <div>
        <div class="nav d-flex jc-center">
            <router-link to="/" class="d-flex ai-center"><img src="http://www.simuwubio.com/upload/img/20190117203216.jpg" width="100px"></router-link>
            <ul class="tab d-flex m-0">
                <li class="p-22 d-block fs-12"><router-link to="/" class="c-77">首页</router-link></li>
                <li class="p-22 d-block fs-12" style="position: relative">
                    <router-link to="/services" class="c-77">
                        实验服务
                        <i class="el-icon-caret-bottom"></i>
                        <i class="el-icon-caret-top d-none"></i>
                        <services-nav-list class="list a-fadein d-none"/>
                    </router-link>
                </li>
                <li class="p-22 d-block fs-12" style="position: relative">
                    <router-link to="/product_center" class="c-77">
                        产品中心
                        <i class="el-icon-caret-bottom"></i>
                        <i class="el-icon-caret-top d-none"></i>
                    </router-link>
                    <center-nav-list class="center a-fadein d-none"/>
                </li>
                <li class="p-22 d-block fs-12" style="position: relative">
                    <router-link to="/about" class="c-77">
                        关于我们
                        <i class="el-icon-caret-bottom"></i><i class="el-icon-caret-top d-none"></i>
                        <about-nav-list class="list a-fadein d-none"/>
                    </router-link>
                </li>
                <li class="p-22 d-block fs-12"><router-link to="/news" class="c-77">新闻动态</router-link></li>
                <li class="p-22 d-block fs-12"><router-link to="/promotion" class="c-77">促销活动</router-link></li>
                <li class="p-22 d-block fs-12"><router-link to="/phone" class="c-77">联系我们</router-link></li>
            </ul>
        </div>
        <div class="search d-flex dir-column ps-r" :style="{backgroundImage:'url(' + pic + ')'}">
            <div class="search1 bg-57 d-flex jc-center">
                <div class="search2 as-center">
                    <el-input placeholder="请输入关键词" v-model="input1" style="align-self: center;">
                        <template slot="prepend" style="background:#fff;"><i class="el-icon-search"></i></template>
                        <el-button slot="append" style="background:#00989e;color: #fff;font-weight: 600;width: 200px;">
                            SEARCH NOW
                        </el-button>
                    </el-input>
                </div>
            </div>
            <div class="title as-center fs-48 c-white ps-a">
                <a>{{title}}</a>
            </div>
        </div>
        <slot></slot>
        <footer class="footer bg-f1 d-flex ai-center dir-column">
            <el-divider></el-divider>
            <div class="top">
                <ul class="d-flex jc-between m-0 p-0">
                    <li class="fs-1">
                        <p>促销活动</p>
                    </li>
                    <li class="fs-1 d-flex dir-column jc-between">
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
                <div class="left c-77 fs-12">
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
                show2: true,
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
            li:hover {
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

    .search {
        height: 2.4rem;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        .search1 {
            height: .69rem;
            width: 100%;

            .search2 {
                margin: 0 auto;
                width: 8rem;
            }
        }

        .title {
            font-weight: 200;
            bottom: .7rem;
        }
    }

    .footer {
        margin-top: -12px;
        .top{
            margin: 20px 0 0 0;
            ul{
                width: 8rem;
                li{
                    height: 1.6rem;
                    width: 24%;
                    border-right: 1px solid #777777;
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
            .right{
                li{
                    margin: 0 .05rem;
                }
            }
        }
    }
</style>
