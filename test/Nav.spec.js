import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
// FIXME Unknown custom element: <NuxtLink> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
// https://dev.to/alousilva/how-to-mock-nuxt-client-only-component-with-jest-47da

describe('Navbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
