### `1.1: course information, step1`
Use create-react-app to initialize a new application. Modify _index.js_ to match the following

```js
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
```

and _App.js_ to match the following
```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```

and remove extra files (_App.css_, _App.test.js_, _index.css_, _logo.svg_, _setupTests.js_, _reportWebVitals.js_)).

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: _Header_, _Content_, and _Total_. All data still resides in the _App_ component, which passes the necessary data to each component using _props_. _Header_ takes care of rendering the name of the course, _Content_ renders the parts and their number of exercises and _Total_ renders the total number of exercises.

Define the new components in file _App.js_.

The _App_ component's body will approximately be as follows:
```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```
WARNING create-react-app automatically makes the project a git repository unless the application is created within an already existing repository. Most likely you do not want the project to become a repository, so run the command `rm -rf .git` in the root of the project.

### `1.2: course information, step2`
Refactor the _Content_ component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three _Part_ components of which each renders the name and number of exercises of one part.
```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. This situation will improve soon.
