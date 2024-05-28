import React from 'react';
import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';
import Head from 'next/head';

const Home: React.FC = () => {
    return (
        <>
            <div className="homepage">

                <MainNavBar />
                <div className="inner-homepage">
                    <p className="title">
                        Hi, I'm Christian :)
                    </p>
                    <p className="subtitle">
                        I am a 2nd year Software Engineering student at RIT with a passion for programming and software development. I'm particularly interested in where software and learning collide, as I think software could make the process of learning something much more engaging and fun! Beyond academics, I spend my time practicing photography, playing the guitar and skating.
                    </p>

                    {/* Experience */}

                    {/* Projects */}
                    <div className="upcoming-collapse">
                        <div className="collapse collapse-arrow bg-base-200 collapse-child">
                           <input type="checkbox" id="week-collapse" className="peer" />
                           <label htmlFor="week-collapse" className="collapse-title text-xl font-medium">
                              This Week
                           </label>
                           <div className="collapse-content"> 
                              <p>hello</p>
                           </div>
                        </div>
                    </div>

                    {/* Contact */}

                    {/* Terminal */}
                </div>
            </div>
        </>
    );
}

export default Home;

