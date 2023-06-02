<template>
    <div>
        <h3>left...{{ count }}</h3>
        <button @click="send">send</button>
    </div>
</template>
<script>
import bus from './eventBus.js'
export default {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        send() {
            this.count += 1;
            bus.$emit('share', this.count);     //数据发送方。
        }
    }
}
</script>