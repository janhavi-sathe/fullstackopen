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
  let total = 0;
  // part1.exercises + part2.exercises + part3.exercises
  parts.forEach(part => {
    total += part['exercises'];
  });
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


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App
