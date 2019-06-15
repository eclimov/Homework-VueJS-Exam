<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs12 class="pa-5">
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

  import Header from '@/components/layouts/Header'

  export default {
    name: 'CommonLayout',
    components: { Header }
  }
</script>

<style scoped>
</style>
