function handleYearButtonClick(event) {
    const selectedYear = event.target.getAttribute("data-year");
    if (selectedYear) {
      window.location.href = `years/${selectedYear}/year${selectedYear}.html`;
    }
  }

  function handleGroupButtonClick(event) {
    const selectedGroup = event.target.getAttribute("data-group");
    if (selectedGroup) {
      window.location.href = `group${selectedGroup}.html`;
    }
  }

  const yearButtons = document.querySelectorAll(".year-btn");
  yearButtons.forEach((button) => {
    button.addEventListener("click", handleYearButtonClick);
  });

  const groupButtons = document.querySelectorAll(".group-btn");
  groupButtons.forEach((button) => {
    button.addEventListener("click", handleGroupButtonClick);
  });