import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  me: {
    name: 'Joel Taylor',
    phone: '+1-616-499-3303',
    email: 'joelataylor@gmail.com',
    linkedin: 'https://www.linkedin.com/in/joelataylor/',
    instagram: 'https://www.instagram.com/joelataylor1/',
    github: 'https://github.com/joelataylor'
  },
  portfolio: [
    {
      id: 1,
      title: 'Platform',
      image: 'thumb-invision-logo@2x.png',
      intro: "Currently, I lead the Internal Tools and Data Engineering teams at InVision. We provide solutions to increase efficiency and the accuracy of data -- helping teams to make faster and more accurate decisions for our products and customers.",
      showProjects: false,
      projects: false
    },
    {
      id: 2,
      title: 'eCommerce',
      image: 'thumb-griffin2a@2x.png',
      intro: "I've had extensive specialty experience working on large eCommerce sites in both user experience and technical leadership roles.",
      showProjects: false,
      projects: [
        {
          title: 'Griffin',
          image: 'thumb-griffin2@2x.png',
          href: 'https://griffintechnology.com',
          intro: "An enterprise eCommerce system with integrations to multiple warehouses, including international fulfillment centers"
        },
        {
          title: 'Baker Book House',
          image: 'bakerbookhouse.png',
          href: 'https://bakerbookhouse.com',
          intro: "Baker Book House features over 250,000 products and syncs data to their physical stores"
        },
        {
          title: 'SightLine Display',
          image: 'sightline-display.png',
          href: 'https://sightlinedisplay.com',
          intro: "Providing a way for customers to purchase custom display solutions"
        }
      ]
    },
    {
      id: 3,
      title: 'SaaS',
      image: 'thumb-songspace2@2x.png',
      intro: "I've built digital product teams to create and support SaaS products. My experience allows me to push for better concepts early on from the design team and lead ongoing development to continually improve the user experience.",
      showProjects: false,
      projects: [
        {
          title: 'Once A Month Meals',
          image: 'thumb-oamm2a.jpg',
          href: 'https://onceamonthmeals.com',
          intro: "I was the first internal technical hire at OAMM and was tasked with auditing and planning a large upgrade to their platform, infrastructure and core service offerings."
        },
        {
          title: 'Songspace',
          image: 'thumb-songspace2a.jpg',
          href: 'https://songspace.com',
          intro: "Songspace was recently acquired and is proof that a small idea can grow into a multi-national product. I co-founded Songspace as the product lead where I hired and managed the team to build the POC which lead to a Series A round of funding."
        }
      ],
    },
    {
      id: 4,
      title: 'Technical Consulting',
      image: 'coding@2x.png',
      intro: "I take on occasional freelance technical consulting and development (have to keep some coding skills fresh!) for select clients.",
      showProjects: false,
      projects: [
        {
          title: 'GlobalX',
          image: 'thumb-globalx.png',
          href: 'https://globalxetfs.com',
          intro: "I designed and built a system that would import a nightly feed of data, parse it, insert it into a database, and store common queries in cache."
        },
        {
          title: 'Vanderbilt Clinic Search',
          image: 'thumb-vdoc.png',
          href: 'https://quickcare.vhan.com/search/',
          intro: "I developed a program that would import data via an API and store it for faster querying. Even though the API had search functionality built-in, we found it too slow, and to make the system feel even faster we utilized caching technology to store queries."
        }
      ]
    }
  ]
}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  toggleProjects (state, payload) {
    let p = state.portfolio.find(project => project.id === payload.id)
    p.showProjects = !p.showProjects
  }
}

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
  },
  toggleProjects (context, id) {
    context.commit('toggleProjects', {id: id})
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  getMe: (state) => {
    return state.me
  },
  getPorfolio: state => state.portfolio,
  shouldShowProjects: (state) => (id) => {
    return state.portfolio.find(project => project.id === id).showProjects
  },
  getProject: (state) => (id) => {
    return state.portfolio.find(project => project.id === id)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
