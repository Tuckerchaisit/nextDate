import DatePlanList from '../DatePlanList/DatePlanList'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <DatePlanList />
    </main>
  )
}

export default Landing
