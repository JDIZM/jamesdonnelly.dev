// https://vue-test-utils.vuejs.org/guides/#getting-started
// Import the `mount()` method from Vue Test Utils
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount } from '@vue/test-utils'

// The component to test
import Experience from '@/components/Experience.vue'

describe('Experience', () => {
  test('experience component loads with data', () => {
    // wrap the vue component
    const wrapper = mount(Experience, {
      // stubs: {
      //   NuxtLink: RouterLinkStub
      // }
      propsData: {
        experience: [
          {
            date: '2019 - Now',
            location: 'Freelance',
            position: 'Web Developer',
            info: 'Building user interfaces, websites and web applications that humans love to use',
            time: '2 years'
          },
          {
            date: '2014 - 2019',
            location: 'Baked Digital',
            position: 'Digital Marketing',
            info: "Paid Ads, Organic Search. Lead generation with WordPress based websites for SMB's",
            time: '5 years'
          }
        ]
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
    // expect prop value
    expect(wrapper.props().experience[0].date).toBe('2019 - Now')
  })
})
