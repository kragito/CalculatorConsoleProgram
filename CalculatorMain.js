class rentDetails { 
    constructor(initialRentCost, durationOfStay, AnnualRentIncrease) {
        this.initialRentCost = initialRentCost;
        this.durationOfStay = durationOfStay;
        this.annualRentIncrease = AnnualRentIncrease;
    }
    getinitalRentCost() {
        return this.initialRentCost
    }
    getDuration() {
        return this.durationOfStay
    }
    getAnnualRentIncrease(){
        return this.annualRentIncrease
    }
    setinitalRentCost(initialRentCost) {
        this.initialRentCost = initialRentCost
    }
    setDuration(durationOfStay) {
        this.durationOfStay = durationOfStay
    }
    setAnnualRentIncrease(annualRentIncrease) {
        this.annualRentIncrease = annualRentIncrease
    }
}
var rent = new rentDetails

class propertyDetails { //MCQ which stores the questions, choices, answers and category
    constructor(typeOfProperty, costOfProperty, size, downPayment, loanType, optionFee, optionExerciseFee, hdbApplicationFee, interestRate, loanTenure ) {
        this.typeOfProperty = typeOfProperty;
        this.costOfProperty = costOfProperty
        this.downPayment = downPayment;
        this.loanType = loanType;
        this.optionFee = optionFee;
        this.optionExerciseFee = optionExerciseFee;
        this.hdbApplicationFee = hdbApplicationFee;
        this.interestRate = interestRate
        this.loanTenure = loanTenure
    }
    getTypeOfProperty() {
        return this.typeOfProperty
    }
    getCostOfProperty(){
        return this.costOfProperty
    }
    getDownPayment() {
        return this.downPayment
    }
    getLoanType(){
        return this.loanType
    }
    getOptionFee(){
        return this.optionFee
    }
    getOptionExerciseFee(){
        return this.optionExerciseFee
    }
    getHDBApplicationFee(){
        return this.hdbApplicationFee
    }
    getInterestRate(){
        return this.interestRate
    }
    getLoanTenure(){
        return this.loanTenure
    }
    setTypeOfProperty(typeOfProperty) {
        this.typeOfProperty = typeOfProperty
    }
    setCostOfProperty(CostOfProperty) {
        this.costOfProperty = costOfProperty
    }
    setDownPayment(downPayment) {
        this.downPayment = downPayment
    }
    setLoanType(loanType){
        this.loanType = loanType
    }
    setOptionFee(optionFee){
        this.optionFee = optionFee
    }
    setOptionExerciseFee(optionExerciseFee){
        this.optionExerciseFee = optionExerciseFee
    }
    setHDBApplicationFee(hdbApplicationFee){
        this.hdbApplicationFee = hdbApplicationFee
    }
    setInterestRate(interestRate){
        this.interestRate = interestRate
    }
    setLoanTenure(loanTenure){
        this.loanTenure = loanTenure
    }

    
}
var property = new propertyDetails
var readline = require('readline-sync');
//Property()
//Rent()
Menu()
function Property() {
    console.log("----Start of Calculator----")
    //typeOfProperty = readline.question("Please Enter your name: ");
    var selectedCAT = readline.questionInt("What is the Property Type?" +
        "\n(1) 1 room HDB" + "\n(2) 2 room HDB" + "\n(3) 3 room HDB" + "\n(4) 4 room HDB"+ "\n(5) 5 room HDB"+ "\n(6) Condominium"+ "\n(7) Private Property"+ "\n>> ");
    if (selectedCAT<=7 && selectedCAT>0){ //to make sure that user cannot input an invalid number for category
    switch (selectedCAT) { //user input from above to use as variable in switch case 
        case 1: console.log("You have selected category (1) 1 room HDB");
        property.setTypeOfProperty("1 Room HDB")
        property.setDownPayment()
            break;
        case 2: console.log("You have selected category (2) 2 room HDB");
        property.setTypeOfProperty("2 Room HDB")
            break;
        case 3: console.log("You have selected category (3) 3 room HDB");
        property.setTypeOfProperty("3 Room HDB")
            break;
        case 4: console.log("You have selected category (4) 4 room HDB");
        property.setTypeOfProperty("4 Room HDB")
            break;
        case 5: console.log("You have selected category (5) 5 room HDB");
        property.setTypeOfProperty("5 Room HDB")
            break;
        case 6: console.log("You have selected category (6) Condominium");
        property.setTypeOfProperty("Condominium")
            break;
        case 7: console.log("You have selected category (7) Private Property");
        property.setTypeOfProperty("Private Property")
            break;
        default: 
        }
    } 
    else {
        console.log("Please input a valid category!");
        Menu(); //brings user back to the start
    }
}
function Fees(){
    costArray = []
    costOfProperty = readline.questionInt("What is the cost of Property? " +"\n:$");
    property.setCostOfProperty(costOfProperty)
    loanType = readline.questionInt("What type of loan?: " + "\n(1) HDB Concessionary Loan"+ "\n(2) Private Bank Loan" +  "\n>>");
        if(loanType==1){
        property.setLoanType("HDB Concessionary Loan")
        property.setDownPayment(costOfProperty/10)
        property.setInterestRate(2.6)
        }else if(loanType==2){
        property.setLoanType("Private Bank Loan")
        property.setDownPayment(costOfProperty/4)
        interestRate = readline.questionInt("What is the interest rate of Private Bank?" +"\n:");
        property.setInterestRate(interestRate)
        }else{
            console.log("Please input a valid option!")
        }
    loanTenure = readline.questionInt("What is the loanTenure of Property? ( In Years )" +"\n:");
    property.setLoanTenure(loanTenure)
    for(i=0; i<12*loanTenure; i++){
        //need help with the math here... :(
    
    }
    console.log("Cost of Property: $" + property.getCostOfProperty())
    console.log("Cost of Down Payment: $" + property.getDownPayment())
}
    

function Rent(){
    rentArray = []
    initialRentCost = readline.questionInt("What is the cost of Rent: " +"\n$");
    rent.setinitalRentCost(initialRentCost)
    //console.log(rent.getinitalRentCost())
    durationOfStay = readline.questionInt("How long are you staying? (In Years): ");
    rent.setDuration(durationOfStay)
    //console.log(rent.getDuration())
    annualRentIncrease = readline.questionInt("Annual Rent Increase (In %): ");
    rent.setAnnualRentIncrease(annualRentIncrease)
    //console.log(rent.getAnnualRentIncrease())
    for(i=0; i<rent.getDuration(); i++) {
                rentArray[i] = 12*(initialRentCost*(1 + (annualRentIncrease/100))**i)
                console.log(rentArray[i].toFixed(2))
            } 
            var _ = require('lodash');
            var sum = _.sum(rentArray);
            var Sum = sum.toFixed(2);
        console.log("Total Amount of rent payable after " + rent.getDuration() + " years is: $" + Sum)
}

function Menu(){
    var rentOrBuy = readline.questionInt("Are you Buying or Renting?" +
    "\n(1) Rent" + "\n(2) Buy" + "\n:")
    if (rentOrBuy<3){ //to make sure that user cannot input an invalid number for category
        switch (rentOrBuy) { //user input from above to use as variable in switch case 
            case 1: console.log("You have selected Rent");
            Rent()
                break;
            case 2: console.log("You have selected Buying");
            Property()
            Fees()
                break;
        }
    }
}
