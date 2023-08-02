function handleYearButtonClick(event) {
  const selectedYear = event.target.getAttribute("data-year");
  if (selectedYear) {
    console.log(`Selected Year: ${selectedYear}`);
  }
}

const yearButtons = document.querySelectorAll(".year-btn");
yearButtons.forEach((button) => {
  button.addEventListener("click", handleYearButtonClick);
});
