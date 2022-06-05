export default {
    namespaced:true,//不加这一项，state能按局部路径访问，但mutation，getter，action会被当成是根上的属性
    state:{
        dateMin: new Date(),
        dateMax: new Date((new Date()).getTime() - 24 * 60 * 60 * 1000),
        dataArr: [],
        nowState: 'init',
        interval:1
    },
    getters:{

    },
    mutations:{
        changeDateMin(state, value){
            if(value instanceof Date){
                state.dateMin = value
            }
        },
        changeDateMax(state, value){
            if(value instanceof Date){
                state.dateMax = value
            }
        },
        changeNowState(state, value){
            state.nowState = value
        },
        changeDataArr(state, value){
            state.dataArr = value
        },
        changeInterval(state, value){
            state.interval = value ? value : 1
        }
    },
    actions:{

    }
}