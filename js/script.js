const scheduleData = {
    "1": {
      "Group A": ["1CO1", "1CO2", "1CO3", "1CO4", "1CO5", "1CO6", "1CO7", "1CO8", "1CO9", "1CO10", "1CO11", "1CO12", "1CO13", "1CO14", "1CO15", "1CO16", "1CO17", "1CO18", "1CO19", "1CO20", "1CO21", "1CO22", "1CO23", "1CO24", "1CO25", "1CO26", "1CO27", "1CO28", "1CO29", "1CO30", "1CO31", "1CO32", "1CO33", "1CO34", "1CO35", "1CO36", "1CO37", "1CO38", "1CS1", "1CS2", "1CS3", "1CS4", "1CS5", "1CS6", "1CS7", "1CS8", "1CS9", "1CS10"],
      "Group B": ["1EI1", "1EI2", "1EL1", "1EL2", "1ME1", "1ME2", "1ME3", "1ME4", "1ME5", "1ME6","1MT1","1MT2", "1CH1", "1CE1", "1CE2", "1CM1", "1CM2", "1EC1", "1EC2", "1EC3", "1EC4", "1EC5", "1EC6", "1EC7", "1EC8", "1EC9", "1EC10", "1EM1", "1EM2", "1EM3", "1BT1", "1BT2", "1BT3", "1BT4", "1BM1", "1NC1", "1NC2", "1NC3", "1NC4", "1NC5", "1NC6", "1NC7", "1NC8", "1NC9", "1NC10", "1NC11", "1NC12", "1CSBS1", "1CSBS2", "1CSBS3"],
    },
    "2": {
      "Group A": ["2EI1", "2EI2", "2EL1", "2EL2", "2ME1", "2ME2", "2ME3", "2EM1", "2EM2", "2EM3", "2MT1", "2CH1", "2BT1", "2BT2", "2BT3", "2BT4", "2BM1", "2CI1", "2CI2", "2CI3", "2BS1", "2BS2", "2BS3"],
      "Group B": ["2CO1", "2CO2", "2CO3", "2CO4", "2CO5", "2CO6", "2CO7", "2CO8", "2CO9", "2CO10", "2CO11", "2CO12", "2CO13", "2CO14", "2CO15", "2CO16", "2CO17", "2CO18", "2CO19", "2CO20", "2CO21", "2CO22", "2CO23", "2CO24", "2CO25", "2CO26", "2CO27", "2CO28", "2CO29", "2CO30", "2CO31", "2CO32", "2CO33", "2CO34", "2CO35", "2CO36", "2CS1", "2CS2", "2CS3", "2CS4", "2CS5", "2CS6", "2CS7", "2CS8", "2CS9", "2CS10", "2EC1", "2EC2", "2EC3", "2EC4", "2EC5", "2EC6", "2EC7", "2EC8", "2EC9", "2EC10", "2NC1", "2NC2", "2NC3", "2NC4", "2NC5", "2NC6", "2NC7", "2NC8", "2NC9", "2NC10", "2NC11", "2NC12"]
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

  async function downloadSchedule() {
    // Get the selected values from the dropdowns
    var year = document.getElementById("year").value;
    var branch = document.getElementById("group").value;
    var subgroup = document.getElementById("subgroup").value;

    var hasICSFile = await checkIfICSFileExists(year, subgroup);

    if (hasICSFile) {
      var downloadLink = generateICSDownloadLink(year, subgroup);
      window.open(downloadLink, '_blank');
    } else {
      alert("Sorry, the schedule for the selected subgroup is not available.");
    }
  }

  async function checkIfICSFileExists(year, subgroup) {
    const icsFileURL = `/../files/${year}/${subgroup}.ics`;
  
    try {
      const response = await fetch(icsFileURL);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  function generateICSDownloadLink(year, subgroup) {
    const downloadLink = `/../files/${year}/${subgroup}.ics`;
    return downloadLink;
  }
  
  
  
  