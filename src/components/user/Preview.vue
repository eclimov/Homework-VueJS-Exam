<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <a :href="user.html_url" target="_blank">
        <v-avatar class="d-inline-flex ma-2" color="indigo">
          <img
            :src="user.avatar_url"
            :alt="user.login"
            v-on="on"
          >
        </v-avatar>
      </a>
    </template>

    <div>
      <p>{{ user.login }}</p>
    </div>
  </v-tooltip>
</template>

<script>

  export default {
    name: 'Preview',
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
