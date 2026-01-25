document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    const validPin = 1234;
    const Bank = document.getElementById("bank").value;
    const AccountNumber = parseInt(
      document.getElementById("account-number").value,
    );
    const AddAmount = parseInt(document.getElementById("add-amount").value);
    const Pin = parseInt(document.getElementById("pin-number").value);

    console.log(Bank, AccountNumber, AddAmount, Pin);

    const availableBalance = parseInt(
      document.getElementById("Available-balance").innerText,
    );
    console.log(availableBalance);

    const NewAvailableBalance = availableBalance + AddAmount;
    document.getElementById("Available-balance").innerText =
      NewAvailableBalance;

    if (AccountNumber < 11) {
      alert("please provide a valid number");
      return;
    }
    if (Pin !== validPin) {
      alert("please provide a valid pin");
      return;
    }
  });
