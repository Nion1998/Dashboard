 //Crud oparetion start 

 let data = [];

console.log(data);

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  var tabledata = document.querySelector(".data-table");

  var object = localStorage.getItem("object");
  var objectdata = JSON.parse(object);
  console.log(objectdata);

  var elements = '';

  objectdata.map(record => {
    elements += `<tr>
      <td>${record.hours}</td>
      <td>${record.adults}</td>
      <td>${record.children}</td>
      <td>${record.total}</td>
      <td>${record.added_On}</td>
      <td>${record.status}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>`;
  });

  tabledata.innerHTML = elements;
}

readAll();

function addRecord(event) {
    event.preventDefault();
  
    // Get the form input values
    const hours = document.getElementById("hoursInput").value;
    const adults = document.getElementById("adultsInput").value;
    const children = document.getElementById("childrenInput").value;
    const total = document.getElementById("totalInput").value;
    const addedOn = document.getElementById("addedOnInput").value;
    const status = document.getElementById("statusInput").value;
  
    // Create a new record object
    const newRecord = {
      id: Date.now(),
      hours,
      adults,
      children,
      total,
      addedOn,
      status
    };
  
    // Add the new record to the data array or storage
    // For example, you can use localStorage to store the data:
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(newRecord);
    localStorage.setItem("data", JSON.stringify(data));
  
    // Redirect to the data table page
    window.location.href = "/booking.html";
  }
  
  // Listen for form submission
  document.getElementById("newRecordForm").addEventListener("submit", addRecord);
  

  // crud oparetion end