let inflation = 1.5;

let p = 30000; // Principal
let o = p // Outstanding amount
let i = 3; // Interest rate
let t = 4; // Tenure

let utility = 100 // Monthly utility bill
let total_utility = 0; // Total utility bill

let conservancy = 80 // Monthly conservacy charge
let total_conservancy = 0;

let fire = 5; // 5 Years fire insurance
let total_fire = fire * Math.ceil(t/5);

let home = 100; // Annual Home insurance
let total_home = home * t;

let renovation = 50000; // Renovation cost

let monthly_payment = (p * ((i/100)/12) * ((1 + ((i/100)/12)) ** (12 * t))) / (((1 + ((i/100)) / 12) ** (12 * t)) - 1)
let yearly_payment = monthly_payment * 12;
let total_payment = yearly_payment * t;

let mortgage_insurance = 0.1 * yearly_payment * t;

for(let k = t; k > 0; k--) {
    let yearly = 0;

    for(let j = 0; j < 12; j++){

        //Mortgage
        let interest = o * (i/100) / 12;
        let monthly_principal = monthly_payment - interest;

        console.log("WEEK " + (t - k + 1)* (j + 1) + " interest");
        console.log(interest);
        console.log();

        o -= monthly_principal;
        yearly += interest;

        //Utility bill
        total_utility += utility;

        //Conservancy charge
        total_conservancy += conservancy

    }
    console.log("Year " + (t - k + 1) + " total interest");
    console.log(yearly);
    console.log();

}

console.log("Monthly payment");
console.log(monthly_payment);

console.log("\n" + "Total interest");
console.log(total_payment - p);

console.log("\n" + "Total mortgage");
console.log(total_payment);
