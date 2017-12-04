<template>
  <div id="app">
    <header-nav :me="me"></header-nav>

    <hero></hero>

    <section-header>What I Do</section-header>

    <portfolio-section v-for="piece in portfolio" :key="piece.id" :piece="piece"></portfolio-section>

    <about-me></about-me>

    <section-header>Hobbies &amp; Projects</section-header>

    <instagram-feed></instagram-feed>

    <footer-nav :me="me"></footer-nav>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav'
  import FooterNav from './components/FooterNav'
  import Hero from './components/Hero'
  import SectionHeader from './components/SectionHeader'
  import PortfolioSection from './components/PortfolioSection'
  import AboutMe from './components/AboutMe'
  import InstagramFeed from './components/InstagramFeed'

  export default {
    name: 'app',
    data () {
      return {
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
            projects: [],
          },
          {
            id: 3,
            title: 'Technical Consulting',
            image: 'coding@2x.png',
            intro: "Supporting existing digital products and recommending and developing future improvements to keep digital products up to date and relevant.",
            showProjects: false,
            projects: [],
          }
        ]
      }
    },

    components: {
      HeaderNav,
      FooterNav,
      Hero,
      SectionHeader,
      PortfolioSection,
      AboutMe,
      InstagramFeed
    }
  }
</script>

<style src="./styles/app.scss" lang="scss"></style>
