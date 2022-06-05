export default {
    namespaced:true, //别忘了这个！！
    state:{
        nowState:'init',
        answer:{},
        reset:function(){},
        calculate:function(){},
        count:0
    },
    getters:{

    },
    mutations:{
        changeNowState(state, value){
            state.nowState = value
        },
        changeReset(state, value){
            state.reset = value
        },
        changeCalculate(state, value){
            state.calculate = value
        },
        changeCount(state, value){
            state.count = value
        }
    },
    actions:{

    }
}