<template>
  <div :class="follow.Status > 1 || follow.Status < -1? 'red lighten-4' : ''">
    <v-expansion-panel-header>
      <v-row>
        <v-col cols="6" md="4">
          {{follow.Code}} - {{follow.Name}}
        </v-col>
        <v-col cols="4" md="2">
          <p :class="follow.Status > 2 ? 'red--text' : ''">{{follow.Status}}</p>
        </v-col>
        <v-col cols="6" md="4">
          <v-rating small v-model="follow.rating" readonly></v-rating>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn small class="d-inline" outlined @click="deleteFollow(follow)" @click.stop=""  color="warning"> <v-icon>delete</v-icon> </v-btn>
          <v-btn small class="d-inline" outlined @click="editFollow(follow)" @click.stop="" color="success"> <v-icon>edit</v-icon> </v-btn>
          <v-btn small outlined  :href="'https://kabutan.jp/stock/chart?code='+follow.Code" @click.stop="" target="_blank" color="success"> <v-icon>launch</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-chip-group
          column
          active-class="primary--text"
        >
          <v-chip v-for="type in follow.Types" @click="updateTags(type)" :key="type">
            {{ type }}
          </v-chip>
        </v-chip-group>
      <note-list :follow="follow"></note-list>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import { followsCollection } from '../../firebase'
import NoteList from './NoteList'
export default {
  props: ['follow'],
  data () {
    return {
      level: ['Upper', 'Middle', 'Lowwer', 'NewItem']
    }
  },
  components: {
    NoteList
  },
  methods: {
    updateFollow (follow) {
      console.log(follow.rating)
      followsCollection.doc(follow.id).update(...follow)
        .then(function (docRef) {
          console.log('Updated document with ID: ', follow.Code)
        })
        .catch(function (error) {
          console.error('Error updateing document: ', error)
        })
    },
    deleteFollow (follow) {
      if (confirm('Are you want delete it ??')) {
        followsCollection.doc(follow.id).update({
          Deleted: true
        })
        // followsCollection.doc(follow.id).delete()
      }
    },
    editFollow (follow) {
      this.currentlyEditing = follow.id
      this.followEditText = follow.Name
      this.$emit('updateNode', follow.id)
    },
    updateTags (type) {
      this.$emit('updateTag', type)
    }
  }
}
</script>
