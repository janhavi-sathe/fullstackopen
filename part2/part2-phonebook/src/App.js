import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const nameExists = (personObject) => {
    return (persons.find(person => person.name === personObject.name));
  }

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    if (nameExists(personObject)) {
      window.alert(`${newName} is already added to phonebook`);

    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App
