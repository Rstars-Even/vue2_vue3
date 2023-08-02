<template>
   <!-- <h3>鼠标坐标：{{ point }}</h3> -->
   <h4>{{ person }}</h4>
   <h4>姓名：{{ name }}</h4>
   <h4>年龄：{{ age }}</h4>
   <h4>薪资：{{ job.j1.salary }}</h4>
    <button @click="name+='!'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">我要涨薪</button>
</template>

<script>

import { reactive, toRefs } from 'vue'
export default {
    name: 'Test',
    setup() {
        let person = reactive({
            name: '张三',
            age: 20,
            job: {
                j1: {
                    salary: 250
                }
            }
        })
        return {
            person,
            ...toRefs(person)
            // name: toRef(person, 'name')
            // age: toRef(person, 'age')
            // salary: toRef(person.job.j1, 'salary')
        }
    }
}
</script>
