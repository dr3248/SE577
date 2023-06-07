# SE577

Architecture:  

<!-- ![del4-diagram](https://github.com/dr3248/SE577/assets/55326813/cf5dc9c0-f358-48d8-ba30-f34030e93013)
 -->
![del-final](https://github.com/dr3248/SE577/assets/55326813/78ca117a-5356-482a-b259-590c182c0888)



The architecture diagram shows the different containers and components of our SPA. It shows a basic diagram of the user with the system, and then a detailed structure:

It has these different routes, and each one displays different information, like the Home page, About us page and so on. The TRIPS page displays the json data, the SEARCH page can be used to search for a particular trip and then display the results as per the fetch query, and the BOOKEDTRIPS shows the TRIPS that were booked. The Trips can be booked on unbooked accordingly. The TRIPS and SEARCH page make use of raw data to display results, and the BOOKEDTRIPS fetches data from TRIPS.

For the Weather Page, using the OpenWeatherMap API, based on the client request, the information i.e. the place name is processed and then in response, we receive the temperture and weather for that place. If an incorrect place or garbage value is entered, then an error message shows up, thus handling and validating the query thereby generating valid response.

The ABOUT USER page shows the USER INFO if they click the button to show Google account Details. Accordingly, the Firebase Authentication is triggered, and as it uses the google sign in instance, it displays a list of google accounts and then signing into a google account will fetch its details

The LOGIN Page performs simple validation, like email and password, does not store the session in this version of the project, but only does basic sanity. Users can login and if not registered, can create a profile, which is stored in the local client storage, hence not preserving the session for now.

The CLIENT SYSTEM displays the data to the client. The SERVER sends the data to the respective routes and pages, and is responsible for loading sending data and creating the session. It sends the TRIPS data to the CLIENT as per request from the Client or User. The SERVER also fetches data from the external Open Weather Map API based on the place name sent by the user.
