import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import router from '@/router'
app.use(router)

import store from '@/store'
app.use(store)

import { NavBar, Button, Col, Row, Swipe, SwipeItem, Icon, Area, Field, CellGroup, Popup  } from 'vant';
app.use(NavBar)
app.use(Button)
app.use(Col)
app.use(Row)
app.use(Swipe)
app.use(SwipeItem)
app.use(Icon)
app.use(Area)
app.use(Field);
app.use(CellGroup);
app.use(Popup);

app.mount('#app')

