<template>
  <div :class="containerClass">
    <slot
      name="loading"
      :loading="loading"
    />
    <slot
      v-for="(feed, index) in feeds"
      name="feeds"
      :index="index"
      :feed="feed"
    />
    <slot
      name="error"
      :error="error"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  name: 'VueInstagram',

  props: {
    /*
    * Instagram access token.
    */
    token: {
      type: String,
      required: true
    },

    /*
    * Numbers of feed.
    */
    count: {
      type: Number,
      default: 3,
      required: false
    },

    /*
    * Filter by media type, ex: video, image.
    */
    mediaType: {
      type: String,
      default: 'IMAGE',
      required: false
    },

    /*
    * Filter by tags.
    */
    tags: {
      type: Array,
      default: () => [],
      required: false
    },

    // class for container div
    containerClass: {
      type: String,
      default: '',
      required: false
    }
  },

  data: () => ({
    error: '',
    loading: false,
    feeds: []
  }),

  mounted () {
    this.getUserFeed()
  },

  methods: {
    getUserFeed () {
      this.loading = true
      axios
        .get('https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp', {
          params: { access_token: this.token }
        })
        .then(response => {
          this.loading = false
          if (response.status === 200) {
              let { data } = response.data
              const types = ['IMAGE', 'VIDEO']

              if (this.mediaType && types.indexOf(this.mediaType) > -1) {
                data = _.filter(data, item => this.mediaType === item.media_type)
              }

              if (this.tags.length) {
                data = _.filter(data, item => _.intersection(this.tags, item.tags).length)
              }

              this.feeds = _.slice(_.values(data), 0, this.count)
              console.log(this.feeds);
            }
        })
        .catch(error => { throw error })
    }
  }
}
</script>
