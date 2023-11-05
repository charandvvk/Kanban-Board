import { DisplayProvider } from "./context/DisplayContext";
import Controls from "./components/Controls/Controls";
import Board from "./components/Board/Board";

const App = () => {
    return (
        <DisplayProvider>
            <Controls />
            <Board />
        </DisplayProvider>
    );
};

export default App;
