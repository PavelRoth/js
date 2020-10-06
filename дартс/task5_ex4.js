/* function bruh() {
    console.log('sap bruh', this)
}

const iam = {
    name: 'Pasha',
    age: 19,
    sayBruh: () => bruh,
    sayBruhToTeacher: () => bruh.bind(document)(),
    logInfo: function(position, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Positiom is ${position}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd(`That's all!`)
    }

}

const teacher = {
    name: 'idk',
    age: '1dkToo'
}

const teacherInfo = iam.logInfo.bind(teacher, 'middleJsDeveloper', '+38-056-352-42-40')
teacherInfo() */


/* Битва за респект(за звание самого крутого вэбсерфера эвер) */

var person = {
    lastName: "Rot"
  };
  
  function fullName(salutaion, firstName) {
    console.log(salutaion, firstName, this.lastName);
  }
  
  var bindFullName = fullName.bind(person, "Mr");
  
  bindFullName("Pavel");

  Function.prototype.myOwnBind = function(newThis) {
    if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    var boundTargetFunction = this;
    var boundArguments = Array.prototype.slice.call(arguments, 1);
    return function boundFunction() {
      var targetArguments = Array.prototype.slice.call(arguments);
      return boundTargetFunction.apply(
        newThis,
        boundArguments.concat(targetArguments)
      );
    };
  };
