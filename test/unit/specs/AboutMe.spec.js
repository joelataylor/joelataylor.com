import Vue from 'vue'
import AboutMe from '@/components/AboutMe'

describe('AboutMe.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AboutMe)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .toEqual("I'm a Kiwi")
  })
})
