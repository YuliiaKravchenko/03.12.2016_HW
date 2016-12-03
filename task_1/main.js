let obj = {
    num: 1.24,
    str: "not very long string",
    f() {
        return this.str.split(" ")
    },
    arr: ["some", "array", {
        someProp: "value"
    }],
    prop: {
        key: 1
    },
    empty: null,
    last: 0
};

/*
Написать функцию, передав в которую исходный объект, мы получим новый объект вида:
{
  “количество собственных свойств”: 7,
  propTypes: [“number”, “string”, “function”, …, “number”],
  propNames: [“num”, “str”, …, “last”]
}
*/

function calculate(object) {
    let n = 0
        , type = []
        , objNew = new Object();
    for (var key in object) {
        n++;
        type = typeof (object[key]);
        objNew["propTypes"] = type.toUpperCase();
    }
    objNew["количество собственных свойств"] = n.toFixed(2);
    objNew["propNames"] = Object.keys(obj);
   
    console.log(objNew.propNames);
    console.log(objNew.propTypes);
    console.log(objNew["количество собственных свойств"]);
    console.log(objNew);
    
    Object.seal(objNew);
}
calculate(obj);