import Family from './prop_drill/Family';
import FamilyC from "./ContextComponents/FamilyC"
import './App.css';
import { FamilyContext } from './ContextComponents/FamilyContext';

function App() {

  const familyInfo = {
    familyName:"The Griffins",

    onlyForParents:()=>{
        return "Info for parents"
    },

    onlyForGrandChildren : ()=>{
        return "Info for GrandChildren"
    }
}

  return (
    // <Family/>
    <FamilyContext.Provider value={familyInfo}>
      <FamilyC/>
    </FamilyContext.Provider>
  );
}

export default App;
