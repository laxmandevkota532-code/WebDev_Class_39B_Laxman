// Function to calculate discount percentage
const calculateDiscount = (amount) => {
    if (amount >= 5000) {
        return 20;
    }
    else if (amount >= 3000) {
        return 15;
    }
    else if (amount >= 1000) {
        return 10;
    }
    else {
        return 0;
    }
};

// Function to calculate final price
const calculateFinalPrice = (amount, discount) => {
    let discountAmount = (amount * discount) / 100;
    let finalPrice = amount - discountAmount;

    return finalPrice;
};

// Function to process checkout
const checkout = (customerName, amount, callback) => {
    let discount = calculateDiscount(amount);
    let finalPrice = callback(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Price: Rs.", finalPrice);
};

// Calling the function
checkout("Nikesh", 6000, calculateFinalPrice);