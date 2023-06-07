<template>
  <div>
    <p>This is the Trips page</p>

    <!-- Only render this table if there is trip data-->
    <div v-if="tripData.length > 0">
      <table>
        <tr>
          <th>Destination</th>
          <th>Days</th>
          <th>Price</th>
          <th>Book / UnBook</th>
        </tr>
        <tr v-for="(trip, rowNum) in tripData" :key="trip.id">
          <td>{{ trip.destination }}</td>
          <td>{{ trip.duration }}</td>
          <td>{{ trip.price }}</td>
          <td>
            <button @click="bookTrip(trip)">Book</button>
          </td>
        </tr>
      </table>
    </div>
    <br>
    <p>The number of results is {{ tripData.length }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const tripData = ref([]);
const bookedTrips = ref([]);
const router = useRouter();

function bookTrip(trip) {
  const isBooked = bookedTrips.value.some((bookedTrip) => bookedTrip.destination === trip.destination);

  if (!isBooked) {
    bookedTrips.value.push(trip);

    router.push({ name: 'BookedTrips', query: { trips: JSON.stringify(bookedTrips.value) } });
  }
}

onMounted(async () => {
  console.log('Trips Page mounted');

  const allTripsURL = 'http://localhost:3000/trips';

  try {
    const tripAPI = await axios.get(allTripsURL);
    tripData.value = tripAPI.data;
  } catch (error) {
    console.error('Error fetching trips:', error);
  }
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
