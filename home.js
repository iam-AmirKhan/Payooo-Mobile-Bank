// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("add money btn clicked");
    const validPin = 1234;
    const Bank = document.getElementById("bank").value;
    const AccountNumber = parseInt(
      document.getElementById("account-number").value,
    );
    const AddAmount = parseInt(document.getElementById("add-amount").value);
    const Pin = parseInt(document.getElementById("pin-number").value);

    // console.log(Bank, AccountNumber, AddAmount, Pin);

    if (AccountNumber < 11) {
      alert("please provide a valid number");
      return;
    }
    if (Pin !== validPin) {
      alert("please provide a valid pin");
      return;
    }

    const availableBalance = parseInt(
      document.getElementById("Available-balance").innerText,
    );
    console.log(availableBalance);

    const NewAvailableBalance = availableBalance + AddAmount;

    document.getElementById("Available-balance").innerText =
      NewAvailableBalance;
  });

// cash out money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("clicked");
  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("Available-balance").innerText,
  );

  // console.log(amount, availableBalance);

  const totalNewAvailableBalance = availableBalance - amount;
  console.log(totalNewAvailableBalance);

  document.getElementById("Available-balance").innerText =
    totalNewAvailableBalance;
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");

const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("add-button").classList.remove("border-gray-300","bg-white")
document.getElementById("add-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")



});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("cash-out-button").classList.remove("border-gray-300","bg-white")
document.getElementById("cash-out-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")


  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  
const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("transfer-button").classList.remove("border-gray-300","bg-white")
document.getElementById("transfer-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
   
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("bonus-parent");

  const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("bonus-button").classList.remove("border-gray-300","bg-white")
document.getElementById("bonus-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

});

document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");

  const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("bill-button").classList.remove("border-gray-300","bg-white")
document.getElementById("bill-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");

  const formBtns = document.getElementsByClassName("form-btn")

for (const btn of formBtns){
  btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
  btn.classList.add("border-gray-300","bg-white")
}
document.getElementById("transactions-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")
document.getElementById("transactions-button").classList.remove("border-gray-300","bg-white")

  });

// function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
