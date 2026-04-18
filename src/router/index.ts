import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import WaterfallPage from '@/components/pages/WaterfallPage.vue'
import GalleryPage from '@/components/pages/GalleryPage.vue'
import WebsitePage from '@/components/pages/WebsitePage.vue'
import FacePage from '@/components/pages/FacePage.vue'


const routes: Array<RouteRecordRaw> = [
    {
        name: 'Gallery',
        path: '/Gallery',
        component: GalleryPage
    },
    {
        name: 'Waterfall',
        path: '/Waterfall',
        component: WaterfallPage,
    },
    {
        name: 'Website',
        path: '/Website',
        component: WebsitePage,
    },
    {
        name: 'Face',
        path: '/',
        component: FacePage,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})



export default router