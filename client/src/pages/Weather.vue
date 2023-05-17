<template>
  <p> This is the Weather page</p>


    <p>
    <!-- NOTE the keypress and keyup events to mark the field dirty to manage the UI-->
    Trip Destination: <input type="text" placeholder="Weather" 
                        v-model="tripDest" 
                        @keypress = "queryChanged"
                        @keyup.delete = "queryChanged"/>
                        
    <button type="button" action="/"  
      @click="fetchCityInfo()"
      :disabled = "shouldDisable"
      > 🔎 </button>
  </p>

  <br>
  <div v-if="!apiErrorInfo.isError && !queryIsDirty">
      <!-- note the ?. notation, given studentData may be undefined if we dont find one -->
      <h1>The temperature in {{ tripDest}} is {{ tripData?.temp }} degrees Celcius</h1>
      <h3>The weather is currently {{tripData?.desc}} </h3>
      <!-- <img src ='{{ tripData?.imgUrl }}'>  -->
  </div>

  <!-- Additions  -->

  <div v-else-if="tripData === undefined && !queryIsDirty">
  <h1>No temperature or weather found for {{ tripDest }}.</h1>
  </div>
  

  <div v-if="apiErrorInfo.isError && !queryIsDirty">
    <p>Sorry, there is no trip to {{ tripDest }}</p>
  </div>

</template>
  
<script lang="ts">
  export default {
    name: 'Weather',
  };
</script>



<script setup lang="ts">

  import {ref, computed} from 'vue';
  import type {WeatherApiInterface, ApiErrorInterface} from './ApiInterfaces';
  import axios, {AxiosError} from 'axios';

  const tripDest = ref('')
  let tripData = ref<WeatherApiInterface | undefined>()
  const apiErrorInfo = ref<ApiErrorInterface>({isError: false, errorCode: 0, errorMessage:""})
  const queryIsDirty = ref(true)

  const fetchCityInfo = async () =>{
    queryIsDirty.value = false
    console.log("Fetching Weather by city: ", tripDest.value)

    //this is where to go and get the student data, notice the string
    //interpolation to get the student ID value
    let destURL = `http://localhost:3000/weather?city=${tripDest.value}`

    //Use axios to load the student data - readup on await to make
    //async calls easier also look at try/catch for error handling

    try{
      let tripAPI = await axios.get<WeatherApiInterface>(destURL)
      //if OK, set the studentData variable, so that we can render in the ui
      if(tripAPI.status == 200){

        apiErrorInfo.value.isError = false;
        apiErrorInfo.value.errorCode = tripAPI.status;
        apiErrorInfo.value.errorMessage = tripAPI.statusText;
        tripData.value = tripAPI.data
        console.log(tripData.value)
      } else {
        console.log("bad city value")
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



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>