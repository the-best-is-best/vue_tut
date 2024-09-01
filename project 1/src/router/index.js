import HomeView from '@/views/Home/HomeView.vue';
import AddJobView from '@/views/Jobs/Add/AddJobView.vue';
import EditJobView from '@/views/Jobs/Edit/EditJobView.vue';
import JobsView from '@/views/Jobs/JobsView.vue';
import JobView from '@/views/Jobs/JobView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
      },
      {
        path: '/job/:id',
        name: 'job',
        component: JobView,
        props: true // Allows passing route params as props to the component
      },
      {
        path: '/job/add',
        name: 'addJob',
        component: AddJobView
      },
      {
        path: "/job/edit/:id",
        name: "editJob",
        component: EditJobView
      },
      {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFoundView
      }
    ],
});



export default router;
