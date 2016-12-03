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
   /* 
    addNewCourse: function(title, teacher, lenght, isLearned, mark){
            StudentLU.constructor.apply(this, arguments);
             this.title = title;
             this.teacher = teacher;
             this.lenght = lenght;
             this.isLearned = isLearned;
             this.mark = []            
        },
     */
    getAvarageMarkByCourse: function (courses) {
         var sum = 0,
             r;
         for (var i = 0; i <this.courses.length; i++) {
             sum += this.courses[i].mark;
         }
         r = sum / this.courses.length;
         return r;
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
//console.log(Student.addNewCourse("php","Jack",170,0.1,[]));
console.log(Student.getAvarageMarkByCourse());
console.log(Student.getProgress());


