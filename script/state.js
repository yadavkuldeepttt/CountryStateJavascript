countryDropdown.addEventListener("change", function () {
  const selectedCountryId = this.value;
  if (selectedCountryId !== "") {
    populateDropdown(
      stateApiUrl + `?country_id=${selectedCountryId}`,
      stateDropdown,
      "Select a State"
    );
  } else {
    // clear state and city if no country is selected
    stateDropdown.innerHTML = "";
    cityDropdown.innerHTML = "";
  }
});
