<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Issues</h1>
      </v-flex>
    </v-layout>

    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-else>
      <div v-for="issue in issuesPaginated" :key="issue.number">
        <v-container>
          <v-layout row wrap>
            <v-flex xs2>
              <div class="mt-3 d-block text-xs-center">
                <UserPreview :user="issue.user" />
              </div>
              <div class="mt-3 d-block text-xs-center">
                {{ issue.comments }} comments
              </div>
            </v-flex>

            <v-flex xs10>
              <div class="title">
                <h2>{{ issue.state }}</h2>
                <router-link :to="{name: 'issue', params: {id: issue.number}}">
                  {{ issue.title }}
                </router-link>
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider />
      </div>

      <div class="text-xs-center">
        <v-pagination
          v-model="pageNumber"
          :length="paginationPagesCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Progress from '../Progress'
import UserPreview from '@/components/user/Preview'

export default {
  name: 'List',
  components: { Progress, UserPreview },
  props: {
    page: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      pageNumber: parseInt(this.page),
      issuesPerPage: 3
    }
  },
  watch: {
    pageNumber: function (val, oldVal) {
      this.$router.push({ name: 'home', params: { page: val } })
    }
  },
  computed: {
    ...mapGetters({
      issues: 'issues/getList',
      loading: 'issues/getLoading',
      getListPaginated: 'issues/getListPaginated'
    }),
    paginationPagesCount () {
      return Math.floor(this.issues.length / this.issuesPerPage)
    },
    issuesPaginated () {
      return this.getListPaginated({ top: this.issuesPerPage, page: this.pageNumber })
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'issues/fetch'
    })
  }
}
</script>
