import Vue from 'vue'
import VueRouter from 'vue-router'
import PipelineEditor from '../views/components/PipelineEditor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PipelineEditor',
    component: PipelineEditor
  },
]

const router = new VueRouter({
  routes
})

export default router
