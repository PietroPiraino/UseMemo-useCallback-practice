import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false)
    const [allowToggle, setAllowToggle] = useState(false)

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevValue => !prevValue)
        }
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(prevValue => !prevValue)
    }

    return (
        <div className="app">
            <h1>Hi, experiment useMemo and useCallback with me!</h1>
            <DemoOutput show={showParagraph}/>
            <Button onClick={toggleParagraphHandler}>Show paragraph</Button>
            <Button onClick={allowToggleHandler}>Allow toggle</Button>
        </div>
    );
}

export default App;
