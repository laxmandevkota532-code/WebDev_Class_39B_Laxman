// Function to validate withdrawal
const validateWithdrawal = (amount, balance) => {
    if (amount > balance) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else {
        return true;
    }
};

// Function to withdraw money
const withdrawMoney = (amount, balance, callback) => {
    console.log("Account Balance: Rs.", balance);
    console.log("Withdrawal Amount: Rs.", amount);

    if (callback(amount, balance)) {
        let fee = 25;
        balance = balance - amount - fee;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs.", fee);
        console.log("Remaining Balance: Rs.", balance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid withdrawal amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);