import axios from 'axios'
import store from '../store'
//不知道为什么，这里不能使用import {useStore} from 'vuex'
export default {
    getData(){
        store.commit('weibo/changeNowState', 'loading')
        let dateMin = store.state.weibo.dateMin
        let dateMax = store.state.weibo.dateMax
        let interval = store.state.weibo.interval
        axios.get(`http://baseurl:9007/?min=${dateMin.getTime()}&max=${dateMax.getTime()}&interval=${interval}`).then(
            response => {
                store.commit('weibo/changeDataArr', response.data.reverse())
                store.commit('weibo/changeNowState', 'loaded')
            },
            error => {alert(error.message);}
        )
    }
}