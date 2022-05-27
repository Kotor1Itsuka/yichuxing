export default {
    namespaced:true,    //namespaced:true代表该模块带有独立命名空间
    state:{             //否则，默认是处于全局命名空间，就和非模块化一样
        personList:[
            {name:'张飞', id:'004'},
            {name:'武则天', id:'005'},
            {name:'秀吉', id:'006'},
        ]
    },
    mutations:{
        addMutation(state, value){      //往personList中添加一个人
            state.personList.push(value)
        },
        removeMutaion(state, value){    //往personList中删除一个人
            state.personList = state.personList.filter((el) => el.id != value.id)
        }
    },
    actions:{
        addAction(context, value){
            setTimeout(() => {
                context.commit('addMutation', value) // ->'male/addMutation'
            }, 1000);
        },
        removeAction(context, value){
            context.commit('removeMutaion', value)
        }
    },
    getters:{
        personList(state){
            return state.personList
        }
    }
}
