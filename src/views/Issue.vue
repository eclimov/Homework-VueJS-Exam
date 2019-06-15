<template>
  <div>
    <h2>
      {{ issue.title }}
    </h2>
    <div v-html="issue.body" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  },
  methods: {
    ...mapActions({
      fetchIssue: 'issues/fetchOne'
    })
  }
}
</script>
