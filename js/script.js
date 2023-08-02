function handleYearButtonClick(event) {
    const selectedYear = event.target.getAttribute("data-year");
    if (selectedYear) {
      window.location.href = `years/year${selectedYear}.html`;
    }
  }

  function handleGroupButtonClick(event) {
    const selectedGroup = event.target.getAttribute("data-group");
    if (selectedGroup) {
      window.location.href = `groups/group_${selectedGroup}.html`;
    }

  const yearButtons = document.querySelectorAll(".year-btn");
  yearButtons.forEach((button) => {
    button.addEventListener("click", handleYearButtonClick);
  });
  