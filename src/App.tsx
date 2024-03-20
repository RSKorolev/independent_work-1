import { Button } from './Button';
import { useState } from 'react';
import './App.css';

function App() {
    let [count, setCount] = useState(0);
    const onClickHandlerCount = () => {
        setCount(++count);
    };
    const onClickHandlerCountZero = () => {
        setCount((count = 0));
    };
    const isDisabled = count < 5 ? false : true;

    return (
        <div className="App">
            <div className="counter">
                <div className="scoreboard">{count}</div>

                <div className="buttons">
                    <Button
                        name={'inc'}
                        callBack={onClickHandlerCount}
                        isDisabled={isDisabled}
                    />
                    <Button
                        name={'reset'}
                        callBack={onClickHandlerCountZero}
                        isDisabled={!isDisabled}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
