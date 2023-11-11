// App.jsx: Main component that orchestrates the display settings and UI layout.

import { DisplayProvider } from "./context/DisplayContext"; // Provides display context.
import Controls from "./components/Controls/Controls"; // Control panel component.
import Board from "./components/Board/Board"; // Main board display component.

const App = () => {
    return (
        <DisplayProvider>
            {/* Wraps UI components with display context */}
            <Controls /> {/* User interface for display settings */}
            <Board /> {/* Displays tasks based on settings */}
        </DisplayProvider>
    );
};

export default App; // Exports App for use in index.js as the root component.
