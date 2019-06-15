<template>
  <v-navigation-drawer>
    <StatusFilter />
  </v-navigation-drawer>
</template>

<script>

import StatusFilter from '@/components/leftSidebar/StatusFilter'

export default {
  name: 'LeftSidebar',
  components: { StatusFilter }
}
</script>

<style scoped>
</style>
