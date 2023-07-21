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
            try {
                this.$bus.$emit('getUser', {isFirst: false, isLoading: true, errMsg: '', users: []})
                const { data: res } = await axios.get('http://api.github.com/search/users', {
                    params: {
                        q: this.keyWord,
                    }
                })
                this.$bus.$emit('getUser', {isLoading: false, errMsg: '', users: res.items})
                console.log('-----res--------', res);
            } catch (error) {
                this.$bus.$emit('getUser', {isLoading: false, errMsg: error, users: []})
                // console.error(error);
            }
        }
    },
}
</script>

<style></style>
