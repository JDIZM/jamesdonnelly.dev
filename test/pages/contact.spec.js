// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import VueMeta from 'vue-meta'

// The component to test
import Contact from '@/pages/contact.vue'
import ContactForm from '@/storybook/stories/organisms/contact-form/ContactForm.vue'
import Toast from '@/storybook/stories/molecules/Toast.vue'

// create vue with vue-meta
const localVue = createLocalVue()
localVue.use(VueMeta, { keyName: 'head' })

const $recaptcha = {
  init () {
    // console.log('hello')
  }
}
describe('Contact Page', () => {
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
      },
      propsData: {
        title: 'Get In Touch | Web Developer Manchester'
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
    // expect props data
    expect(wrapper.vm.title).toBe('Get In Touch | Web Developer Manchester')
  })
})

describe('Contact Page has the correct meta', () => {
  // https://stackoverflow.com/questions/59964001/how-to-test-head-in-nuxt-js-using-jest
  let wrapper
  // test set up
  beforeEach(() => {
    wrapper = shallowMount(Contact, {
      localVue
    })
  })

  // test tear down
  afterEach(() => {
    if (wrapper) {
      wrapper.destroy()
    }
  })
  it('has correct <head> content', () => {
    // head data injected by the page or layout to test is accessible with
    // wrapper.vm.$metaInfo. Note that this object will not contain data
    // defined in nuxt.config.js.

    // test title
    expect(wrapper.vm.$metaInfo.title).toBe('Get In Touch | Web Developer Manchester')

    // test meta entry
    const descriptionMeta = wrapper.vm.$metaInfo.meta.find(
      item => item.hid === 'description'
    )
    expect(descriptionMeta.content).toBe('Freelance web developer based in Manchester. Experienced with building bespoke user interfaces, websites and web applications.')
  })
})

describe('Contact page methods', () => {
  //
  const wrapper = shallowMount(Contact, {
    stubs: {
      NuxtLink: RouterLinkStub,
      ContactForm,
      Toast
    }
  })
  // mock submission data
  const submission = [
    'name',
    'phone',
    'email',
    'message'
  ]
  it('shows error when recaptcha failed', () => {
    // test submission
    wrapper.vm.onSubmit(submission)
    // wrapper.vm.verifyRecaptcha('response')
    // test failed recaptcha
    expect(wrapper.vm.toast.show).toBe(true)
    expect(wrapper.vm.toast.msg).toBe('recaptcha failed')
  })
  it('shows error when form already sent', () => {
    // test form already sent
    wrapper.setData({
      sent: true
    })
    expect(wrapper.vm.sent).toBe(true)
    // test submission
    wrapper.vm.onSubmit(submission)
    expect(wrapper.vm.submission).toBe(submission)
    // test toast error message
    expect(wrapper.vm.toast.show).toBe(true)
    expect(wrapper.vm.toast.msg).toBe('Form already sent')
  })
  // TODO mock axios and form data
  test.todo('test the verifyRecaptcha method')
  test.todo('test the sendMessage method')
  it('has the correct data when sending message', () => {
    wrapper.setData({
      sent: false,
      submission: [
        'name',
        'phone',
        'email',
        'message'
      ]
    })
    // send message
    // wrapper.vm.sendMessage()
  })
})
