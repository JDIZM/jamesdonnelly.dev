// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import Contact from '@/pages/contact.vue'
import ContactForm from '@/storybook/stories/organisms/contact-form/ContactForm.vue'
import Toast from '@/storybook/stories/molecules/Toast.vue'
const $recaptcha = {
  init () {
    console.log('hello')
  }
}
describe('Contact', () => {
  test('contact page loads with data', () => {
    // wrap the vue component
    const wrapper = shallowMount(Contact, {
      stubs: {
        NuxtLink: RouterLinkStub,
        ContactForm,
        Toast
      },
      mocks: {
        $recaptcha
      }
    })
    // shallowMount(Component, {
    //   stubs: {
    //     // stub with a specific implementation
    //     'registered-component': Foo,
    //     // create default stub.
    //     // the component name of default stub is another-component in this case.
    //     // the default stub is <${the component name of default stub}-stub>.
    //     'another-component': true
    //   }
    // })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
  })
})
