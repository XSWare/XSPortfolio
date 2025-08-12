import { useEffect } from "react";

export default function ShatterGame() {
    useEffect(() => {
        import("../shatter_game/shatter.js").then(module => {
            module.default();
        });
    }, []);

    return <canvas id="bevy-canvas" style={{ width: "800px", height: "220px", outline: "none" }} />;
}
