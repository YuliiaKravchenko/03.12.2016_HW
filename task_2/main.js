let StudentLU = {
    construstor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        return this;
       },
    
    courses:[{
        title: "html",
        teacher: "Jack",
        length: 50,
        isLearned:1,
        mark:[5,4,5] 
        
    },
        {
        title: "css",
        teacher: "Bob",
        length: 70,
        isLearned:0.5,
        mark: [4,5,4]
    },
        {
        title: "JS",
        teacher: "Jane",
        length: 150,
        isLearned:0.7,
        mark:[4,4,5]  
    }],
    
    getFullName: function(name, surname){
        return `I am ${this.name} ${this.surname}`;
     },
    getAge: function(age){
        return `I am ${this.age} years old`;
    },
    getCourses: function (courses) {
        
    // return this.courses[0].title+','+this.courses[1].title+','+this.courses[2].title;
                 
        let str_courses = '';
        for (var i=0; i<this.courses.length; i++){
            str_courses += this.courses[i].title + " ";
        }  
        return str_courses;
        },
  
    addNewCourse: function(title, teacher, length, isLearned, mark){
           this.courses.push ({title: title, teacher: teacher, length: length, isLearned: isLearned, mark: mark }); 
        return this.courses;
        },
     
    getAvarageMarkByCourse: function (title) {
        let sum = 0
            , r;
        for (var i = 0; i < this.courses.length; i++) {
    
            if (this.courses[i].title === title) {
                if ('mark' in this.courses[i]) {
                    this.courses[i].mark.map(function(el,i,array){
                        sum += el;
                    });
                    r = sum / this.courses[i].mark.length;
                } 
            } 
        }
            return `The avarage mark ${title}: ${r}`;
        },
    
    getAvarageMark: function () {
       let newArr = [],
           s = 0,
           result;
       for (var i = 0; i < this.courses.length; i++) {
           
           if ('mark' in this.courses[i]) {
               newArr = newArr.concat(this.courses[i].mark);
           }
       }
       newArr.forEach(function(el,i,array){
           s += el;
       });
        result = s / newArr.length;
        return `The avarage mark of all courses is ${result}`;
   },
    
    addMark: function(title, mark){
        for (var i = 0; i < this.courses.length; i++){
            console.log(this.courses[i].title);
            if(this.courses[i].title === title){
                this.courses[i].mark.push(mark);
                return `${this.courses[i].title}: ${this.courses[i].mark};`
            } else {
                return `This course doesn't exist`;
            }
        }
    },
    
    getProgress: function () {
        let progress ='';
        for (var i=0; i<this.courses.length; i++){
            progress += this.courses[i].title + ": "+this.courses[i].isLearned+" ";
        }  
        return progress;
        }
};

let Student = Object.create(StudentLU).construstor("Rob", "White", 25);
console.log(Student);
console.log(Student.getFullName());
console.log(Student.getAge());
console.log(Student.getCourses());
console.log(Student.addNewCourse("php","Jack",170,0.1,[1,4,5]));
console.log(Student.getAvarageMarkByCourse("css"));
console.log(Student.getAvarageMark());
console.log(Student.addMark("JS",5));
console.log(Student.getProgress());


    

