//Problem 1
let sam = {
    "firstName": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raiseEligible": true
}

let mary = {
    "firstName": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raiseEligible": true
}

let bill = {
    "firstName": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raiseEligible": false
}

console.log("1:");
console.log(sam);
console.log(mary);
console.log(bill);

//Problem 2
let company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [sam, mary, bill]
}

console.log("2:");
console.log(company);

//Problem 3
function newHire(comp) {

    let anna = {};
    anna.firstName = "Anna";
    anna.department = "Tech";
    anna.designation = "Executive";
    anna.salary = 25600;
    anna.raiseEligible = false;

    comp.employees.push(anna);
}

newHire(company);
console.log("3:");
console.log(company);

//Problem 4
function totalSalary(comp) {
    let salary = 0;

    for(employee of comp.employees)
        salary += employee.salary;

    return salary;
}

console.log("4:");
console.log(totalSalary(company));

//Problem 5
function raise(comp) {
    for(employee of comp.employees) {
        if(employee.raiseEligible)
            employee.salary += .1*employee.salary;
        employee.raiseEligible = false;
    }
}

raise(company);
console.log("5:");
console.log(company.employees);

//Problem 6
function workFromHome(comp) {
    for(employee of comp.employees) {
        if(employee.firstName == 'Anna' || employee.firstName == 'Sam')
            employee.wfh = true;
        else
            employee.wfh = false;
    }
}

workFromHome(company);
console.log("6:");
console.log(company.employees);