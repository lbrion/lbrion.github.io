var NUM_COURSES = 100
var MIN_COURSE_SIZE = 10
var MAX_COURSE_SIZE = 100
var MIN_COURSE_UNITS = 1
var MAX_COURSE_UNITS = 5

var NUM_STUDENTS = 1000
var MIN_NUM_UNITS = 12
var MAX_NUM_UNITS = 16
var MIN_NUM_COURSES = 3
var MAX_NUM_COURSES = 6
var PREFS_LEN = 10

var MIN_TIME = 0
var MAX_TIME = 100

function appendToOutput(text) {
  document.getElementById('output').value += text;
  document.getElementById('output').value += '\n'; 
}

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
    }

    hasSpace() {
        return this.size < this.cap;
    }

    select() {
        this.size++;
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
            while (this.desiredCourses.indexOf(choice) > -1) {
                choice = courses[randint(0, courses.length - 1)];
            }
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
                    this.enrolledCourses.push(choice);
                    return;
                } else {
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

    appendToOutput("Success rate: " + (success / total * 100));
    appendToOutput("Full rate: " + (full / total * 100));
    appendToOutput("Drop rate: " + (drop / total * 100));

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

    appendToOutput("Pareto inefficiency: " + (pareto / total * 100));

    var stats = {};
    students.forEach(function (s) {
        if (s.filledCourses.length in stats) {
            stats[s.filledCourses.length]++;
        } else {
            stats[s.filledCourses.length] = 1;
        }
    });

    return Object.values(stats)
}

var runSimulation = function() {
    document.getElementById('output').value = '';
    NUM_COURSES = document.getElementById('num_courses').value
    MIN_COURSE_SIZE = document.getElementById('min_course_size').value
    MAX_COURSE_SIZE = document.getElementById('max_course_size').value
    MIN_COURSE_UNITS = document.getElementById('min_course_unit').value
    MAX_COURSE_UNITS = document.getElementById('max_course_unit').value

    NUM_STUDENTS = document.getElementById('num_students').value
    MIN_NUM_UNITS = document.getElementById('min_student_units').value
    MAX_NUM_UNITS = document.getElementById('max_student_units').value
    MIN_NUM_COURSES = document.getElementById('min_student_courses').value
    MAX_NUM_COURSES = document.getElementById('max_student_courses').value

    courses = genCourses();
    students = genStudents();
    students.forEach(function (s) {
        s.choosePrefs(courses);
        while (s.canEnroll) {
            s.enrollOnce(courses);
        }
        s.dropCourse();
    });
    appendToOutput("Old Stanford System");
    appendToOutput("------------------------------");
    stats1 = printStats(students);

    newCourses = genCourses();
    newStudents = genStudents();
    newStudents.forEach(function (s) {
        s.choosePrefs(newCourses);
    });
    while (newStudents.map(function (obj) { return obj.canEnroll; }).indexOf(true) > -1) {
        newStudents.forEach(function (s) {
            if (s.canEnroll) {
                s.enrollOnce(newCourses);
            }
        });
    }
    newStudents.forEach(function (s) {
        s.dropCourse();
    });
    appendToOutput("\n");
    appendToOutput("New Stanford System");
    appendToOutput("------------------------------");
    stats2 = printStats(newStudents);

    two_plots(stats1, stats2)
}

function two_plots(data1, data2) {
    // set the dimensions and margins of the graph
    graph = document.getElementById('graph1')
    if (graph.firstChild != null) {

    while (graph.firstChild) {
        graph.removeChild(graph.firstChild)
    }
       
    }

    data = data1

    var x = d3.scaleLinear()
        .domain([0, d3.max(data1.concat(data2))])
        .range([0, 400]);

    d3.select(".chart1")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d, i) { return i + ": " + d; });

    graph = document.getElementById('graph2')
    if (graph.firstChild != null) {

    while (graph.firstChild) {
        graph.removeChild(graph.firstChild)
    }
       
    }
    data = data2

    d3.select(".chart2")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d, i) { return i + ": " + d; });
}











