import Adresse from'./Profile/Adresse.js';
import FullName from'./Profile/FullName.js';
import Photo from './Profile/Photo.js'

function App() {
  return (
    <div className="App">
      <Photo />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
