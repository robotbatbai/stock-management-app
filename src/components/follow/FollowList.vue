<template>
  <v-col>
    <v-select
      v-model="type"
      :items='["Follow", "Upper", "Middle", "Lower","NewItem", "Deleted"]'
      label="Level"
      solo
    >
    </v-select>
    <v-text-field
      placeholder="Search"
      v-model="search"
      solo
    ></v-text-field>
    <v-expansion-panels
      v-model="panel"
    >
      <v-expansion-panel
        v-for="follow in filterList"
        :key="follow.id"
      >
        <follow-detail v-if="currentlyEditing !== follow.id" :follow="follow" @updateNode="currentlyEditing = $event" ></follow-detail>
        <follow-edit v-else @nodeUpdated="currentlyEditing = null;panel=[]" v-bind:follow="follow"></follow-edit>
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
      type: 'Follow',
      search: '',
      panel: []
    }
  },
  computed: {
    filterList () {
      return this.follows.filter((value) => {
        var where = true
        if (this.type === 'Follow') {
          where = where && Number(value.rating) > 3
        }
        // Level Upper
        if (this.type === 'Upper') {
          where = where && Number(value.Level) === 0
        }
        // Level Middle
        if (this.type === 'Middle') {
          where = where && Number(value.Level) === 1
        }
        // Level Lower
        if (this.type === 'Lower') {
          where = where && Number(value.Level) === 2
        }
        // New Item
        if (this.type === 'NewItem') {
          where = where && Number(value.Level) === 3
        }
        // Deleted Item
        if (this.type === 'Deleted') {
          where = where && value.Deleted === true
        } else {
          where = where && value.Deleted === false
        }
        // search
        if (this.search.trim() !== '') {
          where = where && value.Code.includes(this.search.trim())
        }
        return where
      })
    }
  },
  components: {
    FollowEdit,
    FollowDetail
  },
  firestore () {
    return {
      follows: followsCollection.orderBy('Level', 'asc').orderBy('Status', 'desc')
    }
  }
}
</script>
