function countComm() {
  let aName = document.getElementById("aName").value;
  let aNum = document.getElementById("aNum").value;
  let aCity = document.getElementById("aCity").value;
  let otherPhone = document.getElementById("otherPhone").value;
  let otherAccessories = document.getElementById("otherAccessories").value;
  let commReceived = document.getElementById("commReceived").value;
  let pendingCommission = document.getElementById("pendingCommission").value;

  let numFormat = /^[a-zA-Z]{2}[0-9]{6}$/;

  if (aName == "") {
    document.getElementById("errorMsg").innerHTML = "Please enter a name";
    return false;
  } else if (aNum == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please enter phone number in correct format.";
    return false;
  } else if (aCity == "") {
    document.getElementById("errorMsg").innerHTML =
      "Please enter the City Name";
    return false;
  } else if (
    isNaN(otherPhone) ||
    isNaN(otherAccessories) ||
    isNaN(commReceived) ||
    otherPhone == "" ||
    commReceived == ""
  ) {
    document.getElementById("errorMsg").innerHTML =
      "Enter a valid Input to Continue! (*) are mandatory Input Feild";
    return false;
  }
  let totalCommission;

  if (otherAccessories == "") {
    totalCommission = parseFloat(otherPhone);
  } else {
    totalCommission = parseFloat(otherPhone) + parseFloat(otherAccessories);
  }
  let totalSale = 0;
  if (totalCommission < 10000) {
    totalSale = totalCommission * 0.10;
  } else if (totalCommission >= 10000 && totalCommission <= 20000) {
    totalSale = totalCommission * 0.15;
  } else if (totalCommission > 20000) {
    totalSale = totalCommission * 0.20;
  } else {
    document.getElementById("errorMsg").innerHTML = "Input is Invalid.";
  }

  pendingCommission = totalCommission - parseFloat(commReceived);

  document.getElementById("aName").innerHTML = aName;
  document.getElementById("aNum").innerHTML = aNum;
  document.getElementById("aCity").innerHTML = aCity;
  document.getElementById("totalSale").innerHTML = "$" + totalSale.toFixed(2);
  document.getElementById("totalCommission").innerHTML =
    "$" + totalCommission.toFixed(2);
  document.getElementById("commReceived").innerHTML = "$" + commReceived;
  document.getElementById("pendingCommission").innerHTML =
    "$" + pendingCommission.toFixed(2);

  return false;
}
