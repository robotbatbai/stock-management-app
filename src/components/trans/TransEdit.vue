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
            v-model="localTrans.bought_price"
            label="Bought Price"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="localTrans.bought_volume"
            label="Volume"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="localTrans.bought_date"
              label="Bought Date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="localTrans.bought_date" @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            v-model="localTrans.stop_loss"
            label="Stop Loss"
          ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md=3>
        <v-text-field
            v-model="localTrans.take_profit"
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
            v-model="localTrans.sell_price"
            label="Sell Price"
          ></v-text-field>
      </v-col>
      <v-col justify="space-around" cols="12" sm="6" md="6">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="localTrans.sell_date"
              label="Sell Date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="localTrans.sell_date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-checkbox
          v-model="localTrans.status"
          label="Transaction Finish"
        ></v-checkbox>
      </v-col>
      <v-col cols="12" md="12">
        <v-btn class="mr-4" @click.prevent="updatetrans(localTrans)">Save</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { transCollection } from '../../firebase'
export default {
  props: ['trans'],
  data () {
    return {
      menu2: false,
      menu: false,
      localTrans: Object.assign({}, this.trans)
    }
  },
  methods: {
    updatetrans (trans) {
      if (trans.sell_price !== 0 && trans.sell_price !== '') {
        trans.profit = (trans.sell_price - trans.bought_price) * trans.bought_volume
      }
      transCollection.doc(this.trans.id).update({...trans})
        .then(function (docRef) {
          console.log('Updated document!')
        })
        .catch(function (error) {
          console.error('Error updating document text: ', error)
        })
      this.$emit('nodeUpdated', trans.Code)
    }
  }
}
</script>
