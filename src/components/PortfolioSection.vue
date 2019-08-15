<template>
  <div class="portfolio-section">
    <portfolio-intro :id="piece.id"></portfolio-intro>
    <transition-group name="fade">
      <project-overview v-if="showProjects" class="portfolio-piece" v-for="project in piece.projects" :key="project.title" :title="project.title" :image="project.image" :href="project.href">
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

  computed: {
    showProjects: function() {
      return this.$store.getters.shouldShowProjects(this.piece.id)
    }
  },

  components: {
    PortfolioIntro,
    ProjectOverview
  }
}
</script>
