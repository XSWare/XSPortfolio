import NavBar from './components/NavBar'
import './LogoShaderTab.css'
import LogoShader from './components/LogoShader'
import ReactDOM from 'react-dom/client';

function LogoShaderTab() {
    return (
        <>
            <NavBar />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
                <LogoShader />
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<LogoShaderTab />);
