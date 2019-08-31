<template>
  <div :class="trans.profit > 0 ? 'red lighten-4' : ''">
    <v-expansion-panel-header>
      <v-row>
        <v-col cols="4" md="2">
          {{trans.code}}
        </v-col>
        <v-col cols="4" md="2">
          <p :class="trans.Status > 0 ? 'red--text' : ''">{{trans.profit}}</p>
        </v-col>
        <v-col cols="8" md="6">
          <p>{{trans.created_at}}</p>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn small class="d-inline" outlined @click="edittrans(trans)" color="success"> <v-icon>edit</v-icon> </v-btn>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col>
          {{trans.bought_date}}
          {{trans.boguth_price}}
        </v-col>
      </v-row>
      <note-list :trans="trans"></note-list>
    </v-expansion-panel-content>
  </div>
</template>

<script>
// import { transCollection } from '../../firebase'
import NoteList from './NoteList'
export default {
  props: ['trans'],
  components: {
    NoteList
  },
  methods: {
    edittrans (trans) {
      this.currentlyEditing = trans.id
      this.$emit('updateNode', trans.id)
    }
  }
}
</script>
