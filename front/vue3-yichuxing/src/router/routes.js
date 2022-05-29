// 	routes.js
import Home from '../components/Home'
import About from '../components/About'
import Message from '../components/Message'
export default [
    {
        name: 'Home',
        path: '/home', //路径
        component: Home	//该路径对应的组件
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        children:[  //嵌套路由
            {
                name:'Message',
                path:'message', //路径为 /about/message
                component:Message //message组件将会展现在父路由组件的<router-view/>中
            }
        ]
    },
    {
        path: '/',  //当路径为'/'时，会自动定位到home,即重定向
        redirect: '/home'
        // redirect: { name: 'Home' } //也可以使用命名路由
    }
]
