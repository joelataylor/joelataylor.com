<template>
  <div id="app">
    <header-nav></header-nav>

    <hero></hero>

    <section-header>What I Do</section-header>

    <portfolio-section v-for="piece in $store.state.portfolio" :key="piece.id" :piece="piece"></portfolio-section>

    <about-me></about-me>

    <section-header>Hobbies &amp; Projects</section-header>

    <instagram-feed></instagram-feed>

    <footer-nav></footer-nav>
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
