<template>
    <h1 style="text-align: center;">疫行者论坛</h1>
    <van-card v-for="i in arr" :key="i">
        <template #title>
            <h2>帖子标题</h2>
            <h3>用户昵称</h3>
        </template>
        <template #desc>
            <p v-for="j in i" :key="j">帖子内容,帖子内容,帖子内容,帖子内容</p>
            
        </template>
        <template #footer>
            <van-button type="success" size="small">点赞</van-button>
            <van-button type="primary" size="small">评论</van-button>
            <van-button type="danger" size="small">举报</van-button>
        </template>
    </van-card>


</template>

<script>
    import {
        ref,
        onMounted
    } from 'vue';

    export default {
        setup() {
            const arr = ref([2, 3, 4, 5, 6])
            return {arr}
        },
    };
</script>

<style scoped>

</style>