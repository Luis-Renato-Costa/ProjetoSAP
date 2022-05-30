import { Widget } from "./components/Widget";

export function App(){
    return <Widget />
}

/*import { useState } from 'react'
import logo from './logo.svg'

interface ButtonProps{
    text?: string;
}
function Button(props: ButtonProps){
    return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App(){
    return (
        <div className="flex gap-2">
            <Button text="Enviar" />
            <Button text="Ok" />
            <Button />
        </div>
    )
    /*const [count, setCount] = useState(0)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button type="button" onClick={() => setCount((count) => count + 1)}>
                        count is: {count}
                    </button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App*/