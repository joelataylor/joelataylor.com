import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  me: {
    name: 'Joel Taylor',
    phone: '616.499.3303',
    email: 'joel@joelataylor.com',
    linkedin: 'https://www.linkedin.com/in/joelataylor/',
    instagram: 'https://www.instagram.com/joelataylor1/',
    github: 'https://github.com/joelataylor'
  },
  portfolio: [
    {
      id: 1,
      title: 'eCommerce',
      image: 'thumb-griffin2a@2x.png',
      intro: "From user research to complex implementation of eCommerce systems that are fully integrated with clients existing technologies.",
      showProjects: false,
      projects: [
        {
          title: 'Griffin',
          image: 'thumb-griffin2@2x.png',
          href: 'https://griffintechnology.com',
          intro: "Converting a custom Ruby on Rails app to an Enterprice Magento eCommerce system took just over a year to complete."
        },
        {
          title: 'Baker Book House',
          image: 'bakerbookhouse.png',
          href: 'https://bakerbookhouse.com',
          intro: "Built on the Ruby on Rails eCommerce platform Solidus, Baker Book House features over 250,000 products and syncs hourly with the physical stores inventory levels."
        },
        {
          title: 'SightLine Display',
          image: 'sightline-display.png',
          href: 'https://sightlinedisplay.com',
          intro: "Providing a way for new small business customers to purchase display solutions was the main goal of rebuilding their eCommerce platform."
        }
      ]
    },
    {
      id: 2,
      title: 'SaaS',
      image: 'thumb-songspace2@2x.png',
      intro: "I've built digital product teams to create and support SaaS products. My experience allows me to push for better concepts early on from the design team and lead ongoing development to continually improve the user experience.",
      showProjects: false,
      projects: [
        {
          title: 'Once A Month Meals',
          image: 'thumb-oamm2a.jpg',
          href: 'https://onceamonthmeals.com',
          intro: "I was the first technical hire at OAMM and was tasked with auditing and planning a large upgrade to their platform, infrastructure and core service offerings. Built on two ruby apps, an EmberJS app and a WordPress CMS this was a technical integration challange."
        },
        {
          title: 'Songspace',
          image: 'thumb-songspace2a.jpg',
          href: 'https://songspace.com',
          intro: "From concept to paying customers, Songspace was a great product (with a great team) to cut my teeth on building a SaaS product. I assembled contractors for the prototype build, then hired a small team to build v1 after a Series A round of funding."
        }
      ],
    },
    {
      id: 3,
      title: 'Technical Consulting',
      image: 'coding@2x.png',
      intro: "Supporting existing digital products and recommending and developing future improvements to keep digital products up to date and relevant.",
      showProjects: false,
      projects: [
        {
          title: 'GlobalX',
          image: 'thumb-globalx.png',
          href: 'https://www.globalxfunds.com',
          intro: "I designed and built a system that would import a nightly feed of data, parse it, insert it into a database and store common queries in cache."
        },
        {
          title: 'Vanderbilt Clinic Search',
          image: 'thumb-vdoc.png',
          href: 'https://quickcare.vhan.com/search/',
          intro: "I developed a program that would import data via an API and store it for faster querying. Even though the API had search functionality built in, we found it too slow and to make the system feel even faster we utilized caching technology to store queries."
        }
      ]
    }
  ]
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
