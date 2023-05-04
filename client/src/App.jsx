import Canvas from './canvas/index';
import Customiser from './pages/Customiser';
import Home from './pages/Home';

function App() {
  	return (
   	<main className="app transition-all ease-in">
			<Home />
			<Canvas />
			<Customiser />
    	</main>
  	)
}

export default App
