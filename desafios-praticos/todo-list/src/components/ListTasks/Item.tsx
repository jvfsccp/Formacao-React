import { Check } from "phosphor-react"

import styles from "Item.module.css"

export function Task() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}>
            <Check />
          </span>
        </label>
      </div>
    </div>
  )
}
