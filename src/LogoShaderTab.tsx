import NavBar from './components/NavBar'
import './LogoShaderTab.css'
import LogoShader from './components/LogoShader'
import ReactDOM from 'react-dom/client';

function LogoShaderTab() {
    return (
        <>
            <NavBar />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <h3>Hover the image with your mouse pointer to apply the effect. Click the image to change the effect.</h3>
                <LogoShader />
                <text>This preview uses <a href='https://gpuweb.github.io/gpuweb/'>WebGPU</a> to apply shader effects to a static image.</text>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<LogoShaderTab />);
