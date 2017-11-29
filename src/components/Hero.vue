<template>
  <section class="container mx-auto relative hero">
    <div class="image hero-image mb-8 md:mb-0">
      <img class="" src="../img/hero@2x.png" alt="Standing at my favorite lake; Lake Hawea, New Zealand"/>
    </div>
    <div class="section-card hero-card">
      <h1 class="section-card-header">{{ title }}</h1>
      <p class="leading-tight">My journey has influenced how I approach digital products. I've been a designer, a developer and now a technical product manager, because of that I can confidently build and lead digital product teams. My experience allows me to manage designers, developers, project managers in a more direct and thoughtful way.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data () {
    return {
      title: "It's all about the Journey"
    }
  }
}
</script>
