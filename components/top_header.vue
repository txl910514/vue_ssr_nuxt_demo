<template>
          	<div class="top-header">
            <div class="iwrap">
                <nav>
                    <a href="http://www.qingtaoke.com/" target="_blank">网站首页</a>
                    <a href="http://www.qingtaoke.com/top/2h" target="_blank">发现好货</a>
                    <dl v-hover="{class:'active'}">
                        <dt><a href="http://www.qingtaoke.com/?r=index/chajian" target="_blank">推广神器</a></dt>
                        <dd><a href="http://www.qingtaoke.com/?r=index/chajian" target="_blank">轻淘客插件</a></dd>
                        <dd><a href="http://www.qingtaoke.com/?r=solution/platformIntroduce" target="_blank">CMS</a></dd>
                        <dd><a href="http://www.qingtaoke.com/openapi" target="_blank">开放API</a></dd>
                    </dl>
                </nav>
                <nav>
                <!-- <a href="http://www.qingtaoke.com/login" target="_blank" v-if="!userInfo">请登录</a>
                <a href="http://www.qingtaoke.com/zhuce" target="_blank" v-if="!userInfo">注册</a> -->
                <dl v-if="headerUserInfo.status == 200" v-hover="{class:'active'}">
                    <dt><a href="javascript:;" target="_blank">欢迎您，{{((headerUserInfo.data || {}).user || {}).username || ''}}</a></dt>
                    <dd><a href="http://www.qingtaoke.com/?r=login/changePwd" target="_blank">密码安全</a></dd>
                    <dd><a href="javascript:;" target="_blank" @click="loginOut">退出</a></dd>
                </dl>
                <div class="middle-border-box" v-if="headerUserInfo.status == 200">
                    <i class="middle-border"></i>
                </div>
                <a href="http://www.qingtaoke.com/?r=userCenter/authList" target="_blank">我的推广</a>
                <div class="middle-border-box">
                    <i class="middle-border"></i>
                </div>
                <a href="http://order.qingtaoke.com/home" target="_blank" v-if="((headerUserInfo.data || {}).user || {}).is_show_orders">放单管理</a>
                <a href="http://shang3.qingtaoke.com" target="_blank" v-if="((headerUserInfo.data || {}).user || {}).is_show_s3">合作放单</a>
                <!-- <a href="" target="_blank">合作放单</a> -->
                    <!--
                    <span>|</span>
                    <a href="" target="_blank">关于我们</a>
                    <span>|</span>
                    <a href="" target="_blank">招商合作</a>
                    -->
                </nav>
            </div>
	    </div>
</template>

<script>
export default {
        data () {
            return {
                headerUser: [],
                urls: [],
                headerUserInfo: {
                    status: 100
                },
                link: "http://www.qtk.com/"
            }
    }
}
</script>

<style lang="less" scoped>
    .top-header {
        height:35px;
        background:rgba(58,59,81,1);
        .iwrap {
            display: flex;
            justify-content: space-between;
            width: 1200px;
            height: 35px;
            margin: 0 auto;
            line-height: 35px;
            nav {
                display: flex;
                a {
                    display: block;
                    color: #72727B;
                    text-decoration: none;
                    &:hover {
                        color: #F40;
                        text-decoration: none;
                    }
                }
                .middle-border-box {
                    width: 1px;
                    display: flex;
                    align-items: center;
                    margin-right: 5px;
                }
                .middle-border {
                    width:1px;
                    height:11px;
                    background:rgba(216,216,216,1);
                    opacity:0.3;
                }
                >a {
                   color: #C4C4CB; 
                }
                &:nth-child(1) a:nth-child(2) {
                    margin: 0 10px 0 25px;
                }
                &:nth-child(2) a:nth-child(1) {
                    margin: 0 10px 0 0;
                }
                &:nth-child(2) a {
                    margin: 0 10px 0 5px;
                }
                 dl {
                    position: relative;
                    margin: 0;
                    padding: 0;
                    z-index: 1999;
                    dt {
                        position: relative;
                        margin: 0;
                        padding: 0 15px;
                        border-left: 1px solid #3A3B51;
                        border-right: 1px solid #3A3B51;
                        a {
                            color: #C4C4CB; 
                        }
                        a:after {
                            position: absolute;
                            top: 15px;
                            width: 7px;
                            height: 4px;
                            margin: 0 0 0 5px;
                            background: url(~assets/drop.png) 0 0 no-repeat;
                            content: "";
                        }
                    }
                    dd {
                        display: none;
                        margin: 0;
                        padding: 0 15px;
                        background: #FFF;
                    }
                    &.active {
                        a {
                            color: #72727B;
                            &:hover {
                                color: #F40;
                            }
                        }
                        dt {
                            background: #FFF;
                            border-top: 1px solid #EDEDED;
                        }
                        dt, dd {
                            border-left: 1px solid #EDEDED;
                            border-right: 1px solid #EDEDED;
                        }
                        dd {
                            display: block;
                            &:last-child {
                                border-bottom: 1px solid #EDEDED;
                            }
                        }
                    }
                }
            }
        }
    }
</style>


