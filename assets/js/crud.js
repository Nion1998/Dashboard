 //Crud oparetion start 

 let data = [];

console.log(data);

function readAll() {
  
  var tabledata = document.querySelector(".data-table");

  var object = localStorage.getItem("data");
  var objectdata = JSON.parse(object);
  console.log(objectdata);

  var elements = '';

  objectdata.map(record => {
    elements += `<tr style="color:#2F2F2F !important;">
      <td>${record.hours}</td>
      <td>${record.adults}</td>
      <td>${record.children}</td>
      <td><span style="padding-right:.5px">$</span>${record.total}</td>
      <td>${record.addedOn}</td>
      <td > <span class="${record.status === 'Confirmed' ? 'Confirmed' : 'Pending'}">${record.status} </span></td>
      <td>
      
      <a class="text-info" onclick="editForm(${record.id})" data-bs-toggle="modal"
      data-bs-target="#edit"><i class="fas fa-edit"><a>
      <a class="text-danger" onclick="deleteRecord(${record.id})"><i class="fas fa-trash-alt"></a>

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

  // delete function
  function editForm(id) {
    console.log(id)
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const record = data.find(record => record.id === id);
    if (!record) {
      console.error("Record not found");
      return;
    }
    document.getElementById("hoursInput").value = record.hours;
    document.getElementById("adultsInput").value = record.adults;
    document.getElementById("childrenInput").value = record.children;
    document.getElementById("totalInput").value = record.total;
    document.getElementById("addedOnInput").value = record.addedOn;
    document.getElementById("statusInput").value = record.status;
    document.getElementById("edit").removeEventListener("submit", addRecord);
    document.getElementById("edit").addEventListener("submit", function(event) {
      event.preventDefault();
      updateRecord(id);
    });
    document.querySelector("button[type=submit]").innerText = "Update";
  }
  
  function updateRecord(id) {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const record = data.find(record => record.id === id);
    if (!record) {
      console.error("Record not found");
      return;
    }
    record.hours = document.getElementById("hoursInput").value;
    record.adults = document.getElementById("adultsInput").value;
    record.children = document.getElementById("childrenInput").value;
    record.total = document.getElementById("totalInput").value;
    record.status = document.getElementById("statusInput").value;
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "/booking.html";
  }


  // delete
  function deleteRecord(id) {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const newData = data.filter(record => record.id !== id);
    localStorage.setItem("data", JSON.stringify(newData));
    readAll();
  }


  // search function
  function searchRecord() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector(".data-table");
    tr = table.getElementsByTagName("tr");
    
    // Loop through all table rows, and hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (var j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  
  // crud oparetion end