import React from 'react';
import './TopBar.css';

export default function TopBar() {
  return (
    <div className='internship_label'>
        <div className='grid-template'>
            <p>Internships</p>
        </div>
        <div className='grid-template'>
            <a href='#createnewinternship'>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm6 7a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 8 11Z" clip-rule="evenodd"/></svg>
                    <span>
                    Create New Internships 
                    </span>
                </button>
            </a>
        </div>
    </div>
  )
}
