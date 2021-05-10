import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import originalState from '@/store'
import FooterNav from '@/components/FooterNav'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FooterNav', () => {
  let store

  beforeEach(() => {
    store = originalState
  })

  it('should render my name', () => {
    const wrapper = shallow(FooterNav, { store, localVue })
    const el = wrapper.find('#copyright')
    //console.log(el.text())
    expect(el.text()).toEqual("😀   © 2021   Joel Taylor")
  })
})
