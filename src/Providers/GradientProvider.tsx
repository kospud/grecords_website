import React, { createContext, PropsWithChildren, useState } from 'react'


interface GradientContextValue {
    isVisible: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

type GradientContextType = GradientContextValue | undefined

export const GradientContext = createContext<GradientContextType>(undefined)

function GradientProvider({ children }: PropsWithChildren) {
    const [isVisible, setVisibility] = useState(false)
    return (
        <GradientContext.Provider value={{ isVisible, setVisibility }}>
            {children}
        </GradientContext.Provider>
    )
}

export default GradientProvider