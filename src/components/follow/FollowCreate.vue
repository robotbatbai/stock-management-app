<template>
  <v-col cols="12" md="12" style="background: #FFFFFF;">
    <v-form>
      <v-text-field
        v-model="newFollow"
        label="Input Code"
      ></v-text-field>
      <v-btn @click.prevent="addFollow()">Add</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-col>
</template>

<script>
import { followsCollection } from '../../firebase'
export default {
  data () {
    return {
      newFollow: ''
    }
  },
  methods: {
    addFollow () {
      followsCollection.add({
        Level: 3,
        rating: 3,
        Types: ['manual'],
        Code: this.newFollow.trim(),
        CreatedAt: Date.now(),
        Deleted: false
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.newFollow = ''
    },
    clear () {
      this.newFollow = ''
    }
  }
}
</script>
