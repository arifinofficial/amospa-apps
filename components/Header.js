import Navigation from '../components/Navigation'
import LogInfo from '../components/LogInfo'

const Header = (props) => (
  <div className="header">          
    <Navigation/>
    <LogInfo userLog="Rama" dateLog="20 September 2018" />
  </div>
)

export default Header