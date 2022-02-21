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
  const allParts = parts.map(part => <Part part={part}/>);
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
    <p>Number of exercises {total}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
