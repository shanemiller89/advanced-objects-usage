// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. 
// It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. 
// You provide example values for each one.

// Lightning Exercise 2: Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"
// Use square bracket notation to output the value of those three properties to the console in Chrome.

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

let doctorBill= {
    officeName: "Hendersonville Dentistry",
    streetAddress: "123 Main St.",
    doctorName: "Dr. Joe Shmo",
    patientName: "Shane Miller",
    visitDate: "04-14-2019",
    amountBilled: "$346.12",
    dueDate: "5-14-2019"
};

let dateVisitedValue = doctorBill[dateVisited]

console.log(doctorBill[dateVisited], doctorBill[owed],doctorBill[patient])


console.log(Object.values(doctorBill))

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. 
// Wrap each one in a <span> element.

console.log(Object.keys(doctorBill));

let outputElement = document.querySelector("#output")

for (const key of Object.keys(doctorBill)) {
    outputElement.innerHTML += `<div>${key}</div>`
  }
  