function populateDropdown(url, dropdown, placeholder) {
  // fetch data from the api
  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
      if (Array.isArray(responseData.data)) {
        dropdown.innerHTML = "";

        const placeholderOption = document.createElement("option");
        placeholderOption.text = placeholder;
        dropdown.appendChild(placeholderOption);

        responseData.data.forEach((item) => {
          const option = document.createElement("option");
          option.value = item.id;
          option.text = item.name;
          dropdown.appendChild(option);
        });
      } else {
        console.error(
          "Data in responseData is not an array:",
          responseData.data
        );
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

populateDropdown(countryApiUrl, countryDropdown, "Select a Country");
