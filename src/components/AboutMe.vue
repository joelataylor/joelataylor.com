<template>
  <div>
    <section-header>About Me</section-header>

    <section class="container section">
      <div class="image md:mr-8">
        <img src="../img/joel-headshot@2x.png" class="max-w-xs" alt="" />
      </div>
      <div class="bg-white px-8 py-9 md:flex-1 flex flex-col">
        <h1 class="section-card-header">I'm a Kiwi</h1>
        <p class="leading-tight mb-4">I was born and raised in New Zealand. My dad was a builder, and I too have always been making things with my hands. I’m a craftsman, I’ve applied that way of thinking to my work with digital products and user experience. My approach is a hybrid of New Zealander sterotypes (adventurer, straightforward, level-headed) and craftsman.</p>
        <p class="leading-tight mb-4">I've built creative and development teams for startups and have often played the role of right-hand man to CEO’s and founders. I love building relationships with clients and users, and finding and developing the resources to create graceful digital solutions for them.</p>
        <p class="leading-tight mb-4">Growing up in New Zealand, one of my first loves is the outdoors and any adventure I can take out into it. I love living near the water and spending summer weekends on Lake Michigan with my wife and two kids. When I’m not doing things that make my wife nervous, I’m watching rugby, or working on my next woodworking project.</p>
      </div>
    </section>
  </div>
</template>

<script>
  import SectionHeader from './SectionHeader'

  export default {
    name: 'AboutMe',
    components: {
      SectionHeader
    }
  }
</script>
