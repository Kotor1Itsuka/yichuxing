import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import router from '@/router'
app.use(router)

import store from '@/store'
app.use(store)

import { NavBar, Button, Col, Row, Swipe, SwipeItem, Collapse, CollapseItem,
    Icon, Area, Field, CellGroup, Popup, ContactCard, ContactList, Card, Skeleton } from 'vant';
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
app.use(ContactCard)
app.use(ContactList)
app.use(Card)
app.use(CollapseItem)
app.use(Collapse)
app.use(Skeleton)

app.mount('#app')

