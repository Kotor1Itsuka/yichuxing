<template>

    <div class="login-container">
        <h1>登陆</h1>
        <van-cell-group inset>
            <van-field v-model="username" label="账号" placeholder="请输入账号" />
            <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" />
        </van-cell-group>
        <van-button round type="primary" size="normal" @click="login()">登陆</van-button>
        <van-button round type="primary" size="normal" @click="showChange()">注册</van-button>
        <h2 style="color: red;" v-show="h2show">账号或密码错误</h2>
    </div>
    <van-popup
        v-model:show="show"
        closeable
        position="bottom"
        :style="{ height: '60%' }"
    >
        <div class="login-container">
            <h1>注册</h1>
            <van-cell-group inset>
                <van-field v-model="registerUsername" label="账号" placeholder="请输入账号" />
                <van-field v-model="registerPassword" label="密码" type="password" placeholder="请输入密码" />
            </van-cell-group>
            <van-button round type="primary" size="normal" @click="register()">注册</van-button>
        </div>
    </van-popup>
</template>

<script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    export default {
        setup() {
            let router = useRouter()
            const username = ref('');
            const password = ref('');
            const registerUsername = ref('');
            const registerPassword = ref('');
            const show = ref(false);
            const h2show = ref(false)
            function showChange(){
                if(show.value){
                    show.value = false
                }
                else show.value = true
            }
            function login(){
                if(username.value == '123' && password.value == '123'){
                    console.log(123);
                    router.push('/home')
                }
                else {
                    h2show.value = true
                }
            }
            function register(){

            }
            return { 
                username,
                password,
                showChange,
                show,
                login,
                register,
                registerUsername,
                registerPassword,
                h2show
            };
        },
    };

</script>

<style lang="less" scoped>
    .login-container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        button{
            width: 40%;
        }
    }
</style>