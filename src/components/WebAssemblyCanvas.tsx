import { useEffect } from "react";

export default function WebAssemblyCanvas() {
    useEffect(() => {
        import("../logo_shader/shader_post_processing_example.js").then(module => {
            module.default();
        });
    }, []);

    return <div id="wasm-example" style={{ width: "800px", height: "220px", border: "1px solid red" }} />;
}
