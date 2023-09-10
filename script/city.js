stateDropdown.addEventListener("change", function () {
  const selectedStateId = this.value;
  if (selectedStateId !== "") {
    populateDropdown(
      cityApiUrl + `?state_id=${selectedStateId}`,
      cityDropdown,
      "Select a City"
    );
  } else {
    // clear the city dropdown if no state is selected
    cityDropdown.innerHTML = "";
  }
});
