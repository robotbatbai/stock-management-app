<template>
  <v-col cols="12" md="12" style="background: #FFFFFF;">
    <v-form>
      <v-text-field
        v-model="newtrans"
        label="Input Code"
      ></v-text-field>
      <v-btn @click.prevent="addtrans()">Add</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-col>
</template>

<script>
import { transCollection } from '../../firebase'
export default {
  data () {
    return {
      newtrans: ''
    }
  },
  methods: {
    addtrans () {
      transCollection.add({
        code: this.newtrans.trim(),
        created_at: Date.now(),
        updated_at: Date.now(),
        status: false,
        profit: 0,
        sell_price: '0',
        bought_price: '0'
      })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      this.newtrans = ''
    },
    clear () {
      this.newtrans = ''
    }
  }
}
</script>
