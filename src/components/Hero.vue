<template>
  <section class="container mx-auto relative hero">
    <div class="image hero-image mb-8 md:mb-0">
      <img class="" src="../img/hero.jpg" alt="Standing at my favorite lake; Lake Hawea, New Zealand"/>
    </div>
    <div class="section-card hero-card">
      <h1 class="section-card-header">{{ title }}</h1>
      <p class="leading-tight">My journey has influenced how I approach digital products. I've been a designer, a developer, product manager, and a leader on digital platforms and products for over 15 years. <br><br>Because of this foundation, I confidently build and lead digital teams to produce both strategic and beautiful experiences based on thoughtful technical foundations.</p>
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
