<template>
  <div id="app">
    <header class="bg-white">
      <div class="flex justify-end container mx-auto w-full uppercase pt-8 pb-8 font-poppins text-xs">
        <p class="mr-6"><b>Phone:</b> <a href="tel:1-616-499-3303" class="text-black hover:text-blue no-underline">616.499.3303</a></p>
        <p class=""><b>Email:</b> <a href="mailto:joel@joelataylor.com?subject=Website%20Contact" class="text-black hover:text-blue no-underline">joel@joelataylor.com</a></p>
      </div>
    </header>

    <nav class="flex items-center justify-between flex-wrap pt-9 pb-10 w-full uppercase container mx-auto">
      <div class="items-center flex-no-shrink">
          <span class="font-poppins font-bold text-xl tracking-extrawide">{{ myName }}</span>
      </div>
      <div class="flex items-center">
          <a href="/" class="block lg:inline-block text-black no-underline font-semibold hover:text-blue hover:underline mr-8">
              Home
          </a>
          <a href="/blog" class="block lg:inline-block text-black no-underline font-semibold hover:text-blue hover:underline">
              Blog
          </a>
      </div>
    </nav>

    <hero></hero>

    <section-header>What I Do</section-header>

    <section-intro title="eCommerce" image="thumb-griffin2a@2x.png" v-on:toggle="showProjects = !showProjects">From user research to complex implementation of eCommerce systems that are fully integrated with clients existing technologies.</section-intro>

    <transition-group name="fade">
      <project-overview v-for="project in projects" :key="project.title" :title="project.title" :image="project.image" :href="project.href" v-if="showProjects">{{project.intro}}</project-overview>
    </transition-group>

    <footer class="bg-blue-dark">
      <div class="flex justify-between mx-auto w-full container uppercase pt-8 pb-8 text-xs">
        <div class="text-white leading-normal">
          <p class=""><b class="font-bold inline-block w-16">Phone:</b> <a href="tel:1-616-499-3303" class="text-white hover:text-teal no-underline">616.499.3303</a></p>
          <p class=""><b class="font-bold inline-block w-16">Email:</b> <a href="mailto:joel@joelataylor.com?subject=Website%20Contact" class="text-white hover:text-teal no-underline">joel@joelataylor.com</a></p>
        </div>
        <div class="">
          <a href="https://www.linkedin.com/in/joelataylor/"><svg class="social-icon"><use xlink:href="#icon-linkedin"></use></svg></a>
          <a href="https://www.instagram.com/joelataylor1/"><svg class="social-icon"><use xlink:href="#icon-instagram"></use></svg></a>
          <a href="https://github.com/joelataylor"><svg class="social-icon"><use xlink:href="#icon-github"></use></svg></a>
        </div>
        <div class="text-white">
          <p>&copy; 2017 Joel A Taylor</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import SectionIntro from './components/SectionIntro'
import ProjectOverview from './components/ProjectOverview'

export default {
  name: 'app',
  data () {
    return {
      showProjects: false,
      myName: 'Joel Taylor',
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
    }
  },
  components: {
    Hero,
    SectionHeader,
    SectionIntro,
    ProjectOverview
  }
}
</script>

<style src="./css/styles.css"></style>
