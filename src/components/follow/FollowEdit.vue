<template>
  <v-form class="blue lighten-3">
    <v-row class="mx-auto pa-2">
        <v-col cols="12" md="12">
          {{follow.Code}} - {{follow.Name}}
        </v-col>
    </v-row>
    <v-row class="mx-auto pa-2">
      <v-col cols="12" sm="6" md="3">
        <v-select
          v-model="le"
          :items="levels"
          label="Level"
          >
        </v-select>
      </v-col>
      <v-col cols="12" md="9">
        <v-rating v-model="localFollow.rating"></v-rating>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="localFollow.StopLoss"
            label="Stop Loss"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md=3>
        <v-text-field
            v-model="localFollow.TakeProfit"
            label="Take Profit"
          ></v-text-field>
      </v-col>
      <v-col cols="12" md="12">
        <v-btn class="mr-4" @click.prevent="updateFollow(localFollow)">Save</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { followsCollection } from '../../firebase'
export default {
  props: ['follow'],
  data () {
    let levels = ['Upper', 'Middle', 'Lower', 'NewItem']
    return {
      levels: levels,
      le: levels[this.follow.Level],
      localFollow: Object.assign({}, this.follow)
    }
  },
  methods: {
    updateFollow (follow) {
      follow.Level = this.levels.indexOf(this.le)
      followsCollection.doc(this.follow.id).update({...follow})
        .then(function (docRef) {
          console.log('Updated document!')
        })
        .catch(function (error) {
          console.error('Error updating document text: ', error)
        })
      this.$emit('nodeUpdated', follow.Code)
    }
  }
}
</script>
