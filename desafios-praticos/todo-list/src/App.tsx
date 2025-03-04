import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import { Button } from './components/Button'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Header as ListHeader } from './components/ListTasks/Header'
import { Empty } from './components/ListTasks/Empty'
import { Item } from './components/ListTasks/Item'
import { useState } from 'react'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />

          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader tasksCounter={5} checkedTasksCounter={2} />
          <div>
            <Item />
          </div>
        </div>
      </section>
    </main>
  )
}
