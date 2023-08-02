function handleYearButtonClick(event) {
    const selectedYear = event.target.getAttribute("data-year");
    if (selectedYear) {
      window.location.href = `years/year${selectedYear}.html`;
    }
  }
  const yearButtons = document.querySelectorAll(".year-btn");
  yearButtons.forEach((button) => {
    button.addEventListener("click", handleYearButtonClick);
  });
  