import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Test from './Test/Test';

function App() {
  return (
    <BrowserRouter basename={'https://hristijangjorgjioski.github.io/learning-automation'}>
      <Routes>
        <Route path="/test" element={<Test />} />
        Hristijan / url
      </Routes>
    </BrowserRouter>
  );
}

export default App;
