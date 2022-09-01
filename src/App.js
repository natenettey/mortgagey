import Navbar from './UI/Navbar';
import Header from './UI/Header'
import BodyText from './UI/BodyText';
import MortgageForm from './Form/MortgageForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <BodyText/>
      <MortgageForm/>
    </div>
  );
}

export default App;
