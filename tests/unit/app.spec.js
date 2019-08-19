import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import ItemList from '@/components/ItemList'

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(App)
  })

  it('should render ItemList', () => {
    const ItemListElement = wrapper.find('ItemList')
    expect(ItemListElement).toEqual(ItemList)
  })
})
