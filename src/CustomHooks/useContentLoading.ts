import { useState, useEffect } from "react";

export const useContentLoading=()=>{
    const [isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        const contentIsLoaded=()=>{
            setIsLoading(false)
        }

        window.addEventListener('load', contentIsLoaded)

        return ()=>{
            window.removeEventListener('load', contentIsLoaded)
        }
    },[])

    return {isLoading}
}