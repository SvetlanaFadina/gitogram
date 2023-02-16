/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import feed from './feed'

describe('feed component', () => {
  it('эмит события loadContent', async () => {
    const wrapper = mount(feed)

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('виден список элементов', async () => {
    const issue = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }

    const wrapper = mount(feed, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issue)
      }
    })

    expect(wrapper.find('.comments').exists()).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(wrapper.findAll('.feed_comment-item').length).toBe(6)
  })

  it('не вызывает событие contentLoaded если внутри есть список issues', async () => {
    const wrapper = mount(feed, {
      propsData: {
        issues: [
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          },
          {
            title: 'test-title',
            user: {
              login: 'test-name'
            }
          }
        ]
      }
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
