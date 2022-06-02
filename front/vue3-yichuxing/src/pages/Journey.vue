<template>
    <div class="journey-container">
        <h1 style="width: 100%;">选择城市</h1>
        <van-button icon="plus" type="primary" size="large" @click="showChange()">添加城市</van-button>
        <div style="width:100%">
            <div v-for="city in cities" :key="city">
                <span>{{city}}</span><button @click="remove(city)">删除</button>
            </div>
        </div>
        <van-button icon="plus" type="primary" size="large" @click="query()">查询</van-button>
        <div class="result" v-show="resuletShow">
            <h1>此处是查询结果</h1>
        </div>
        <van-popup
            v-model:show="show"
            closeable
            round
            position="bottom"
            style="height:60%;"
            class="all-container"
        >
        
            <van-area title="城市列表" :area-list="areaList" @confirm="confirm" style="margin-top: 50px;"/>
        </van-popup>
        
    </div>
</template>

<script>
    import { areaList } from '@vant/area-data';
    import {  ref } from '@vue/reactivity';
    export default {
        setup() {
            const cities = ref([])
            const isShow = ref(false)
            const show = ref(false)
            const resuletShow = ref(false)
            function confirm(ConfirmResult){
                cities.value.push(ConfirmResult[0].name + ConfirmResult[1].name + ConfirmResult[2].name)
            }
            function showChange(){
                show.value = !show.value
            }
            function remove(city){
                cities.value = cities.value.filter((val) => val != city)
            }
            function query(){
                resuletShow.value = true
            }
            return { 
                areaList,
                isShow,
                cities,
                confirm,
                show,
                showChange,
                remove,
                query,
                resuletShow
            };
        },
    };

</script>

<style scoped>
    .journey-container{
        display: flex;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>