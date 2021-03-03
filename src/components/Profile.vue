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
    </section>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'

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
