<template>
    <van-row justify="center">
        <van-col span="23">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="img in imgs" :key="img.id">
                    <img :src="img.src" alt="">
                </van-swipe-item>
            </van-swipe>
        </van-col>
    </van-row>
    <van-row>
        <van-col span="8">
            <div class="icon-container" @click="pushToRoute('Journey')">
                <van-icon size="100px"
                    name="https://img1.baidu.com/it/u=73290,3378048527&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=400" />
                <br>
                <span>疫出行</span>
            </div>
        </van-col>
        <van-col span="8">
            <div class="icon-container" @click="pushToRoute('Forum')">
                <van-icon size="100px"
                    name="https://img1.baidu.com/it/u=3291052729,3557635525&fm=253&fmt=auto?w=800&h=800" />
                <br>
                <span>疫行者论坛</span>
            </div>
        </van-col>
        <van-col span="8">
            <div class="icon-container" @click="pushToRoute('Question')">
                <van-icon size="100px"
                    name="https://img0.baidu.com/it/u=515753124,774182641&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
                <br>
                <span>问疫问</span>
            </div>
        </van-col>
    </van-row>
</template>

<script>
    import {
        useRouter
    } from 'vue-router'
    export default {
        setup() {
            let router = useRouter()
            let imgs = [{
                    src: 'https://img0.baidu.com/it/u=357380178,1938268525&fm=253&fmt=auto&app=120&f=PNG?w=773&h=500',
                    id: 1
                },
                {
                    src: 'https://img2.baidu.com/it/u=4102044646,612565243&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
                    id: 2
                },
                {
                    src: 'https://img2.baidu.com/it/u=3600581973,4053065840&fm=253&fmt=auto&app=120&f=JPEG?w=1080&h=721',
                    id: 3
                },
                {
                    src: 'https://img1.baidu.com/it/u=477830546,4089440546&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
                    id: 4
                }
            ]

            function pushToRoute(name) {
                console.log(name)
                router.push({name})
            }
            return {
                imgs,
                pushToRoute
            }
        }
    }
</script>

<style scoped lang="less">
    img {
        width: 100%;
        height: 6in;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        span{
            display: inline-block;
            text-align: center;
            width: 100%;
        }
    }
</style>