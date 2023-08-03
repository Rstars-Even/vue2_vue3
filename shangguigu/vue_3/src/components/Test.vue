<template>
    <!-- <h3>鼠标坐标：{{ point }}</h3> -->
    <h4>{{ person }}</h4>
    <h4>姓名：{{ name }}</h4>
    <h4>年龄：{{ age }}</h4>
    <h4>薪资：{{ job.j1.salary }}</h4>
    <button @click="name += '!'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">我要涨薪</button>
    <hr>
    <input v-model="text" type="text">
    <h2>{{ text }}</h2>
    <hr>
    <Popup />
</template>

<script>

import { reactive, toRefs, customRef } from 'vue'
import Popup from './Popup.vue'
export default {
    name: 'Test',
    components: {
        Popup
    },
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

        function myRef(value, delay) {
            let timer
            return customRef((track, trigger) => {  //使用自定义方法。
                return {
                    get() {                         //读取值。
                        console.log('读取', value);
                        track()                     //通知 vue 追踪 value 的变化。
                        return value
                    },
                    set(newValue) {                 //修改值（每修改一次值都会执行一次）。
                        console.log('修改', newValue);
                        clearTimeout(timer)         //进入计时器之前，有计时器的话都会被清掉，从而只会执行最后一次的计时器。
                        timer = setTimeout(() => {
                            value = newValue
                            trigger()               //通知 vue 去重新解析模板。
                        }, delay)
                    }
                }
            })
        }
        let text = myRef('hello', 1000)
        return {
            text,
            person,
            ...toRefs(person)
            // name: toRef(person, 'name')
            // age: toRef(person, 'age')
            // salary: toRef(person.job.j1, 'salary')
        }
    }
}
</script>
