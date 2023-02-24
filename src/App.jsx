import { Contact } from "./components/Contact";
import { Main } from "./components/main";
import { Projects } from "./components/Projects";
import Sidenav from "./components/Sidenav";
import { Skill } from "./components/Skill";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
