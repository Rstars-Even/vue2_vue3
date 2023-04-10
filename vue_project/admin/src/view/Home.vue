<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/avatar.jpg" alt="">
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2023-4-10</span></p>
                    <p>上次登录地点：<span>广州</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column v-for="(items, index) in tableLabel" :key="items.name" :prop="index" :label="items" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card v-for="(item, index) in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detall">
                        <p class="price">￥ {{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                        name: "oppo",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: "vivo",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: "Apple",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: "小米",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: "三星",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: "魅族",
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    }
                ],
                tableLabel: {
                    name: '课程',
                    todayBuy: '今日购买',
                    monthBuy: '本月购买',
                    totalBuy: '总购买',
                },
                countData: [{
                        name: "今日支付订单",
                        value: 1234,
                        icon: "success",
                        color: "#2ec7c9"
                    },
                    {
                        name: "今日收藏订单",
                        value: 120,
                        icon: "star-on",
                        color: "#ffb980"
                    },
                    {
                        name: "今日未支付订单",
                        value: 123,
                        icon: "s-goods",
                        color: "#5ab1ef"
                    },
                    {
                        name: "本月支付订单",
                        value: 1240,
                        icon: "success",
                        color: "#2ec7c9"
                    },
                    {
                        name: "本月收藏订单",
                        value: 124,
                        icon: "star-on",
                        color: "#ffb980"
                    },
                    {
                        name: "本月未支付订单",
                        value: 129,
                        icon: "s-goods",
                        color: "#5ab1ef"
                    },
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .user {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        img {
            margin-right: 40px;
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }
        .userinfo {
            .name {
                font-size: 32px;
                margin-bottom: 10px;
            }
            .access {
                color: #999999;
            }
        }
    }
    .login-info {
        p {
            line-height: 28px;
            font-size: 14px;
            color: #999;
            span {
                color: #666;
                margin-left: 60px;
            }
        }
    }
    .num {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .icon {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detall {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .price {
                font-size: 30px;
                margin-bottom: 10px;
                line-height: 30px;
                height: 30px;
            }
            .desc {
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }
        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }
    }
</style>