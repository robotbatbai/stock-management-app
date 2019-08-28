<template>
  <v-row class="mx-auto pa-2">
    <v-card-text style="height: 100px; position: relative">
      <v-btn
        absolute
        dark
        fab
        middle
        left
        color="pink"
        @click="dialog = !dialog"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-text>
    <follow-list></follow-list>
    <v-dialog style="background: #3A1C71;" v-model="dialog" max-width="600px">
      <follow-create></follow-create>
    </v-dialog>
  </v-row>
</template>

<script>
import FollowCreate from './follow/FollowCreate'
import FollowList from './follow/FollowList'
export default {
  name: 'Follow',
  data () {
    return {
      'dialog': null
    }
  },
  components: {
    FollowCreate,
    FollowList
  }
}
</script>
