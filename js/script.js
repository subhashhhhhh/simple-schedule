const yearOptions = [
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
];

const branchOptions = [
  { value: "CSE", label: "Computer Science and Engineering (CSE)" },
  { value: "ECE", label: "Electronics and Communication Engineering (ECE)" },
];

const subgroupOptions = {
  CSE: [
    { value: "CS1", label: "CS1" },
    { value: "CS2", label: "CS2" },
  ],
  ECE: [
    { value: "ECE1", label: "ECE1" },
    { value: "ECE2", label: "ECE2" },
  ],
};

const yearDropdown = document.getElementById("year");
yearOptions.forEach((yearOption) => {
  const option = new Option(yearOption.label, yearOption.value);
  yearDropdown.appendChild(option);
});

// Function to populate the branch dropdown based on the selected year
function populateBranchDropdown(year) {
  const branchDropdown = document.getElementById("branch");
  branchDropdown.innerHTML = "";

  const filteredBranchOptions = branchOptions.filter((branchOption) => {
    return branchOption.value.startsWith(year);
  });

  filteredBranchOptions.forEach((branchOption) => {
    const option = new Option(branchOption.label, branchOption.value);
    branchDropdown.appendChild(option);
  });

  branchDropdown.disabled = false;
  document.getElementById("subgroup").disabled = true;
}

// Function to populate the subgroup dropdown based on the selected branch
function populateSubgroupDropdown(branch) {
  const subgroupDropdown = document.getElementById("subgroup");
  subgroupDropdown.innerHTML = "";

  const subgroupOptionsForBranch = subgroupOptions[branch] || [];

  subgroupOptionsForBranch.forEach((subgroupOption) => {
    const option = new Option(subgroupOption.label, subgroupOption.value);
    subgroupDropdown.appendChild(option);
  });

  subgroupDropdown.disabled = false;
}

yearDropdown.addEventListener("change", function () {
  const selectedYear = this.value;
  if (selectedYear !== "") {
    populateBranchDropdown(selectedYear);
  } else {
    document.getElementById("branch").disabled = true;
    document.getElementById("subgroup").disabled = true;
  }
});

document.getElementById("branch").addEventListener("change", function () {
  const selectedBranch = this.value;
  if (selectedBranch !== "") {
    populateSubgroupDropdown(selectedBranch);
  } else {
    document.getElementById("subgroup").disabled = true;
  }
});

