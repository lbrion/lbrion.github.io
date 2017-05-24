function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

var svgContainer = d3.select("body").append("svg")
									.attr("width", 800)
									.attr("height", 500)

width = 800
num_in_row = 10
rect_width = width / num_in_row
rect_height = 100

function generate() {
	var student_squares = svgContainer.selectAll(".student")
		.data(newStudents)

	student_squares.enter()
		.append("g")
		.attr("transform", function(d) {return "translate(" + ((d.id % 16) * rect_width) + ", " + (Math.floor((d.id / 16)) * rect_height) + ")"})
		.attr("class", "student")

	student_squares.append("rect")
				   .attr("height", rect_height)
				   .attr("width", rect_width)
				   .attr("fill", "none")
				   .style("stroke", "black")

	student_squares.append("text")
				   .attr("y", 14)
				   .attr("x", 1)
				   .text(function(d) {return "Student " + d.id})

	student_squares.append("text")
				   .attr("y", 30)
				   .attr("x", 3)
				   .attr("dy", 1)
				   .attr("transform", "translate(5, 0)")
				   .text(function(d) {
				   		result = ""
				   		for (var i = 0; i < d.desiredCourses.length; i++) {
				   			result += d.desiredCourses[i].id
				   			result += '\r\n'
				   		}
				   		return result
				   	})
				   	.call(wrap, rect_width - 5);

	var course_squares = svgContainer.selectAll(".course")
		.data(newCourses)

	course_squares.enter()
		.append("g")
		.attr("transform", function(d) {return "translate(" + ((d.id % 16) * rect_width) + ", " + (300 + Math.floor((d.id / 16)) * rect_height) + ")"})

	course_squares.append("text")
	    .attr("class", "noneode")
	    .attr("x", function (d) { return 1; })
	    .attr("y", function (d) { return 30; })

	course_squares.append("rect")
				   .attr("height", rect_height)
				   .attr("width", rect_width)
				   .attr("fill", "none")
				   .style("stroke", "black")

	course_squares.append("text")
				   .attr("y", 14)
				   .attr("x", 1)
				   .text(function(d) {return "CS " + d.id})

	course_squares.append("text")
				   .attr("y", 30)
				   .attr("x", 3)
				   .attr("dy", 1)
				   .attr("transform", "translate(5, 0)")
				   .text(function(d) {
				   		result = ""
				   		for (var i = 0; i < d.enrolled.length; i++) {
				   			result += d.enrolled[i].id
				   			result += '\r\n'
				   		}
				   		return result
				   	})
				   	.call(wrap, rect_width - 5);
}

function update() {

	var student_squares = svgContainer.selectAll(".student")
		.data(newStudents)

	student_squares.append("text")
				   .attr("y", 30)
				   .attr("x", 3)
				   .attr("dy", 1)
				   .attr("transform", "translate(5, 0)")
				   .text(function(d) {
				   		result = ""
				   		for (var i = 0; i < d.desiredCourses.length; i++) {
				   			result += d.desiredCourses[i].id
				   			result += '\r\n'
				   		}
				   		return result
				   	})
				   	.call(wrap, rect_width - 5);

	var course_squares = svgContainer.selectAll(".course")
		.data(newCourses)

	course_squares.append("text")
				   .attr("y", 30)
				   .attr("x", 3)
				   .attr("dy", 1)
				   .attr("transform", "translate(5, 0)")
				   .text(function(d) {
				   		result = ""
				   		for (var i = 0; i < d.enrolled.length; i++) {
				   			result += d.enrolled[i].id
				   			result += '\r\n'
				   		}
				   		return result
				   	})
				   	.call(wrap, rect_width - 5);
}

function initializeSimulation() {
    newCourses = genCourses();
    newStudents = genStudents();
    newStudents.forEach(function (s) {
        s.choosePrefs(newCourses);
    });

    generate()
    
    return 0
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function runSimulation() {
    while (newStudents.map(function (obj) { return obj.canEnroll; }).indexOf(true) > -1) {
        newStudents.forEach(function (s) {
            if (s.canEnroll) {
                setTimeout(s.enrollOnce(newCourses), 1);
                setTimeout(update(), 1);
            }
        });
    }
    newStudents.forEach(function (s) {
        s.dropCourse();
    });
    printStats(newStudents);

    return 0
}