import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/message.vue'
import News from '../pages/news.vue'
import Detail from '../pages/messageDatil.vue'
export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/news',
                component: News
            },
            {
                path: 'message',
                component: Message,
                children: [
                    {
                        path: '/home/message/detail/:id',
                        component: Detail
                    }
                ]
            },
            {
                path: '',
                redirect: '/home/news'
            }
        ]
    },
    {
        path: '/',
        redirect: '/about'
    }
]
