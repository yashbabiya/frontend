import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path='/' element={<h1>Home</h1>} />
        <Route exact path='/ok' element={<h1>not</h1>} />

        </Routes>
    </div>
  );
}

export default App;
