<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs2>
        <LeftSidebar />
      </v-flex>

      <v-flex xs10 class="pa-5">
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Header from '@/components/layouts/Header'
import LeftSidebar from '@/components/layouts/LeftSidebar'

export default {
  name: 'CommonLayout',
  components: { Header, LeftSidebar }
}
</script>
