import { useEffect } from "react";

export default function LogoShader() {
    useEffect(() => {
        import("../logo_shader/shader_post_processing_example.js").then(module => {
            module.default();
        });
    }, []);

    return <canvas id="wasm-canvas" style={{ width: "800px", height: "220px", outline: "none"}} />;
}
