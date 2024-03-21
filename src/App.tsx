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
    const isDisabledInc = count < 5 ? false : true;
    const isDisabledReset = count === 0 ? true : false;

    return (
        <div className="App">
            <div className="counter">
                <div className="scoreboard">
                    <p className={count < 5 ? '' : 'maxNumber'}>{count}</p>
                </div>
                <div className="buttons">
                    <Button
                        name={'inc'}
                        callBack={onClickHandlerCount}
                        isDisabled={isDisabledInc}
                    />
                    <Button
                        name={'reset'}
                        callBack={onClickHandlerCountZero}
                        isDisabled={isDisabledReset}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
