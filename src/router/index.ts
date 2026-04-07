import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import WaterfallPage from '@/components/pages/WaterfallPage.vue'
import GalleryPage from '@/components/pages/GalleryPage.vue'


const routes: Array<RouteRecordRaw> = [
    {
        name: 'Gallery',
        path: '/',
        component: GalleryPage, // Галерея открывается первой
    },
    {
        name: 'Waterfall',
        path: '/Waterfall',
        component: WaterfallPage,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})


router.isReady().then(() => {
    // Безопасное удаление из localStorage
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('vuetify:dynamic-reload')
    }
})
export default router