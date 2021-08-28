<template>
  <div class="profile">
    <div class="profile-icon">
      <div class="profile-icon_image">
        <img :src="image" alt="image" decoding="async" />
      </div>
    </div>
    <section class="profile-info">
      <h2 class="info-title">
        {{ name }}
      </h2>
      <h3 class="info-description" v-html="description" />
      <ul class="info-social">
        <li v-if="discordUrl">
          <a :href="discordUrl" target="_blank" rel="noopener noreferrer">
            <DiscordSvg />
          </a>
        </li>
        <li v-if="githubUrl">
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
            <GithubSvg />
          </a>
        </li>
        <li v-if="twitterUrl">
          <a :href="twitterUrl" target="_blank" rel="noopener noreferrer">
            <TwitterSvg />
          </a>
        </li>
        <li v-if="instagramUrl">
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
            <InstagramSvg />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

import DiscordSvg from '@/assets/discord_logo.svg'
import GithubSvg from '@/assets/github_logo.svg'
import TwitterSvg from '@/assets/twitter_logo.svg'
import InstagramSvg from '@/assets/instagram_logo.svg'

type SocialProps = {
  discord?: string
  github?: string
  twitter?: string
  instagram?: string
}

export default {
  components: {
    DiscordSvg,
    GithubSvg,
    TwitterSvg,
    InstagramSvg
  },
  props: {
    image: {
      type: String as PropType<string>,
      default: ''
    },
    name: {
      type: String as PropType<string>,
      default: ''
    },
    description: {
      type: String as PropType<string>,
      default: ''
    },
    social: {
      type: Object as PropType<SocialProps>,
      default: () => {}
    }
  },
  computed: {
    discordUrl(): string | undefined {
      return (this as any).social?.discord
    },
    githubUrl(): string | undefined {
      return (this as any).social?.github
    },
    twitterUrl(): string | undefined {
      return (this as any).social?.twitter
    },
    instagramUrl(): string | undefined {
      return (this as any).social?.instagram
    }
  },
  methods: {
    toggle() {
      const navEl = document.querySelector('.header-nav')
      navEl.classList.toggle('menu_active')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/profile';
</style>
