<template>
  <footer class="bg-blue-dark">
    <div class="flex flex-col md:flex-row justify-between mx-auto w-full container uppercase p-8 md:p-0 md:pb-8 md:pt-8 text-xs">
      <div class="text-white leading-normal mb-8">
        <p class=""><b class="font-bold inline-block w-24">NZ Phone:</b> <a :href="'tel:'+me.nz_phone" class="text-white hover:text-teal no-underline">{{me.nz_phone}}</a></p>
        <p class=""><b class="font-bold inline-block w-24">US Phone:</b> <a :href="'tel:'+me.us_phone" class="text-white hover:text-teal no-underline">{{me.us_phone}}</a></p>
        <p class=""><b class="font-bold inline-block w-24">Email:</b> <a :href="'mailto:'+me.email+'?subject=Website%20Contact'" class="text-white hover:text-teal no-underline">{{me.email}}</a></p>
      </div>
      <div class="social mb-8">
        <a :href="me.linkedin"><svg class="social-icon"><use xlink:href="#icon-linkedin"></use></svg></a>
      </div>
      <div class="text-white mb-8">
        <p id="copyright">😀 &nbsp; &copy; {{year}} &nbsp; {{me.name}}</p>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" class="hidden">
      <symbol id="icon-linkedin" viewBox="0 0 24 24">
        <title>LinkedIn icon</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </symbol>
    </svg>
  </footer>
</template>

<script>
  export default {
    name: 'FooterNav',
    computed: {
      me: function() {
        return this.$store.getters.getMe
      },
      evenOrOdd: function() {
        return this.$store.getters.evenOrOdd
      },
      count: function() {
        return this.$store.state.count
      },
      year: function() {
        const date = new Date();
        return date.getFullYear();
      }
    },
    methods: {
      add: function() {
        this.$store.dispatch('increment')
      },
      subtract: function() {
        this.$store.dispatch('decrement')
      }
    }
  }
</script>

<style lang="scss">
  .social-icon {
    width: 1.7rem;
    height: 1.7rem;
    fill: config('colors.teal');
    margin-right: 1rem;
  }
  @screen md {
    .social-icon {
      margin: 0 1rem;
    }
  }
  .social-icon:hover {
    fill: config('colors.white');
  }
</style>
