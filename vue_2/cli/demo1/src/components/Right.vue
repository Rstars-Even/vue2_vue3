<template>
    <div>
        <h3>right...{{ msgFromLeft }}.</h3>
    </div>
</template>
<script>
import bus from './eventBus.js'
export default {
    data() {
        return {
            msgFromLeft: ''
        }
    },
    created() {
        bus.$on('share', val => {
            this.msgFromLeft = val;
        })
    }
}
</script>