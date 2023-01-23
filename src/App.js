import './App.css';
import SideBar from './Components/SideBarComponent/SideBar';
import TopBar from './Components/TopBarComponent/TopBar';
import Insight from './Components/InsightComponent/Insight';
import LearningBoard from './Components/LearningBoardComponent/LearningBoard';



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
          <div className='learning_board'>
            <LearningBoard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
