<template>
  <div>
    <h2>
      {{ issue.title }}
    </h2>
    <div>
      {{ issue.body }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Issue',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'issues/getById',
      loading: 'issues/getLoading'
    }),
    issue () {
      return this.getById(parseInt(this.id)) || false
    }
  }
}
</script>
