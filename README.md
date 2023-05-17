# SE577

SERVER:
You need to do these inside the server folder:

1. For initialization and the dependencies, run the following commands. 

npm init

npm install express  
npm install cors  

2. Then run the app with the following command:

nodemon ./app.js


CLIENT: 
In a new terminal, go the client directory and type the following commands to run the Front End:

yarn  
yarn dev

FRONT END:

With this, the webpage should load. The Weather tab can be used to navigate to the Weather page. Type in the name of any place (like Paris, London, Asia etc.) and it should show the temperature and weather conditions for that place, using the OpenWeatherMap API.

If a random/garbage value is entered, it would display an error message.   

Architecture:  

![del4-diagram](https://github.com/dr3248/SE577/assets/55326813/cf5dc9c0-f358-48d8-ba30-f34030e93013)



The architecture diagram shows the different containers and components of our SPA. It has these different routes, and each one displays different information, like the Home page, About us page and so on. The TRIPS page displays the json data, the SEARCH page can be used to search for a particular trip and then display the results as per the fetch query. The TRIPS and SEARCH page make use of raw data to display results. 

For the Weather Page, using the OpenWeatherMap API, based on the client request, the information i.e. the place name is processed and then in response, we receive the temperture and weather for that place. 