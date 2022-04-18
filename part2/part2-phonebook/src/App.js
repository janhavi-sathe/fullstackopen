import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const nameExists = (personObject) => {
    return (persons.find(person => person.name === personObject.name));
  }

  const numberExists = (personObject) => {
    return (persons.find(person => person.number === personObject.number));
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (nameExists(personObject)) {
      window.alert(`${newName} is already added to phonebook`);
    }
    else if (numberExists(personObject)) {
      window.alert(`${newNumber} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>number: <input
          value={newNumber}
          onChange={handleNumberChange}
        /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <p key={person.name}>{person.name}: {person.number}</p>)}
      </div>
    </div>
  )
}

export default App
