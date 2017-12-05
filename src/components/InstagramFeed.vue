<template>
  <section class="container mx-auto m-8 instagram-feed">
    <vue-instagram :token="instagramToken" :username="instagramUsername" :count="12" :tags="[]">
      <template slot="feeds" slot-scope="props">
        <div class="instagram--item rounded overflow-hidden shadow-lg mb-8">
          <a :href="props.feed.link" target="_blank">
            <img class="w-full" :src="props.feed.images.standard_resolution.url" :alt="props.feed.caption.text" />
          </a>
          <div class="instagram--text px-6 py-4">
            <p class="text-grey-darker text-base">
              {{ props.feed.caption.text }}
            </p>
          </div>
        </div>
      </template>
      <template slot="error" slot-scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
      </template>
    </vue-instagram>
  </section>
</template>

<script>
import VueInstagram from 'vue-instagram'

export default {
  name: 'InstagramFeed',
  data () {
    return {
      instagramUsername: 'joelataylor1',
      instagramToken: '275632354.3eb48a4.727c94c99b7a4c80a7ae22719925de4e'
    }
  },
  components: {
    VueInstagram
  }
}
</script>
