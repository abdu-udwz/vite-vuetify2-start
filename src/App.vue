<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({}),
})
</script>

<template>
  <VApp>
    <VAppBar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <VImg
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <VImg
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <VSpacer />

      <VBtn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <VIcon>mdi-open-in-new</VIcon>
      </VBtn>
    </VAppBar>

    <VMain>
      <HelloWorld />
    </VMain>
  </VApp>
</template>