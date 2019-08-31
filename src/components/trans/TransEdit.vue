<template>
  <v-form>
    <v-row class="mx-auto pa-2">
      <v-col cols="12">
        <v-subheader>
          Bought Information
        </v-subheader>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="trans.bought_price"
            label="Bought Price"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="trans.bought_volume"
            label="Volume"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-text-field
            v-model="trans.bought_date"
            label="Bought Date"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="trans.stop_loss"
            label="Stop Loss"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md=3>
        <v-text-field
            v-model="trans.take_profit"
            label="Take Profit"
          ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-subheader>
          Sell Information
        </v-subheader>
        <v-divider></v-divider>
      </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
              v-model="trans.sell_price"
              label="Sell Price"
            ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
              v-model="trans.sell_date"
              label="Sell Date"
            ></v-text-field>
        </v-col>
      <v-col cols="12" md="12">
        <v-btn class="mr-4" @click.prevent="updatetrans(trans)">Save</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { transCollection } from '../../firebase'
export default {
  props: ['trans'],
  methods: {
    updatetrans (trans) {
      transCollection.doc(this.trans.id).update({...trans})
        .then(function (docRef) {
          console.log('Updated document!')
        })
        .catch(function (error) {
          console.error('Error updating document text: ', error)
        })
      this.$emit('nodeUpdated', this.trans.Code)
    }
  }
}
</script>
