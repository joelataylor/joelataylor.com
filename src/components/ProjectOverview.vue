<template>
  <section class="container section">
    <div class="section-card flex flex-col">
      <h1 class="section-card-header">{{title}}</h1>
      <p class="leading-tight flex-grow"><slot></slot></p>
      <a v-if="href" class="section-card-more text-blue hover:text-blue-lighter" :href="href" target="_blank">
        <span>Visit website</span>
      </a>
    </div>
    <div class="image bg-white md:flex-1 md:ml-8">
      <img :src="getImgSrc()" class="" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectOverview',
  props: ['title', 'image', 'href'],
  methods: {
    getImgSrc: function () {
      const url = require(`../img/${this.image}`)
      return url
    }
  }
}
</script>
