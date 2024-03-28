import './App.css';
import Button from './Components/Button';
import DynamicComponentContent from './Components/DynamicComponentContent';
import MapMethod from './Components/MapMethod';

import Container from './Components/Container';

function App() {

  return (
    <>
      <Container>

        <div className="container">
          <h1>Learning React</h1>
        </div>
        {/* <DynamicComponentContent></DynamicComponentContent>  */}

        <Container>
          <MapMethod></MapMethod>
        </Container>

      </Container>

      <Container>
        <p>
          Above list of food items is good for health, fitness and body gain fastly
        </p>
      </Container>
    </>
  )
}

export default App;
