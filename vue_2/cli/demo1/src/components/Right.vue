<template>
    <div>
        <h3>right...{{ msgFromLeft }}.</h3>
        <input type="text" v-if="show" ref="ipRef" @blur="showButton">
        <button @click="isShow" v-else>按钮</button>
    </div>
</template>
<script>
import bus from './eventBus.js'
export default {
    data() {
        return {
            msgFromLeft: '',
            show: false
        }
    },
    created() {
        bus.$on('share', val => {
            this.msgFromLeft = val;
        })
    },
    methods: {
        isShow() {
            this.show = true;
            // this.$refs.ipRef.focus();     //focus() 方法：显示输入框时，自动聚焦。。。-----直接这样写会 ipRef 引用为： undefined，页面还没有相应的 dom 元素。
            this.$nextTick(() => {
                this.$refs.ipRef.focus();
            })

            const arr = [{ id: 1, name: '西瓜',state: true },{ id: 2, name: '榴莲',state: true }, { id: 3, name: '草莓',state: true }]
            console.log(arr.every(item => item.state))
        },
        showButton() {
            this.show = false;      //当输入框失去焦点（点击输入框外部元素）触发的事件。。。
        }
    }
}
</script>