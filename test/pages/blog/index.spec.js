// https://vue-test-utils.vuejs.org/guides/#testing-vuex-in-components
import { shallowMount, createLocalVue } from '@vue/test-utils'
import { cloneDeep } from 'lodash'
// The component to test
import Blog from '@/pages/blog/index.vue'
// testing vuex
import Vuex from 'vuex'
// import { state, getters } from '../../../store/posts'
// https://vue-test-utils.vuejs.org/guides/using-with-vuex.html
import storeConfig from '../../storeConfig'
// local vue
const localVue = createLocalVue()
localVue.use(Vuex)

test('show post', () => {
  // const store = new Vuex.Store({ modules: { posts: cloneDeep(state, getters) } })
  const store = new Vuex.Store({ modules: { posts: cloneDeep(storeConfig) } })
  // let state
  // let getters
  // let actions
  // let store
  // beforeEach(() => {
  //   // state = {
  //   //   getPostSlugs: [
  //   //     'remote-working-productivity',
  //   //     'page-speed-load-time'
  //   //   ],
  //   //   postData: [
  //   //     {
  //   //       title: 'Productivity Hacks For Managing Time When Working Remotely',
  //   //       thumbnail: '/time_management.svg',
  //   //       tags: ['productivity'],
  //   //       slug: 'remote-working-productivity/',
  //   //       excerpt: 'Time management for remote developers is an important skill. Learn how I manage my time with these productivity hacks while working remotely.',
  //   //       date: '2020-12-03',
  //   //       timestamp: '[native Date Thu Dec 03 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //   //     },
  //   //     {
  //   //       title: 'Page speed, Load Time & Conversions',
  //   //       thumbnail: '/fast_loading.svg',
  //   //       tags: ['web development'],
  //   //       slug: 'page-speed-load-time/',
  //   //       excerpt: 'Page speed, Load Time & Conversions',
  //   //       date: '2020-12-16',
  //   //       timestamp: '[native Date Wed Dec 16 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //   //     }
  //   //   ]
  //   // }
  //   // getters = {
  //   //   sortPostsBydate: () => [
  //   //     {
  //   //       title: 'Page speed, Load Time & Conversions',
  //   //       thumbnail: '/fast_loading.svg',
  //   //       tags: ['web development'],
  //   //       slug: 'page-speed-load-time/',
  //   //       excerpt: 'Page speed, Load Time & Conversions',
  //   //       date: '2020-12-16',
  //   //       timestamp: '[native Date Wed Dec 16 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //   //     },
  //   //     {
  //   //       title: 'Productivity Hacks For Managing Time When Working Remotely',
  //   //       thumbnail: '/time_management.svg',
  //   //       tags: ['productivity'],
  //   //       slug: 'remote-working-productivity/',
  //   //       excerpt: 'Time management for remote developers is an important skill. Learn how I manage my time with these productivity hacks while working remotely.',
  //   //       date: '2020-12-03',
  //   //       timestamp: '[native Date Thu Dec 03 2020 00:00:00 GMT+0000 (Greenwich Mean Time)]'
  //   //     }
  //   //   ]
  //   // }
  //   // actions = {
  //   //   click: jest.fn()
  //   // }
  //   // mock store with modules
  //   // https://vue-test-utils.vuejs.org/guides/#mocking-with-modules
  //   // store = new Vuex.Store({
  //   //   modules: {
  //   //     posts: {
  //   //       state,
  //   //       getters,
  //   //       actions,
  //   //       namespaced: true
  //   //     }
  //   //   }
  //   // })
  // })
  // wrap the vue component
  const wrapper = shallowMount(Blog, { store, localVue })
  // expect it exists
  expect(wrapper.exists()).toBe(true)
})
