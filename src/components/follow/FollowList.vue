<template>
  <v-col cols="12" md="12">
    <v-select
          v-model="type"
          :items='["Default", "Upper", "Middle", "Lower","NewItem", "Deleted"]'
          label="Level"
          solo
          >
      </v-select>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="follow in filterList"
        :key="follow.id"
      >
        <follow-detail v-if="currentlyEditing !== follow.id" :follow="follow" @updateNode="currentlyEditing = $event" ></follow-detail>
        <follow-edit v-else @nodeUpdated="currentlyEditing = null" v-bind:follow="follow"></follow-edit>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import { followsCollection } from '../../firebase'
import FollowEdit from './FollowEdit'
import FollowDetail from './FollowDetail'
export default {
  data () {
    return {
      follows: [],
      currentlyEditing: null,
      type: null
    }
  },
  computed: {
    filterList () {
      return this.follows.filter((value) => {
        // Level Upper
        if (this.type === 'Upper') {
          return Number(value.Level) === 0 && value.Deleted === false
        }
        // Level Middle
        if (this.type === 'Middle') {
          return Number(value.Level) === 1 && value.Deleted === false
        }
        // Level Lower
        if (this.type === 'Lower') {
          return Number(value.Level) === 2 && value.Deleted === false
        }
        // New Item
        if (this.type === 'NewItem') {
          return Number(value.Level) === 3 && value.Deleted === false
        }
        // Deleted Item
        if (this.type === 'Deleted') {
          return value.Deleted === true
        }
        return value.Deleted === false
      })
    }
  },
  components: {
    FollowEdit,
    FollowDetail
  },
  firestore () {
    return {
      follows: followsCollection.orderBy('Level', 'asc').orderBy('rating', 'desc')
    }
  }
}
</script>
