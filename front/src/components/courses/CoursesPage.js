import React from "react";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  render() {
    return (
      <form>
        <h2>Courses</h2>
        <h3>Add Course</h3>

        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

export default CoursesPage;
