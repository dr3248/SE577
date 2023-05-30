# SE577

Architecture:  

<!-- ![del4-diagram](https://github.com/dr3248/SE577/assets/55326813/cf5dc9c0-f358-48d8-ba30-f34030e93013)
 -->
![del5](https://github.com/dr3248/SE577/assets/55326813/b527da2a-33ca-47de-a612-20f31ab1611e)



The architecture diagram shows the different containers and components of our SPA. It shows a basic diagram of the user with the system, and then a detailed structure:

It has these different routes, and each one displays different information, like the Home page, About us page and so on. The TRIPS page displays the json data, the SEARCH page can be used to search for a particular trip and then display the results as per the fetch query. The TRIPS and SEARCH page make use of raw data to display results. 

For the Weather Page, using the OpenWeatherMap API, based on the client request, the information i.e. the place name is processed and then in response, we receive the temperture and weather for that place. 

The CLIENT SYSTEM displays the data to the client. The SERVER sends the data to the respective routes and pages, and is responsible for loading sending data and creating the session. It sends the TRIPS data to the CLIENT as per request from the Client or User. The SERVER also fetches data from the external Open Weather Map API based on the place name sent by the user.
