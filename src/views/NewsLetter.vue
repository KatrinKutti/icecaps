<template>
  <div class="newsletter">
    <h1>Order your copy of Save The Icecaps Inc NewsLetter here<br>
      and help to save the polar bears!</h1>
    <v-col cols="10" sm="5">

      Name:
      <v-text-field v-model="name" placeholder="Name" required outlined></v-text-field>
      <br>
      Mailing address: <br>
      <v-text-field v-model="addressLine1" placeholder="Address Line1" required outlined></v-text-field>
      <v-text-field v-model="addressLine2" placeholder="Address Line2" outlined></v-text-field>
      <v-text-field v-model="zipCode" placeholder="Zip Code" required outlined></v-text-field>
      <v-text-field v-model="city" placeholder="City" required outlined></v-text-field>
      <v-text-field v-model="country" placeholder="Coutnry" required outlined></v-text-field>
      <br><br>

      Gender: <input type="radio" id="female" value="female" v-model="picked">
      <label for="female">Female</label>
      <input type="radio" id="male" value="male" v-model="picked">
      <label for="male">Male</label> (Optional)<br><br>

      Date of Birth (Optional): {{ DOB }}<br>
      <v-date-picker v-model="DOB" outlined></v-date-picker>
      <br>
      Income Level:
      <v-text-field v-model="incomeLevel" placeholder="Optional" outlined></v-text-field>

      I would like to donate
      <vue-numeric-input v-model="donate" :min="1" :max="1000000" :step="1" required outlined></vue-numeric-input>
      € (EURO)<br><br>
      <input type="checkbox" id="monthly" v-model="checked">
      <label for="monthly">Subscribe to a monthly newsletter and agree to recurring donation</label><br><br>
      <input type="checkbox" id="optout" v-model="checked">
      <label for="optout">I hate polar bears -- select this to opt out of a recurring donation</label><br><br>
      <input type="checkbox" id="termsconditions" v-model="checked" checked>
      <label for="termsconditions">I agree to the <a href="https://privacy.jobilla.com/terms-and-conditions"
                                                     target="_blank" rel="noopener">Terms and Conditions</a></label><br><br>
      <b>{{ 'We will charge you ' + this.donate + ' € on 01.07.2021.' }}</b><br>
      <b>{{ 'We plan to send out the newsletter on the first workday of every month.' }}</b><br><br>
      <v-btn v-on:click="saveInHtml()" outlined>Submit</v-btn>
      <br>
    </v-col>
  </div>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'

let saveInJs = function () {
  this.$http.put('http://localhost:8080/newsletter', {},
      {
        params:
            {
              name: this.name,
              addressLine1: this.addressLine1,
              addressLine2: this.addressLine2,
              zipCode: this.zipCode,
              city: this.city,
              country: this.country,
              gender: this.gender,
              DOB: this.DOB,
              incomeLevel: this.incomeLevel,
              donate: this.donate,
              monthly: this.monthly,
              optout: this.optout,
              termsconditions: this.termsconditions
            }
      })
      .then(response => this.answer = response.data)
      .catch(error => this.answer = error.response.data.message)
}

export default {
  name: 'MakeDeposit',
  components: {VueNumericInput},
  data: function () {
    return {
      name: '',
      addressLine1: '',
      addressLine2: '',
      zipCode: '',
      city: '',
      country: '',
      gender: '',
      DOB: '',
      donate: '',
      monthly: '',
      optout: '',
      termsconditions: ''

    }
  },
  methods: {
    saveInHtml: saveInJs
  }
}
</script>
