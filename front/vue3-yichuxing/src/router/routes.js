// 	routes.js
import Home from '../pages/Home'
import Forum from '../pages/Forum'
import Journey from '../pages/Journey'
import Question from '../pages/Question'
import Login from '../pages/Login'
export default [
    {
        name: 'Home',
        path: '/home', 
        component: Home,
        meta:{describe: '导航页'}
    },
    {
        path: '/',  //当路径为'/'时，会自动定位到login,即重定向
        redirect: '/login'
        // redirect: { name: 'Home' } //也可以使用命名路由
    },
    {
        name: 'Forum',
        path: '/forum', 
        component: Forum,
        meta:{describe: '疫行者论坛'}
    },
    {
        name: 'Journey',
        path: '/journey', 
        component: Journey,
        meta:{describe: '疫出行'}
    },
    {
        name: 'Question',
        path: '/question', 
        component: Question,
        meta:{describe: '问疫问'}
    },
    {
        name: 'Login',
        path: '/login', 
        component: Login,
        meta:{describe: '登陆'}
    },
]
