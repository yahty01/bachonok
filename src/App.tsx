import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Prgojects";
import {Quoted} from "./layout/sections/quoted/quoted";
import {AboutMe} from "./layout/sections/about-me/About-me";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/sections/contacts/Contacts";


function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Quoted/>
			<Projects/>
			<Skills/>
			<AboutMe/>
			<Contacts/>
			<Footer/>
		</div>
	);
}

export default App;