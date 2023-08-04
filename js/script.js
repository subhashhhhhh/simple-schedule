const scheduleData = {
    "1": {
      "COE": ["1CO1", "1CO2"],
      "CSE": ["1CS1", "1CS2"],
    },
    "2": {
      "COE": ["2CO1", "2CO2"],
      "CSE": ["2CS1", "2CS2"],
    },
    // Add data for other years as needed
  };

  function populateBranches() {
    const yearDropdown = document.getElementById("year");
    const branchDropdown = document.getElementById("branch");
    const subgroupDropdown = document.getElementById("subgroup");
  
    const selectedYear = yearDropdown.value;
    branchDropdown.innerHTML = '<option value="">Select a branch</option>';
    subgroupDropdown.innerHTML = '<option value="">Select a subgroup</option>';
  
    if (selectedYear) {
      const branches = Object.keys(scheduleData[selectedYear]);
      branches.forEach((branch) => {
        const option = document.createElement("option");
        option.text = branch;
        branchDropdown.add(option);
      });
    }

    if (selectedYear && selectedBranch) {
        const subgroups = scheduleData[selectedYear][selectedBranch];
        if (subgroups.length > 0) {
          subgroups.forEach((subgroup) => {
            const option = document.createElement("option");
            option.value = subgroup;
            option.text = subgroup;
            subgroupDropdown.add(option);
          });
        } else {
          // If there are no available subgroups, show a "Not Available" option
          const notAvailableOption = document.createElement("option");
          notAvailableOption.value = "not_available";
          notAvailableOption.text = "Not Available";
          subgroupDropdown.add(notAvailableOption);
        }
      }
  }
  
  function populateSubgroups() {
    const yearDropdown = document.getElementById("year");
    const branchDropdown = document.getElementById("branch");
    const subgroupDropdown = document.getElementById("subgroup");
  
    const selectedYear = yearDropdown.value;
    const selectedBranch = branchDropdown.value;
  
    // Clear the previous options in the subgroup dropdown
    subgroupDropdown.innerHTML = '<option value="">Select a subgroup</option>';
  
    if (selectedYear && selectedBranch) {
      const subgroups = scheduleData[selectedYear][selectedBranch];
      subgroups.forEach((subgroup) => {
        const option = document.createElement("option");
        option.text = subgroup;
        subgroupDropdown.add(option);
      });
    }
  }

  function downloadSchedule() {
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;
    const subgroup = document.getElementById("subgroup").value;
  
    if (year && branch && subgroup) {
        if (subgroup === "not_available") {
            // Display a message or modal asking the user to contribute
            alert("The schedule for this subgroup is not available. Please consider contributing by starting a pull request on GitHub.");
          } else {
      // Construct the URL of the ICS file based on user selections
      const icsFileURL = `files/${year}/${branch}/${subgroup}.ics`;
  
      // Create a temporary link element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = icsFileURL;
      downloadLink.download = `schedule_${year}_${branch}_${subgroup}.ics`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } }
    else {
      alert("Please select a valid year, branch, and subgroup.");
    }
  }
  
  
  
  
  
  