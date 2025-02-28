import { Check, Trash } from 'phosphor-react'

import styles from './Item.module.css'

export function Item() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}>
            <Check />
          </span>
          <p className={styles.paragraph}>Task</p>
        </label>
      </div>

      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
