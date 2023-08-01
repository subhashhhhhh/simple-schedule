// Function to handle form submission
document.getElementById("scheduleForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get selected values from the form
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;
    const subgroup = document.getElementById("subgroup").value;
  
    // Check if the schedule is available for the selected subgroup
    if (isScheduleAvailable(year, branch, subgroup)) {
      // Call the functions to add to Google Calendar or download ICS file
      addToGoogleCalendar(year, branch, subgroup);
      downloadICSFile(year, branch, subgroup);
    } else {
      // Display "Not yet available" message and link to GitHub repo
      displayNotAvailableMessage(subgroup);
    }
  });
  
  // Function to check if the schedule is available for the selected subgroup
  function isScheduleAvailable(year, branch, subgroup) {
    // Implement your logic here to check if the schedule is available for the given subgroup
    // For this example, we'll assume that subgroups "CS1" and "CS2" are available and the rest are not
    return subgroup === "CS1" || subgroup === "CS2";
  }
  
  // Function to add the schedule to Google Calendar
  function addToGoogleCalendar(year, branch, subgroup) {
    // Implement your logic to add the schedule to Google Calendar using the Google Calendar API or other relevant methods
    // For this example, let's assume an alert for demonstration purposes
    alert(`Schedule for Year ${year}, Branch ${branch}, Subgroup ${subgroup} has been added to Google Calendar.`);
  }
  
  // Function to download the ICS file
  function downloadICSFile(year, branch, subgroup) {
    // Implement your logic to generate and download the ICS file
    // For this example, let's assume an alert for demonstration purposes
    alert(`ICS file for Year ${year}, Branch ${branch}, Subgroup ${subgroup} has been downloaded.`);
  }
  
  // Function to display "Not yet available" message and link to GitHub repo
  function displayNotAvailableMessage(subgroup) {
    const notAvailableMsg = `Schedule for Subgroup ${subgroup} is not yet available.`;
    const githubLink = "https://github.com/your-organization/your-repo"; // Replace with your GitHub repository link
  
    // Create a new paragraph element for the message
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = notAvailableMsg;
  
    // Create a new anchor (link) element for the GitHub repo
    const githubAnchor = document.createElement("a");
    githubAnchor.textContent = "Add Schedule for this Subgroup (GitHub Repo)";
    githubAnchor.href = githubLink;
    githubAnchor.target = "_blank"; // Open link in a new tab
  
    // Append the elements to the container
    const container = document.querySelector(".container");
    container.appendChild(messageParagraph);
    container.appendChild(githubAnchor);
  }
  
