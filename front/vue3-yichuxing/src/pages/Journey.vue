<template>
    <div class="journey-container">
        <h1 style="width: 100%;">选择城市</h1>
        <h3 style="text-align:left;width: 100%;">已选城市:</h3>
        <div style="width:100%">
            <div v-for="city in cities" :key="city">
                <span>{{city}}</span><button>删除</button>
            </div>
        </div>
        
        <van-area title="标题" :area-list="areaList" v-model="value" @confirm="confirm"/>
    </div>
</template>

<script>
    import { areaList } from '@vant/area-data';
    import {  ref } from '@vue/reactivity';

    export default {
        setup() {
            let cities = ref(['成都市新都区','成都市金牛区', '成都市青羊区'])
            let isShow = ref(false)
            let value = ref(0)
            function confirm(){
                console.log(value.value);
            }
            return { 
                areaList,
                isShow,
                cities,
                value,
                confirm
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