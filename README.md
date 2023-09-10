# DorfieLabsAssignment

The code is split into separate files for each dropdown (Country, State, City) to make it organized and maintainable. Each file handles its dropdown's data and functionality. The main HTML file includes these scripts to ensure each dropdown operates independently while sharing the page's structure.


1. country.js:
   - This file contains the code related to the Country dropdown.
   - It defines the API URL for fetching country data and selects the Country dropdown element from the HTML.
   - The `populateCountryDropdown` function is responsible for fetching data from the API and populating the Country dropdown.
   - An event listener is set up to respond to changes in the Country dropdown, and it triggers the population of the State dropdown based on the selected country.
   - The Country dropdown is initially populated when the page loads.

2. stateDropdown.js:
   - This file contains the code related to the State dropdown.
   - It defines the API URL for fetching state data and selects the State dropdown element from the HTML.
   - The `populateStateDropdown` function (not shown here, but you can create it similarly) is responsible for fetching data from the API and populating the State dropdown.
   - An event listener is set up to respond to changes in the State dropdown, and it triggers the population of the City dropdown based on the selected state.
   - The State dropdown is initially populated when the page loads.

3. cityDropdown.js:
   - This file contains the code related to the City dropdown.
   - It defines the API URL for fetching city data and selects the City dropdown element from the HTML.
   - The `populateCityDropdown` function (not shown here, but you can create it similarly) is responsible for fetching data from the API and populating the City dropdown.
   - There may be an event listener to respond to changes in the City dropdown, but it's not shown in this example as it depends on the specific requirements.
   - The City dropdown is initially populated when the page loads.

4. index.html:
   - This is the main HTML file that defines the structure of the web page.
   - It includes labels and selects for the Country, State, and City dropdowns.
   - Separate script tags are used to include the JavaScript files (`countryDropdown.js`, `stateDropdown.js`, and `cityDropdown.js`) for each dropdown's functionality.
   - When the page loads, the JavaScript files are executed, and each dropdown is initialized and populated as needed.

