import './App.css';
import SideBar from './Components/SideBarComponent/SideBar';
import TopBar from './Components/TopBarComponent/TopBar';
import Insight from './Components/InsightComponent/Insight'


function App() {
  return (
    <>
      <div className='body_container'>
        <div className='side_bar'>
        <SideBar/>
        </div>
        <div className='top_bar'>
          <div className='top_bar_section'>
            <TopBar/>
          </div>
          <div className='internship_insight_section'>
            <Insight/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
