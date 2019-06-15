<template>
  <div>
    <IssueList :page="page" />
  </div>
</template>

<script>
  import IssueList from '@/components/issues/List'


export default {
  name: 'Home',
  components: {
    IssueList
  },
  props: {
    page: {
      type: [Number, String],
      required: false,
      default: 1
    }
  },
}
</script>
