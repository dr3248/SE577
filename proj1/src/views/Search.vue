<template>
  <div class="maps">
    <h1>This is a Search page</h1>
  </div>

  <p>
    <!-- NOTE the keypress and keyup events to mark the field dirty to manage the UI-->
    Trip Destination: <input type="text" placeholder="Search" 
                        v-model="tripDest" 
                        @keypress = "queryChanged"
                        @keyup.delete = "queryChanged"/>
                        
    <button type="button"  
      @click="fetchStudentInfo()"
      :disabled = "shouldDisable"
      > 🔎 </button>
  </p>

  <br>
  <div v-if="!apiErrorInfo.isError && !queryIsDirty">
    <p class="happy-text">Found trip to: {{ tripDest }}</p>
    <p>
      <!-- note the ?. notation, given studentData may be undefined if we dont find one -->
      Destination: {{ tripData?.destination }} <br/>
      Duration: {{ tripData?.duration }} <br/>
      Price: {{ tripData?.price}} <br/>
    </p>
  </div>
  

  <div v-if="apiErrorInfo.isError && !queryIsDirty">
    <p>Sorry, there is no trip to {{ tripDest }}</p>
  </div>
  
</template>


<script lang="ts">
  export default {
    name: 'Search',
  };
</script>
  


<script setup lang="ts">

  import {ref, computed} from 'vue';
  import type {TripApiInterface, ApiErrorInterface} from '../pages/ApiInterfaces';
  import axios, {AxiosError} from 'axios';

  const tripDest = ref('')
  let tripData = ref<TripApiInterface | undefined>()
  const apiErrorInfo = ref<ApiErrorInterface>({isError: false, errorCode: 0, errorMessage:""})
  const queryIsDirty = ref(true)

  const fetchStudentInfo = async () =>{
    queryIsDirty.value = false
    console.log("Fetching By Student ID: ", tripDest.value)

    //this is where to go and get the student data, notice the string
    //interpolation to get the student ID value
    let destURL = `http://localhost:3000/trips?dest=${tripDest.value}`

    //Use axios to load the student data - readup on await to make
    //async calls easier also look at try/catch for error handling

    try{
      let tripAPI = await axios.get<TripApiInterface>(destURL)
      //if OK, set the studentData variable, so that we can render in the ui
      if(tripAPI.status == 200){

        apiErrorInfo.value.isError = false;
        apiErrorInfo.value.errorCode = tripAPI.status;
        apiErrorInfo.value.errorMessage = tripAPI.statusText;
        tripData.value = tripAPI.data
        console.log(tripData.value)
        console.log("IF ")
      } else {
        console.log("bad student value")
      }
    } catch (err) {
      let e = err as AxiosError //convert to axios error type
      if (e.response) {
        apiErrorInfo.value.isError = true;
        apiErrorInfo.value.errorCode = e.response.status;
        apiErrorInfo.value.errorMessage = e.request.statusText;
        console.log("Got Error Code ", e.response.status)
      } else {
        // Anything else
      }
    } 
  }


  //This is a computed property that will change when the studentID property
  //changes it is used to enable and disable the button
  const shouldDisable = computed(() => {
      return tripDest.value.length > 0 ? false : true
  })

  const queryChanged = (e: Event) => {
    queryIsDirty.value = true;
    tripData.value = undefined;
  }

</script>


<style>
@media (min-width: 1024px) {
  .maps {
    min-height: 10rem;
    display: flex;
    align-items: center;
  }
}
</style>
