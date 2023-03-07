<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <CommonAside/>
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader></CommonHeader>
                </el-header>
                <el-main>
                    <h1>我是 Main 页面。。。</h1>
                    <!-- 路由嵌套。。。 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';

    export default {
    data() {
        return {};
    },
    components: {
        CommonAside,
        CommonHeader
    }
}
</script>

<style lang="less" scoped>
    .el-header {
        padding: 0px;
    }
    .el-menu {
        border-right: none;
    }
</style>