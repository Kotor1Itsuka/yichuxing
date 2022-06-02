<template>

    <div class="login-container">
        <h1>登陆</h1>
        <van-cell-group inset>
            <van-field v-model="username" label="账号" placeholder="请输入账号" />
            <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" />
        </van-cell-group>
        <van-button round type="primary" size="normal" @click="login()">登陆</van-button>
        <van-button round type="primary" size="normal" @click="showChange()">注册</van-button>
    </div>
    
    <van-popup
        v-model:show="show"
        closeable
        round
        position="bottom"
        style="height:60%;"
        class="all-container"
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

            function showChange(){
                show.value = !show.value
            }
            function login(){
                if(username.value == '123' && password.value == '123'){
                    router.push('/home')
                }
                else {
                    alert('登陆失败(账号密码均为123)')
                }
            }
            function register(){
                alert('注册成功')
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