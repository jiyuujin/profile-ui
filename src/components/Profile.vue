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
            <img alt="discord logo" src="https://i.imgur.com/QTBoiOf.jpg" width="20px" />
          </a>
        </li>
        <li v-if="githubUrl">
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
            <img alt="github logo" src="https://i.imgur.com/VpGQK9i.jpg" width="20px" />
          </a>
        </li>
        <li v-if="twitterUrl">
          <a :href="twitterUrl" target="_blank" rel="noopener noreferrer">
            <img alt="twitter logo" src="https://i.imgur.com/brhG1RW.jpg" width="20px" />
          </a>
        </li>
        <li v-if="instagramUrl">
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer">
            <img alt="instagram logo" src="https://i.imgur.com/niXFHId.jpg" width="20px" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue'

type SocialProps = {
  discord?: string
  github?: string
  twitter?: string
  instagram?: string
}

interface IProfileProps {
  image: string
  name: string
  description: string
  social: SocialProps
}

export default {
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
  setup(props: IProfileProps) {
    const toggle = () => {
      const navEl = document.querySelector('.header-nav')
      navEl.classList.toggle('menu_active')
    }
    const discordUrl = computed(() => {
      return props.social?.discord
    })
    const githubUrl = computed(() => {
      return props.social?.github
    })
    const twitterUrl = computed(() => {
      return props.social?.twitter
    })
    const instagramUrl = computed(() => {
      return props.social?.instagram
    })
    return { toggle, discordUrl, githubUrl, twitterUrl, instagramUrl }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/profile.scss';
</style>
