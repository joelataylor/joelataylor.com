<template>
  <section class="container mx-auto m-8 instagram-feed">
    <vue-instagram :token="instagramToken" :count="9">
      <template slot="feeds" slot-scope="props">
        <div class="instagram--item rounded overflow-hidden shadow-lg mb-8">
          <a :href="props.feed.permalink" target="_blank">
            <img class="w-full" :src="props.feed.media_url" :alt="props.feed.caption" />
          </a>
          <div class="instagram--text px-6 py-4">
            <p class="text-grey-darker text-base">
              {{ props.feed.caption }}
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
import VueInstagram from './VueInstagram.vue'

export default {
  name: 'InstagramFeed',
  data () {
    return {
      instagramToken: 'IGQVJWYWtZAc1FkVG9FT1hvc2VrQWtIeU93ZAlhBY0hZAc0FMaG1fU0thU1Noajk1ak94UlRxR0dOZAHo0dWF2dk5mZAzJUdDVmZAVp5QU9KZAnRQNVQ1Vkhtd3RCN0VJWmRlWDlYREdrb0YwWGZACUXJua3dBQgZDZD'
    }
  },
  components: {
    VueInstagram
  }
}
</script>
