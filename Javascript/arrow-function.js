var name = 'Henry';
let employee = {
    name: "ABC",
    case1: () => {
        console.log("hello " + this.name); // 'this' will bind here to name Henry(global)
    },
    case2() {
        console.log("Welcome to " + this.name); // 'this' bind here to name ABC
    }
};
employee.case1();
employee.case2();
//output : hello Henry
//Welcome to ABC
