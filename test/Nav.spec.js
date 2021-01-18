// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    // expect(wrapper.isVueInstance()).toBeTruthy()
    // const nav = wrapper.find('nav__menu__desktop')
    expect(wrapper.exists()).toBe(true)
  })
})
