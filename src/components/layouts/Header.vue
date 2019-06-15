<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">Vue Exam</router-link>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style  lang="scss">
  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
</style>
