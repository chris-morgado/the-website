import WebGLCanvas from '../components/WebGLCanvas';
import '../styles/globals.css';

export default function Home() {
    return (
            <div className="terminal">
                <div className="terminal-content">
                    <h1>LOOKING GOOD!!!</h1>
                    <p>I'm christian, and this is my personal website :)</p>
                    <nav>
                        <a href="#projects">Projects</a> | <a href="#about">About</a> | <a href="#contact">Contact</a> | <a href="#contact">Poop</a>
                    </nav>
                </div>
            </div>
        // <WebGLCanvas></WebGLCanvas>
    );
}