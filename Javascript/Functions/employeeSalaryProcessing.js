// Function to calculate bonus
const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 0.10;
    }
    else {
        return salary * 0.05;
    }
};

// Function to calculate tax
const calculateTax = (salary) => {
    let tax = salary * 0.05;
    return tax;
};

// Function to calculate net salary
const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let bonus = bonusCallback(salary);
    let tax = taxCallback(salary);

    let netSalary = salary + bonus - tax;

    return netSalary;
};

// Function to generate employee payslip
const generatePayslip = (name, salary, callback) => {
    let bonus = calculateBonus(salary);
    let tax = calculateTax(salary);

    let netSalary = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", bonus);
    console.log("Tax: Rs.", tax);
    console.log("Net Salary: Rs.", netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);