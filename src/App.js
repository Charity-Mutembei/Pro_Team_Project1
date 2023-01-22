import './App.css';
import SideBar from './Components/SideBarComponent/SideBar';
import TopBar from './Components/TopBarComponent/TopBar'

function App() {
  return (
    <>
      <div className='body_container'>
        <div className='side_bar'>
        <SideBar/>
        </div>
        <div className='top_bar'>
          <TopBar/>
        </div>
      </div>
    </>
  )
}

export default App;
