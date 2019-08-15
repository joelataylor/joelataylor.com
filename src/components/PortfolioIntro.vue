<template>
  <section class="container section">
    <div class="image flex-initial md:flex-1 md:mr-8">
      <img :src="getImgSrc()" class="flex-auto" alt="" />
    </div>
    <div class="section-card flex flex-col">
      <h1 class="section-card-header">{{piece(id).title}}</h1>
      <p class="leading-tight flex-grow">{{piece(id).intro}}</p>
      <a v-if="piece(id).projects" class="flex align-center section-card-more no-underline capitalize text-lg text-blue hover:text-blue-lighter" href="" @click.prevent="toggleProjects(id)">
        <div class="menu menu--close mr-2" :class="{open: showProjects(id)}">
          <div class="menu__icon">
            <div class="menu__line menu__line--1"></div>
            <div class="menu__line menu__line--2"></div>
            <div class="menu__line menu__line--3"></div>
          </div>
        </div>
        <span>See projects</span>
      </a>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PortfolioIntro',

  props: ['id'],

  computed: {
    // piece: function() {
    //   return this.$store.getters.getProject(this.id)
    // },
    ...mapGetters({
      piece: 'getProject',
      showProjects: 'shouldShowProjects'
    })
  },

  methods: {
    getImgSrc: function () {
      const url = require(`../img/${this.piece(this.id).image}`)
      return url
    },
    ...mapActions([
      'toggleProjects'
    ])
  }
}
</script>
