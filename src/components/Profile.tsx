import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/53240218?s=400&u=38f761fd626f8eff8049c6489b9e0c884505c4ce&v=4"
        alt="Priscilla de Roode"
      />
      <div>
        <strong>Priscilla de Roode</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
