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
    <trans-list></trans-list>
    <v-dialog style="background: #3A1C71;" v-model="dialog" max-width="600px">
      <trans-create></trans-create>
    </v-dialog>
  </v-row>
</template>

<script>
import transCreate from './trans/transCreate'
import transList from './trans/transList'
export default {
  name: 'trans',
  data () {
    return {
      'dialog': null
    }
  },
  components: {
    transCreate,
    transList
  }
}
</script>
