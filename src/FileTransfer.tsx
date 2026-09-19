import NavBar from './components/NavBar';

function FileTransferDownload() {
    return (
        <>
            <NavBar isSPA={true} />
            <p>Lightweight peer-to-peer <a href='https://github.com/xsware/xs-file-transfer-rs'>program</a> to send files all around the world, encrypted with AES256.</p>
            <div className="file-transfer-download-container">
                
            </div>
        </>
    );
}

export default FileTransferDownload;