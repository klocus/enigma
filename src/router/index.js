import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import EmpathyMap from '@/pages/EmpathyMap'
import ProblemMap from '@/pages/ProblemMap'
import Ideation from '@/pages/Ideation'
import IdeasList from '@/pages/IdeasList'
import Credits from '@/pages/Credits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Strona Główna' }
    },
    {
      path: '/empathy-map',
      name: 'EmpathyMap',
      component: EmpathyMap,
      meta: { title: 'Mapa Empatii' }
    },
    {
      path: '/problem-map',
      name: 'ProblemMap',
      component: ProblemMap,
      meta: { title: 'Mapa Problemu' }
    },
    {
      path: '/ideation',
      name: 'Ideation',
      component: Ideation,
      meta: { title: 'Ideacja' }
    },
    {
      path: '/ideas-list',
      name: 'IdeasList',
      component: IdeasList,
      meta: { title: 'Pomysły' }
    },
    {
      path: '/credits',
      name: 'Credits',
      component: Credits,
      meta: { title: 'Autorzy' }
    }
  ]
})
