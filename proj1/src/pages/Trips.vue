<template>
  <p> This is the Trips page</p>

  <!-- Only render this table if there is student data-->
   <div v-if="tripData.length > 0">
     <table>
       <tr>
         <th>Destination</th>
         <th>Days</th>
         <th>Price</th>
       </tr>
       <tr v-for = "(trip, rowNum) in tripData">
         <td>{{ trip.destination }}</td>
         <td>{{ trip.duration}}</td>
         <td>{{ trip.price}}</td>
       </tr>
     </table>
   </div>
   <br>
   <p>The number of results is {{ tripData.length }}</p>
   
</template>
  
<script lang="ts">
export default {
  name: 'Trips',
};
</script>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import type {TripApiInterface} from './ApiInterfaces';
import axios from 'axios';

let tripData = ref<TripApiInterface[]>([])

onMounted(async () => {
  console.log("Trips Page mounted")

  //this is where to go and get the student data
  let allTripsURL = 'http://localhost:3000/trips'

  //Use axios to load the student data - readup on await to make
    //async calls easier
  let tripAPI = await axios.get<TripApiInterface[]>(allTripsURL)

  //if OK, set the studentData variable, so that we can render in the ui
  if(tripAPI.status == 200){
    tripData.value = tripAPI.data
  }

})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>