const NUM_COURSES = 10
const MIN_COURSE_SIZE = 10
const MAX_COURSE_SIZE = 25
const MIN_COURSE_UNITS = 1
const MAX_COURSE_UNITS = 5

const NUM_STUDENTS = 25
const MIN_NUM_UNITS = 12
const MAX_NUM_UNITS = 16
const MIN_NUM_COURSES = 3
const MAX_NUM_COURSES = 6
const PREFS_LEN = 10

const MIN_TIME = 0
const MAX_TIME = 100

function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Course {
    constructor(id) {
        this.id = id;
        this.size = 0;
        this.cap = randint(MIN_COURSE_SIZE, MAX_COURSE_SIZE);
        this.units = randint(MIN_COURSE_UNITS, MAX_COURSE_UNITS);
        this.enrolled = [];
        this.waitlist = [];
    }

    hasSpace() {
        return this.size < this.cap;
    }

    select() {
        this.size++;
    }

    addEnrolled(student) {
        this.enrolled.push(student);
    }

    addWaitlist(student) {
        this.waitlist.push(student);
    }
}

class Student {
    constructor(id) {
        this.id = id;
        this.numCourses = randint(MIN_NUM_COURSES, MAX_NUM_COURSES);
        this.maxUnits = randint(MIN_NUM_UNITS, MAX_NUM_UNITS);

        this.canEnroll = true;
        this.desiredCourses = [];
        this.processedCourses = [];
        this.enrolledCourses = [];
        this.filledCourses = [];
        this.droppedCourse = null;

        this.willDrop = randint(0, 1) < 1 ? true : false;
    }

    choosePrefs(courses) {
        for (var i = 0; i < PREFS_LEN; i++) {
            var choice = courses[randint(0, courses.length - 1)];
            this.desiredCourses.push(choice);
        }
    }

    enrollOnce(courses) {
        while (this.desiredCourses.length > 0) {
            var choice = this.desiredCourses.shift();
            this.processedCourses.push(choice);
            if (this.hasSpace(choice)) {
                if (choice.hasSpace()) {
                    choice.select();
                    choice.addEnrolled(this);
                    this.enrolledCourses.push(choice);
                    return;
                } else {
                    choice.addWaitlist(this);
                    this.filledCourses.push(choice);
                }
            }
        }
        this.canEnroll = false;
    }

    dropCourse() {
        if (this.willDrop && this.enrolledCourses.length > 0) {
            this.droppedCourse = this.enrolledCourses.pop();
        }
    }

    hasSpace(course) {
        var numUnits = 0;
        this.enrolledCourses.forEach(function (c) {
            numUnits += c.units;
        });
        return numUnits + course.units <= this.maxUnits;
    }
}


var genCourses = function() {
    var courses = [];
    for (var i = 0; i < NUM_COURSES; i++) {
        courses.push(new Course(i));
    }
    return courses;
}

var genStudents = function() {
    var students = [];
    for (var i = 0; i < NUM_STUDENTS; i++) {
        students.push(new Student(i));
    }
    return students;
}

var printStats = function(students) {
    var success = 0;
    var full = 0;
    var drop = 0;

    students.forEach(function (s) {
        success += s.enrolledCourses.length;
        full += s.filledCourses.length;
        drop += s.droppedCourse ? 1 : 0;
    });

    var total = success + full + drop;

    console.log("Success rate: " + (success / total * 100));
    console.log("Full rate: " + (full / total * 100));
    console.log("Drop rate: " + (drop / total * 100));

    var pareto = 0;
    students.forEach(function (s) {
        students.some(function (t) {
            if (s.droppedCourse && t.filledCourses.indexOf(s.droppedCourse) > -1) {
                pareto++;
                return true;
            } else {
                return false;
            }
        });
    });

    console.log("Pareto inefficiency: " + (pareto / total * 100));

    var stats = {};
    students.forEach(function (s) {
        if (s.filledCourses.length in stats) {
            stats[s.filledCourses.length]++;
        } else {
            stats[s.filledCourses.length] = 1;
        }
    });

    console.log(stats);
}

var main = function() {
    /**
    courses = genCourses();
    students = genStudents();
    students.forEach(function (s) {
        s.choosePrefs(courses);
        while (s.canEnroll) {
            s.enrollOnce(courses);
        }
        s.dropCourse();
    });
    printStats(students);
    **/
}











