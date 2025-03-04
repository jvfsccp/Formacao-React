import { useEffect, useState } from 'react'

function avisarAPI() {
  console.log('Lista salva!')
}

export function App() {
  const [list, setList] = useState<string[]>([])
  const [filteredList, setFilteredList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    avisarAPI()
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/jvfsccp/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  useEffect(() => {
    setFilteredList(list.filter((item) => item.includes(filter)))
  }, [filter])

  function addToList() {
    setList((state) => [...state, 'Novo item'])

    avisarAPI()
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <ul>
        {filteredList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
  )
}

// useEffect -> Side-effect -> Efeito colateral
