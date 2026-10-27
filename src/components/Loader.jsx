import {useProgress} from "@react-three/drei";

// Plain DOM fallback outside <Canvas>: drei's <Html> as a Suspense fallback breaks unmounting under React 19.
const CanvasLoader = () => {
    const {progress} = useProgress();
    return (
        <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",}}>
            <span className='canvas-loader'></span>
            <p style={{fontSize: 14, color: "#F1F1F1", fontWeight: 800, marginTop: 40,}}>
                {progress.toFixed(2)}%
            </p>
        </div>
    );
};

export default CanvasLoader;
