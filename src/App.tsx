import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Prgojects";
import {Quoted} from "./layout/sections/quoted/quoted";


function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Quoted/>
			<Projects/>
			<Skills/>
		</div>
	);
}

export default App;