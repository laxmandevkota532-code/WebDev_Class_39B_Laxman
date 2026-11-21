// Function to get ticket price based on age
const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
};

// Function to calculate total amount
const calculateTotal = (price, quantity) => {
    let total = price * quantity;
    return total;
};

// Function to apply discount
const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total * 0.10;
    }
    else {
        return 0;
    }
};

// Function to process ticket booking
const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);

    let total = calculateTotal(price, quantity);

    let discount = callback(total, quantity);

    let finalAmount = total - discount;

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);