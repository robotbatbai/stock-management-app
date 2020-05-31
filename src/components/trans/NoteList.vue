<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-list>
        <v-list-item v-for="(note,i) in trans.note" :key="i" two-line>
          <v-list-item-content>
            <v-list-item-title>{{note.AddDate | formatDate}}</v-list-item-title>
            <v-list-item-subtitle class="pre-formatted">{{note.Memo | newline }}</v-list-item-subtitle>
            <v-divider></v-divider>
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
        Memo: this.newNote.replace(/(?:\r\n|\r|\n)/g, '<br>'),
        AddDate: Math.floor(Date.now() / 1000),
        Status: ''
      }
      if (typeof this.trans.note === 'undefined' || this.trans.note == null) {
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

<style scoped>
.pre-formatted {
  white-space: pre;
}
</style>
