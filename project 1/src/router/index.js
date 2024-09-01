import HomeView from '@/views/Home/HomeView.vue';
import AddJobView from '@/views/Jobs/Add/AddJobView.vue';
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
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: NotFoundView
      }
    ],
});

// Navigation guard to handle invalid job IDs
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.name === 'job')) {
    const id = to.params.id;
    // Example condition for invalid ID; adjust as necessary
    if (!id || id === 'invalid') {
      next({ name: 'notFound' }); // Redirect to Not Found page or handle as needed
    } else {
      next(); // Proceed to the job view
    }
  } else {
    next(); // Proceed as usual
  }
});


export default router;
