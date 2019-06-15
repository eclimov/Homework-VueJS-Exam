<template>
  <div>
    <h3>Status</h3>

    <v-radio-group v-model="status">
      <v-radio label="All" value="all"></v-radio>
      <v-radio label="Open" value="open"></v-radio>
      <v-radio label="Closed" value="closed"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StatusFilter',
  data () {
    return {
      status: 'all'
    }
  },
  watch: {
    status: function (val, oldVal) {
      this.fetch({state: val})
    }
  },
  methods: {
    ...mapActions({
      fetch: 'issues/fetch'
    })
  }
}
</script>
