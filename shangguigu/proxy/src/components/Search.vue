<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;<button @click="getData">Search</button>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default {
    name: 'Search',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        async getData() {
            const { data: res } = await axios.get('http://api.github.com/search/users', {
                params: {
                    q: this.keyWord,
                }
            })
            console.log('-----res--------', res);
            this.$bus.$emit('getUser', res.items)
        }
    },
}
</script>

<style></style>
