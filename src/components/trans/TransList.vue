<template>
  <v-col>
    <v-select
      v-model="type"
      :items='["Default", "Finish", "Won", "Loss"]'
      label="Status"
      solo
    >
    </v-select>
    <v-text-field
      placeholder="Search"
      v-model="search"
      solo
    ></v-text-field>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="trans in filterList"
        :key="trans.id"
      >
        <trans-detail v-if="currentlyEditing !== trans.id" :trans="trans" @updateNode="currentlyEditing = $event" ></trans-detail>
        <trans-edit v-else @nodeUpdated="currentlyEditing = null" v-bind:trans="trans"></trans-edit>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import { transCollection } from '../../firebase'
import TransEdit from './TransEdit'
import TransDetail from './TransDetail'
export default {
  data () {
    return {
      Trans: [],
      currentlyEditing: null,
      type: null,
      search: ''
    }
  },
  computed: {
    filterList () {
      return this.Trans.filter((value) => {
        var where = true
        // Level Upper
        if (this.type === 'Finish') {
          where = where && value.status === true
        }
        // Level Middle
        if (this.type === 'Won') {
          where = where && Number(value.profit) > 0
        }
        // Level Lower
        if (this.type === 'Lower') {
          where = where && Number(value.profit) <= 0
        }
        // search
        if (this.search.trim() !== '') {
          where = where && value.code.includes(this.search.trim())
        }
        return where
      })
    }
  },
  components: {
    TransEdit,
    TransDetail
  },
  firestore () {
    return {
      Trans: transCollection.orderBy('created_at', 'desc').orderBy('updated_at', 'desc')
    }
  }
}
</script>
