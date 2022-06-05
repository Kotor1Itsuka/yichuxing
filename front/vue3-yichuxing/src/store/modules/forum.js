export default{
    namespaced:true,
    state:{
        routes:[
            {describe:'微博热搜历史查询', path:'/weibo',name:'WeiBo'},
            {describe:'数独计算器', path:'/shudu',name:'ShuDu'},
            {describe:'空的home', path:'/home',name:'Home'},
            {describe:'空的about', path:'/about',name:'About'},
            
        ]
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        routes(state){
            return state.routes
        }
    }
}