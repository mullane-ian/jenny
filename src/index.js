import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Plane from "./components/Plane";
import './styles.css';
import { Html } from '@react-three/drei';
import { SocialIcon } from "react-social-icons";
ReactDOM.render(
    <Canvas dpr={Math.max(window.devicePixelRatio, 1)}>
        <Suspense fallback={null}>
            <Plane />
            <Html center position={[0,-3,0]}>
                <div className='title'>
                    <h1 className='title'>Jenny</h1>
                </div>
          
            </Html>
            <Html fullscreen>
            <div className="icons">
                    <SocialIcon network="instagram" bgColor="white"/>
                    <SocialIcon network="tiktok" bgColor="white" />
                 
                </div>
            </Html>
          

        </Suspense>
    </Canvas>,
    document.getElementById('root')
);
