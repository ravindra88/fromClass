// class Employee {
//     private name: string;

//     constructor(n = "NA") {
//         this.name = n;
//     }

//     getName(){
//         return this.name;
//     }

//     setName(n: string) {
//         this.name = n;
//     }
// }

// var e1 = new Employee();

// var e2 = new Employee("Manish");

// //------------------------------------------------ Control Access using Properties
// class Employee {
//     private name: string;
//     private age: number;

//     constructor(n = "NA") {
//         this.name = n;
//     }

//     get Name() {
//         return this.name;
//     }

//     set Name(n: string) {
//         if (n)
//             throw "Name connot be empty..."
//         this.name = n;
//     }

//     get Age() {
//         return this.age;
//     }

//     set Age(value: number) {
//         this.age = value;
//     }
// }

// var e1 = new Employee();
// e1.Name = "";

//------------------------------------------------ Parameter Members
// class Employee {
//     constructor(private name = "NA", private age = 0) { }

//     get Name() {
//         return this.name;
//     }

//     set Name(n: string) {
//         if (n)
//             throw "Name connot be empty..."
//         this.name = n;
//     }

//     get Age() {
//         return this.age;
//     }

//     set Age(value: number) {
//         this.age = value;
//     }
// }

// var e1 = new Employee("Manish", 34);

//------------------------------------------------ Static Readonly
class BankAccount {
    private static bankName: string = "ICICI";

    // private readonly accNumber: number;
    // constructor(accNumber: number) {
    //     this.accNumber = accNumber;
    // }

    constructor(private readonly accNumber: number) { }

    get BankName(): string {
        return BankAccount.bankName;
    }

    get AccNumber(): number {
        return this.accNumber;
    }
}

var a1 = new BankAccount(1);
console.log(a1.BankName);
console.log(a1.AccNumber);

var a2 = new BankAccount(2);
console.log(a2.BankName);
console.log(a2.AccNumber);
