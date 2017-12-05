<template>
  <div class="portfolio-section">
    <portfolio-intro :title="piece.title" :image="piece.image" :isOpen="showProjects" v-on:toggle="showProjects = !showProjects">
      {{piece.intro}}
    </portfolio-intro>
    <transition-group name="fade">
      <project-overview class="portfolio-piece" v-for="project in piece.projects" :key="project.title" :title="project.title" :image="project.image" :href="project.href" v-if="showProjects">
        {{project.intro}}
      </project-overview>
    </transition-group>
  </div>
</template>

<script>
import PortfolioIntro from './PortfolioIntro'
import ProjectOverview from './ProjectOverview'

export default {
  props: ['piece'],

  data () {
    return {
      showProjects: false
    }
  },

  components: {
    PortfolioIntro,
    ProjectOverview
  }
}
</script>
