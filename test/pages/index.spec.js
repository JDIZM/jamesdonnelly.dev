// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import Home from '@/pages/index.vue'

describe('Home', () => {
  test('home page loads with data', () => {
    // wrap the vue component
    const wrapper = mount(Home, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
  })
})
