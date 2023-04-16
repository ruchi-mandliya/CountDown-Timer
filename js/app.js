const endDate = "20 April 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; //coverting miliseconds to seconds
  console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //converting seconds to minuts and then hours to get left remaining days
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
