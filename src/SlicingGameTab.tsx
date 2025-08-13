import NavBar from './components/NavBar'
import './SlicingGameTab.css'
import ShatterGame from './components/ShatterGame'
import ReactDOM from 'react-dom/client';

function SlicingGameTab() {
    return (
        <>
            <NavBar isSPA={false} />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <h3>Click the red block to slice it up as often as you can!</h3>
                <ShatterGame />
                <pre>This <a href='http://bevy.org'>Bevy</a> app uses dynamic vertex slicing to generate new meshes on the fly.</pre>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<SlicingGameTab />);
