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
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });

document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("bonus-parent");
});

document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
});

document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
  });

// function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
