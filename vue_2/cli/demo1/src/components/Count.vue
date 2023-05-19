<template>
    <div>
        <h3>mycount 全局子组件。。。{{ count }}</h3>
    </div>
</template>
<script>
export default {
    // props: ['init']
    props: {
        init: {
            type: Number,
            default: 0,
            // required: true
        }
    },
    data() {
        return {
            count: this.init
        }
    },
}
</script>