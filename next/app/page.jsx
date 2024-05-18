import MainNavBar from '../components/nav/navbars';
import '../styles/globals.css';

export default function Home() {
    return (
        <div className="homepage">
            <MainNavBar></MainNavBar>
            <p>
                Hello :)
            </p>
        </div>
    );
}
