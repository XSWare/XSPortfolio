import NavBar from './components/NavBar'
import './SlicingGameTab.css'
import ShatterGame from './components/ShatterGame'
import ReactDOM from 'react-dom/client';

function SlicingGameTab() {
    return (
        <>
            <NavBar />
            <ShatterGame />
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<SlicingGameTab />);
