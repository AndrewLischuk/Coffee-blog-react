import { useEffect } from "react";


export default function ScrollFunc() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return null
}