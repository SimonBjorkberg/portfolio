import { createContext, useEffect, useState } from "react";


const ScrollContext = createContext()

const ScrollProviderWrapper = (props) => {
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        const body = document.getElementById('body')
        if (opened === true) {
            body.classList.add('hide-overflow')
        }
        else {
            body.classList.remove('hide-overflow')
        }
    }, [opened])

    return (
        <ScrollContext.Provider value={{ opened, setOpened }} >
            {props.children}
        </ScrollContext.Provider>
    )
}

export { ScrollProviderWrapper, ScrollContext };