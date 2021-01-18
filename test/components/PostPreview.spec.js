// https://vue-test-utils.vuejs.org/guides/#getting-started
// Import the `mount()` method from Vue Test Utils
// https://vue-test-utils.vuejs.org/api/components/#routerlinkstub
// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { mount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import PostPreview from '@/components/blog/PostPreview.vue'
// when loading an SVG you need a loader
// https://github.com/visualfanatic/vue-svg-loader/issues/38

describe('PostPreview', () => {
  test('component loads with data', () => {
    // wrap the vue component
    const wrapper = mount(PostPreview, {
      propsData: {
        title: 'Page speed, Load Time & Conversions',
        date: '2020-12-16',
        excerpt: 'Page speed, Load Time & Conversions',
        thumbnail: '/fast_loading.svg',
        slug: 'page-speed-load-time'
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
    // expect post data
    expect(wrapper.vm.title).toBe('Page speed, Load Time & Conversions')
    expect(wrapper.vm.date).toBe('2020-12-16')
    expect(wrapper.vm.excerpt).toBe('Page speed, Load Time & Conversions')
    expect(wrapper.vm.thumbnail).toBe('/fast_loading.svg')
    expect(wrapper.vm.slug).toBe('page-speed-load-time')
  })
})
