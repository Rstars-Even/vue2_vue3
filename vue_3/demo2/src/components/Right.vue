<template>
    <div class="right">
        <h4 v-color="colors">Right组件、。。。</h4>
    </div>
</template>

<script>
export default {
    name: 'Right',
    props: {
        msg: String
    },
    data() {
        return {
            colors: 'green'
        }
    },
    directives: {                               //在每个 vue 组件中，可以再 directives 节点下声明私有自定义指令。
        color: {                                //自定义指令的名字。
            bind(el, binding) {                 //bind函数只调用1次:当指令第一次绑定到元素时调用，当DOM更新时bind函数不会被触发。update 函数会在每次DOM更新时被调用。
                                                //形参 el 是绑定了此指令的原生 dom 对象, //形参 binding 是使用指令时传的值。
                el.style.color = binding.value;
                console.log('--------binding.val-----', binding.value);
            }
        }
    }
}
</script>
<style scoped>
.right {
  width: 100%;
  height: 200px;
  border: 1px solid red;
}
</style>
