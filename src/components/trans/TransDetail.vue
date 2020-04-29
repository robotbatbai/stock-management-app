<template>
  <div :class="trans.profit < 0 ? 'red lighten-4' : ''">
    <v-expansion-panel-header>
      <v-row>
        <v-col cols="4" md="2">
          {{trans.code}}
        </v-col>
        <v-col cols="4" md="2">
          <p :class="trans.profit < 0 ? 'red--text' : ''">{{new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(trans.profit)}}</p>
        </v-col>
        <v-col cols="8" md="6">
          <p>{{trans.bought_date}}</p>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn small class="d-inline" outlined @click="edittrans(trans)" color="success"> <v-icon>edit</v-icon> </v-btn>
          <v-btn small outlined  :href="'https://kabutan.jp/stock/chart?code='+trans.code" @click.stop="" target="_blank" color="success"> <v-icon>launch</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
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
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="trans.bought_volume"
            label="Volume"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="trans.bought_date"
            label="Bought Date"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="trans.stop_loss"
            label="Stop Loss"
            readonly
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md=3>
          <v-text-field
            v-model="trans.take_profit"
            label="Take Profit"
            readonly
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
            readonly
          ></v-text-field>
        </v-col>
        <v-col justify="space-around" cols="12" sm="6" md="6">
          <v-text-field
            v-model="trans.sell_date"
            label="Sell Date"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="trans.status"
            label="Transaction Finish"
            readonly
          ></v-checkbox>
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
