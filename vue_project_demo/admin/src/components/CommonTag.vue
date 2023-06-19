<template>
    <div class="tabs">
        <el-tag
            v-for="item, index in tags"
            :key="item.path"
            :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'"
            @click="changeMenu(item)"
            @close="handleClose(item, index)"
            size="small"
            >
            {{ item.label }}
        </el-tag>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: 'CommonTag',
    data() {
        return {}
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations(['closeTag']),     //获取 vuex 中的删除方法。。
        // tag 跳转功能。。
        changeMenu(item) {
            this.$router.push({ name: item.name })
        },
        // tag 删除功能。。
        handleClose(item, index) {
            this.closeTag(item);
            const length = this.tags.length
            // 删除之后的跳转逻辑。
            if (item.name !== this.$route.name) {
                return
            }
            // 删除最后一项时。
            if (index === length) {
                this.$router.push({ name: this.tags[index - 1].name })
            } else {    //删除中间的么个 tag 时。。
                this.$router.push({name: this.tags[index].name})
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .tabs {
        padding: 20px;
        .el-tag {
            margin-right: 15px;
            cursor: pointer;
        }
    }
</style>