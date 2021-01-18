// https://vue-test-utils.vuejs.org/guides/#getting-started
// Import the `mount()` method from Vue Test Utils
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import Callout from '@/components/Callout.vue'

test('show post', () => {
  // wrap the vue component
  const wrapper = mount(Callout, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
  // expect it exists
  expect(wrapper.exists()).toBe(true)
})
