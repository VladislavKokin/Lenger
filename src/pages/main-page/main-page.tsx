import { useSelector } from 'react-redux'
import { selectUser } from '../../store/auth-slice'
import { Dashboard, Landing } from './components'

export const MainPage = () => {
  const user = useSelector(selectUser)

  return user ? <Dashboard /> : <Landing />
}
