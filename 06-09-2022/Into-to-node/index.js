class person {
  constructor(name, age) {
    this.studentName = name;
    this.stdentAge = age;
    console.log("This is constructor");
  }

  hello() {
    console.log(
      `Student name is ${this.studentName} age student age is ${this.stdentAge}`
    );
  }
}

module.exports = new person("Debashis", 45);
