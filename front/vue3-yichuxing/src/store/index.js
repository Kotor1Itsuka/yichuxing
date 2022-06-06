import {createStore} from 'vuex'
import forum from './modules/forum'   //导入模块
export default createStore({ 
    modules:{   //使用模块
        forum
    }
})
