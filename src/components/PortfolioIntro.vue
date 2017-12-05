<template>
  <section class="container section">
    <div class="image flex-initial md:flex-1 md:mr-8">
      <img :src="getImgSrc()" class="flex-auto" alt="" />
    </div>
    <div class="section-card flex flex-col">
      <h1 class="section-card-header">{{title}}</h1>
      <p class="leading-tight flex-grow"><slot></slot></p>
      <a class="flex align-center section-card-more no-underline capitalize text-lg text-blue hover:text-blue-lighter" href="" v-on:click.prevent="showProjects()">
        <div class="menu menu--close mr-2" :class="{open: isOpen}">
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
export default {
  name: 'PortfolioIntro',
  props: ['title', 'image', 'isOpen'],
  methods: {
    getImgSrc: function () {
      const url = require(`../img/${this.image}`)
      return url
    },
    showProjects: function(event) {
      this.$emit('toggle')
    }
  }
}
</script>
