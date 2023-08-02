<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="fun">test</button>
    <hr>
    <input type="text" v-model="person.name">
    <input type="text" v-model="person.age">
    <h3>{{ person.fullName }}</h3>
    <input type="text" v-model="person.fullName">
  </div>
</template>

<script>
import {ref, reactive, computed, watchEffect} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  emits: ['custom'],
  setup(props, context) {
    function fun() {
      context.emit('custom', 666)
    }
    let value = ref('')
    let person = reactive({
      name: '张三',
      age: 18,
    })
    // let fullName = computed( () => {      //基本使用。
    //   return person.name + ' ----------- ' + person.age
    // })
    person.fullName = computed({
      get() {
        return person.name + '-' + person.age
      },
      set(value) {
        const nameArr = value.split('-')
        person.name = nameArr[0]
        person.age = nameArr[1]
      }
    })

    watchEffect(() => {
      const x1 = person.name
      // const x2 = person.name + '-' + person.age
      console.log(666666666666);
    })

    return { person, fun }
  }
}
</script>
