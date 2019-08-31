<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list>
        <v-list-item v-for="(note,i) in trans.Note" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title>{{note.created_at | formatDate}}</v-list-item-title>
            <v-list-item-subtitle>{{note.memo}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12" md="12">
      <v-form ref="form">
        <v-textarea
          solo
          v-model="newNote"
          label="new note"
        ></v-textarea>
        <v-btn class="mr-4" @click.prevent="addNote()">Add</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { transCollection } from '../../firebase'
export default {
  data () {
    return {
      newNote: ''
    }
  },
  props: ['trans'],
  methods: {
    addNote () {
      var tmp = {
        memo: this.newNote,
        created_at: Math.floor(Date.now() / 1000),
        status: false
      }
      if (typeof this.trans.note === 'undefined') {
        var notes = []
      } else {
        notes = this.trans.note
      }
      notes.push(tmp)
      transCollection.doc(this.trans.id).update({
        note: notes
      })
        .then(function (docRef) {
          console.log(' Updated Note')
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.newNote = ''
    }
  }
}
</script>
