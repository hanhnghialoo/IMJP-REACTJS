import { useState, useEffect } from "react";
import { SCREEN_CONFIG } from "../../features/timeline/constants/screen/screenConfig";

const getScreenState = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return {
        width,
        height,
        isSupported:
            width >= SCREEN_CONFIG.MIN_WIDTH &&
            height >= SCREEN_CONFIG.MIN_HEIGHT,
    };
};

export default function useScreenSupport(){
    const [screenState, setScreenState] = useState(getScreenState);

    useEffect(()=>{
        const handleResize = () => {
            setScreenState(getScreenState());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    }, []);

    return {
        ...screenState,
        minWidth: SCREEN_CONFIG.MIN_WIDTH,
        minHeight: SCREEN_CONFIG.MIN_HEIGHT,
    };
}