<template>
  <section class="container section">
    <div class="image flex-1 md:mr-8">
      <img :src="getImgSrc()" class="flex-auto" alt="" />
    </div>
    <div class="section-card flex flex-col">
      <h1 class="section-card-header">{{title}}</h1>
      <p class="leading-tight flex-grow"><slot></slot></p>
      <a class="section-card-more no-underline capitalize text-grey-darkest text-lg hover:text-blue" href="" v-on:click.prevent="showProjects()">
        <svg class="icon"><use xlink:href="#icon-plus-square"></use></svg>
        <span class="border-b-2 border-dotted border-grey-darkest">See projects</span>
      </a>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
      <symbol id="icon-plus-square" viewBox="0 0 24 24">
        <title>plus-square</title>
        <path d="M19 2h-14c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM20 19c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-14c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v14z"></path>
        <path d="M16 11h-3v-3c0-0.6-0.4-1-1-1s-1 0.4-1 1v3h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h3v3c0 0.6 0.4 1 1 1s1-0.4 1-1v-3h3c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path>
      </symbol>
    </svg>
  </section>
</template>

<script>
export default {
  name: 'SectionIntro',
  props: ['title', 'image'],
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
