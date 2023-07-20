<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
import axios from "axios"
import List from "@/components/List.vue"
import Search from "@/components/Search.vue"
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    // async getData() {
    //   const { data: res } = await axios.get('http://localhost:8080/api/students')
    //   console.log(res);
    // }
  },
  components: {
    List,
    Search
  }
}
</script>

<style>

</style>
