import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';

export default function Home() {
    return (
        <div className="homepage">
            <MainNavBar></MainNavBar>
            <div className="inner-homepage">
                <h1 className="fade-title">
                    Hi, I'm Christian :)
                </h1>
                <h3 className="fade-subtitle">
                    I am a 2nd year Software Engineering student at RIT with a passion for programming and software development. I'm particularly interested in where software and learning collide, as I think software could make the process of learning something much more engaging and fun! Beyond academics, I spend my time practicing photography, playing the guitar and skating. 
                </h3>
            </div>
        </div>
    );
}
