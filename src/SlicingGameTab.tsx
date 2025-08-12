import NavBar from './components/NavBar'
import './SlicingGameTab.css'
import ShatterGame from './components/ShatterGame'
import ReactDOM from 'react-dom/client';

function SlicingGameTab() {
    return (
        <>
            <NavBar />
            <div style={{ minHeight: "100vh", justifyContent: "center", alignItems: "center", display: "flex" }}>
                <ShatterGame />
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<SlicingGameTab />);
