// https://vue-test-utils.vuejs.org/guides/#getting-started
// Import the `mount()` method from Vue Test Utils
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import Services from '@/components/Services.vue'

describe('Services', () => {
  test('services component loads with data', () => {
    // wrap the vue component
    const wrapper = mount(Services, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
  })
})
