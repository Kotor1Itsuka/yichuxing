<template>

    <van-cell-group inset>
        <van-field v-model="sms" center clearable placeholder="请输入搜索的内容">
            <template #button>
                <van-button size="small" type="primary">点击搜索</van-button>
            </template>
        </van-field>
    </van-cell-group>


    <van-card v-for="i in arr" :key="i">
        <template #title>
            <h2 style="color: cadetblue;">帖子标题{{i}}</h2>
            <h3>用户昵称{{i}}</h3>
        </template>
        <template #desc>
            <p v-for="j in i" :key="j">帖子内容,帖子内容,帖子内容,帖子内容</p>
        </template>
        <template #footer>
            <van-button type="success" size="small">点赞</van-button>
            <van-button type="primary" size="small">评论</van-button>
            <van-button type="danger" size="small">举报</van-button>
            <van-button type="primary" color="purple" size="small">转发</van-button>
        </template>
    </van-card>
    <van-card v-for="i in arr.slice(0,2)" :key="i">
        <template #title>
            <h2 style="color: salmon;">提问标题{{i}}</h2>
            <h3>用户昵称{{i + 3}}</h3>
        </template>
        <template #desc>
            <p v-for="j in i" :key="j">提问内容,提问内容,提问内容,提问内容</p>
        </template>
        <template #footer>
            <van-button type="success" size="small">点赞</van-button>
            <van-button type="primary" size="small">回答</van-button>
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
            const arr = ref([1, 2, 3])
            return {
                arr
            }
        },
    };
</script>

<style scoped>

</style>