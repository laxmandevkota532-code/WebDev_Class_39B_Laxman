// Function to get food price
const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

// Function to calculate service charge
const calculateServiceCharge = (total) => {
    let serviceCharge = total * 0.05;
    return serviceCharge;
};

// Function to calculate food order amount
const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0) {
        return -1;
    }
    let foodAmount = price * quantity;

    return callback(foodAmount);
};

// Function to generate customer receipt
const generateReceipt = (customerName, foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0) {
        console.log("Invalid food item!");
        return;
    }

    let foodAmount = price * quantity;
    let serviceCharge = calculateServiceCharge(foodAmount);
    let finalAmount = callback(foodName, quantity, calculateServiceCharge);

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);