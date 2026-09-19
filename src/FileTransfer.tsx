import NavBar from './components/NavBar';
import xs_file_transfer_preview_img from './assets/xs_file_transfer_preview.png';
import xs_file_transfer_exe from './assets/xs-file-transfer-rs.exe?url';
import './FileTransfer.css';

const EXECUTABLE_NAME = 'xs-file-transfer-rs.exe';

function FileTransferDownload() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = xs_file_transfer_exe;
        link.download = EXECUTABLE_NAME;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <NavBar isSPA={true} />
            <p>Lightweight peer-to-peer <a href='https://github.com/xsware/xs-file-transfer-rs'>program</a> to send files all around the world, encrypted with AES256.</p>
            <div className="file-transfer-download-container">
                <img className="file-transfer-preview" src={xs_file_transfer_preview_img} alt="xsFileTransfer preview" />
                <button className="file-transfer-download-button" type="button" onClick={handleDownload}>
                    Download {EXECUTABLE_NAME}
                </button>
                <span className="file-transfer-note">Windows executable. Check the <a href='https://github.com/xsware/xs-file-transfer-rs'>source code</a> to build the project for other platforms.</span>
            </div>
        </>
    );
}

export default FileTransferDownload;