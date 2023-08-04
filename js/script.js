const scheduleData = {
    "1": {
      "COE": ["1CO1", "1CO2"],
      "CSE": ["1CS1", "1CS2"],
    },
    "2": {
      "Group A": ["2EI1", "2EI2", "2EL1", "2EL2", "2ME1", "2ME2", "2ME3", "2EM1", "2EM2", "2EM3", "2MT1", "2CH1", "2BT1", "2BT2", "2BT3", "2BT4", "2BM1", "2CI1", "2CI2", "2CI3", "2BS1", "2BS2", "2BS3"],
      "Group B": ["2CO1", "2CO2", "2CO3", "2CO4", "2CO5", "2CO6", "2CO7", "2CO8", "2CO9", "2CO10", "2CO11", "2CO12", "2CO13", "2CO14", "2CO15", "2CO16", "2CO17", "2CO18", "2CO19", "2CO20", "2CO21", "2CO22", "2CO23", "2CO24", "2CO25", "2CO26", "2CO27", "2CO28", "2CO29", "2CO30", "2CO31", "2CO32", "2CO33", "2CO34", "2CO35", "2CO36"]
    },
    "3": {
      "COE": ["3CO1", "3CO2"],
      "CSE": ["3CS1", "3CS2"],
    },
    
  };

  function populateGroups() {
    const yearDropdown = document.getElementById("year");
    const groupDropdown = document.getElementById("group");
    const subgroupDropdown = document.getElementById("subgroup");
  
    const selectedYear = yearDropdown.value;
    groupDropdown.innerHTML = '<option value="">Select a group</option>';
    subgroupDropdown.innerHTML = '<option value="">Select a subgroup</option>';
  
    if (selectedYear) {
      const groupes = Object.keys(scheduleData[selectedYear]);
      groupes.forEach((group) => {
        const option = document.createElement("option");
        option.text = group;
        groupDropdown.add(option);
      });
    }

    if (selectedYear && selectedGroup) {
        const subgroups = scheduleData[selectedYear][selectedGroup];
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
    const groupDropdown = document.getElementById("group");
    const subgroupDropdown = document.getElementById("subgroup");
  
    const selectedYear = yearDropdown.value;
    const selectedGroup = groupDropdown.value;
  
    // Clear the previous options in the subgroup dropdown
    subgroupDropdown.innerHTML = '<option value="">Select a subgroup</option>';
  
    if (selectedYear && selectedGroup) {
      const subgroups = scheduleData[selectedYear][selectedGroup];
      subgroups.forEach((subgroup) => {
        const option = document.createElement("option");
        option.text = subgroup;
        subgroupDropdown.add(option);
      });
    }
  }

  function downloadSchedule() {
    const year = document.getElementById("year").value;
    const group = document.getElementById("group").value;
    const subgroup = document.getElementById("subgroup").value;
  
    if (year && group && subgroup) {
        if (subgroup === "not_available") {
            // Display a message or modal asking the user to contribute
            alert("The schedule for this subgroup is not available. Please consider contributing by starting a pull request on GitHub.");
          } else {
      // Construct the URL of the ICS file based on user selections
      const icsFileURL = `files/${year}/${subgroup}.ics`;
  
      // Create a temporary link element to trigger the download
      const downloadLink = document.createElement("a");
      downloadLink.href = icsFileURL;
      downloadLink.download = `schedule_${year}_${group}_${subgroup}.ics`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } }
    else {
      alert("Please select a valid year, group, and subgroup.");
    }
  }
  
  
  
  
  
  