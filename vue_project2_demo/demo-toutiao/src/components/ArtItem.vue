<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img src="https://www.escook.cn/vuebase/pics/1.png" alt="" class="thumb" v-if="cover.type === 1">
          <img src="../assets/logo.png" alt="" class="thumb" v-if="cover.type === 0">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img v-for="(item, index) in cover.images" :src="item" :key="index" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ name.slice(0, 4) }} &nbsp;&nbsp; {{ count }} 评论 &nbsp;&nbsp; 发布日期 {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArtItem',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    count: {
      type: [String, Number],
      default: 0
    },
    cover: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.label-box {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   .thumb {
     // 矩形黄金比例：0.618
     width: 113px;
     height: 70px;
     background-color: #f8f8f8;
     object-fit: cover;
   }

   .title-box {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
   }

   .thumb-box {
     display: flex;
     justify-content: space-between;
   }
</style>
