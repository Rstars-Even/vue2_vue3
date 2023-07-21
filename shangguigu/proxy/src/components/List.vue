<template>
    <div class="row">
        <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <h3 v-show="info.isFirst">欢迎使用。。。</h3>
        <h3 v-show="info.isLoading">数据加载中。。。</h3>
        <h3 v-show="info.errMsg">{{ info.errMsg }}</h3>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'List',
    data() {
        return {
            info: {
                users: [],
                isFirst: true,
                isLoading: false,
                errMsg: '',
            }
        }
    },
    mounted() {
        this.$bus.$on('getUser', (dataObj) => {
            this.info = {...this.info, ...dataObj}
        })
    }
}
</script>

<style>
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>
