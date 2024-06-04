import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Prgojects";


function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Projects/>
			<Skills/>
		</div>
	);
}

export default App;