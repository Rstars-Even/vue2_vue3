//实现一个点击屏幕任意位置，记录下当前鼠标坐标。
import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function() {
    let point = reactive({
        x: 0,
        y: 0
    })

    //实现方法。
    function savePoint(event) {
        point.x = event.pageX
        point.y = event.pageY
    }

    // 为屏幕绑定点击事件。
    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    //当组件销毁时卸载事件
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}