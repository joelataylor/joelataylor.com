<template>
  <section>
    <header class="bg-white">
      <div class="flex flex-col md:flex-row justify-end container mx-auto w-full uppercase p-8 md:p-0 md:pt-8 md:pb-8 font-poppins text-xs">
        <p class="mb-2 md:mb-0 mr-6"><b>US Phone:</b> <a :href="'tel:'+me.us_phone" class="text-black hover:text-blue no-underline">{{ me.us_phone }}</a></p>
        <p class="mb-2 md:mb-0 mr-6"><b>NZ Phone:</b> <a :href="'tel:'+me.nz_phone" class="text-black hover:text-blue no-underline">{{ me.nz_phone }}</a></p>
        <p><b>Email:</b> <a :href="'mailto:'+me.email+'?subject=Website%20Contact'" class="text-black hover:text-blue no-underline">{{ me.email }}</a></p>
      </div>
    </header>
    <nav class="flex items-center justify-between flex-wrap p-8 md:p-0 md:pt-9 md:pb-10 w-full uppercase container mx-auto">
      <div class="items-center flex-no-shrink">
          <span class="font-poppins font-bold text-xl tracking-extrawide">{{ me.name }}</span>
      </div>
      <!-- <div class="flex items-center">
          <a href="/" class="block lg:inline-block text-blue no-underline font-semibold hover:text-orange mr-8">
              Home
          </a>
          <a href="/blog" class="block lg:inline-block text-blue no-underline font-semibold hover:text-orange">
              Blog
          </a>
      </div> -->
    </nav>
  </section>
</template>

<script>
  export default {
    name: 'HeaderNav',
    computed: {
      me: function() {
        return this.$store.getters.getMe
      }
    }
  }
</script>
