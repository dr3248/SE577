<template>
  <div class="booked">
    <h1>This is the Booked Trips page</h1>
    <div v-if="bookedTrips.length > 0">
      <div v-for="(trip, index) in bookedTrips" :key="index">
        <p>Destination: {{ trip.destination }}</p>
        <p>Duration: {{ trip.duration }}</p>
        <p>Price: {{ trip.price }}</p>
        <hr>
      </div>
    </div>
    <div v-else>
      <p>No trips have been booked.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookedTrips',
  data() {
    return {
      bookedTrips: [],
    };
  },
  mounted() {
    this.bookedTrips = this.$route.query.trips ? JSON.parse(this.$route.query.trips) : [];
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
