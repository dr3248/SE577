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
      <button class="unbook-button" @click="unbookTrips">Unbook</button>
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
    this.bookedTrips = JSON.parse(this.$route.query.trips || '[]');
  },
  methods: {
    unbookTrips() {
      this.bookedTrips = [];
    },
  },
};
</script>

<style scoped>
.unbook-button {
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
