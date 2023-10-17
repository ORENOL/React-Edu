import Clockimg from "./Clockimg";
import Clocktime from "./Clocktime";

const Clock = () => {
    return(
        <div className="App">
        <header className="App-header">
          <Clockimg/>
          <p>
            Hello, React!
          </p>
          <Clocktime/>
        </header>
      </div>
    );
}

export default Clock;