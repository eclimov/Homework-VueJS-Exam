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
      <div v-for="issue in issues" :key="issue.number">
        <v-container>
          <v-layout row wrap>
            <v-flex xs2>
              <div>
                <div class="d-block text-xs-center">
                  {{ issue.user.login }}
                </div>
              </div>
              <div class="mt-3 d-block text-xs-center">
                {{ issue.comments }} comments
              </div>
            </v-flex>

            <v-flex xs10>
              <div class="title">
                <router-link :to="{name: 'issue', params: {id: issue.number}}">
                  {{ issue.title }}
                </router-link>
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Progress from '../Progress'

  export default {
    name: 'List',
    components: { Progress },
    computed: {
      ...mapGetters({
        issues: 'issues/getList',
        loading: 'issues/getLoading'
      })
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
