import NavBar from './components/NavBar'
import './LogoShaderTab.css'
import LogoShader from './components/LogoShader'
import ReactDOM from 'react-dom/client';

function LogoShaderTab() {
    return (
        <>
            <NavBar />
            <LogoShader />
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<LogoShaderTab />);
