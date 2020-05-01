import React from 'react';
import './dashboard.css';

function Dashboard() {
    return(
        <div>
            <div className='dashboardNavbar'>
                <p className='acadDetail'>Vibrant Academy</p>
            </div>
            <div className='welcomeTitle'>
                Welcome VG
            </div>
            <div className='lectures'>
                <p className='lectureText'>Here are your next Lectures</p>
                <div className='lectureCard'>
                    <h4 className='lectureBatch'>BATCH X1</h4>
                    <h3 className='lectureName'>Thremodynamics</h3>
                    <p className='lectureTiming'>In 5 Minutes (11:45 PM)</p>
                </div>
                <div className='lectureCard'>
                    <h4 className='lectureBatch'>BATCH X1</h4>
                    <h3 className='lectureName'>Thremodynamics</h3>
                    <p className='lectureTiming'>In 5 Minutes (11:45 PM)</p>
                </div>
                <div className='lectureCard'>
                    <h4 className='lectureBatch'>BATCH X1</h4>
                    <h3 className='lectureName'>Thremodynamics</h3>
                    <p className='lectureTiming'>In 5 Minutes (11:45 PM)</p>
                </div>
                <div className='lectureCard'>
                    <h4 className='lectureBatch'>BATCH X1</h4>
                    <h3 className='lectureName'>Thremodynamics</h3>
                    <p className='lectureTiming'>In 5 Minutes (11:45 PM)</p>
                </div>
            </div>
            <div className='batchTitle'>
                Your Batches
            </div>
            <div className='batches'>
                <div className='batchCard'>
                    <h4 className='batchName'>BATCH X1</h4>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;