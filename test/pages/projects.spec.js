// import the RouterLinkStub to avoid Unknown custom element: <nuxt-link>
import { shallowMount, RouterLinkStub } from '@vue/test-utils'

// The component to test
import Projects from '@/pages/contact.vue'
import Button from '@/storybook/stories/atoms/Button.vue'
import Callout from '@/components/Callout.vue'
import json from '~/assets/projects.json'

describe('Projects', () => {
  test('project page loads with data', () => {
    // wrap the vue component
    const wrapper = shallowMount(Projects, {
      stubs: {
        NuxtLink: RouterLinkStub,
        Button,
        Callout
      },
      mocks: {
        json
      }
    })
    const buttonWrapper = shallowMount(Button, {
      //
      propsData: {
        label: 'label'
      }
    })
    // expect it exists
    expect(wrapper.exists()).toBe(true)
    // expect it exists
    expect(buttonWrapper.exists()).toBe(true)
  })
})
