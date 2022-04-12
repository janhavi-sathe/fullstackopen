const Header = ({ coursename }) => {
    return (
        <h1>{coursename}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    const allParts = parts.map(part => <Part key={part.id} part={part} />);
    // console.log(allParts);
    return (
        <div>
            {allParts}
        </div>
    );
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header coursename={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course;
