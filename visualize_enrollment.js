var svgContainer = d3.select("body").append("svg")
									.attr("width", 500)
									.attr("height", 500)

function initializeSimulation() {
    newCourses = genCourses();
    newStudents = genStudents();
    newStudents.forEach(function (s) {
        s.choosePrefs(newCourses);
    });

    return 0
}

rect_width = 50
rect_height = 100

function runSimulation() {
	var student_squares = svgContainer.selectAll("g")
		.data(newStudents)
		.enter()
		.append("g")
		.attr("transform", function(d) {return "translate(" + ((d.id % 10) * rect_width) + ", " + (Math.floor((d.id / 10)) * rect_height) + ")"})
		.attr("id", function(d) {return "student_" + d.id})

	student_squares.append("rect")
				   .attr("height", rect_height)
				   .attr("width", rect_width)
				   .attr("fill", "none")
				   .style("stroke", "black")

	student_squares.append("text")
				   .attr("y", 14)
				   .attr("x", 1)
				   .text(function(d) {return d.id})

	newStudents.pop()
	student_squares.exit().remove()

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
    printStats(newStudents);

    return 0
}