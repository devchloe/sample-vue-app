import { shallowMount } from '@vue/test-utils'
import ItemList from '@/components/ItemList'

// Add button이 disabled 되어야 한다
// item을 추가하면 Add button이 활성화 되어야 한다

describe('ItemList.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ItemList)
  })

  it('should render correct contents', () => {
    expect(wrapper.html()).toContain('<h1>Items</h1>')
    expect(wrapper.html()).toContain('<input type="text" value="">')
  })

  it('should set correct default data', () => {
    expect(wrapper.vm.item).toEqual('')
    expect(wrapper.vm.items).toEqual([])
  })

  it('should have the `Add` button disabled', () => {
    const addItemButton = wrapper.find('.button')
    expect(addItemButton.element.disabled).toBe(true)
  })

  // describe('the user populates the text input field', () => {

  // })
})
