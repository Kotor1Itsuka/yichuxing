import {createStore} from 'vuex'
import test from './modules/test'   //导入模块
export default createStore({ 
    modules:{   //使用模块
        test
    }
})
