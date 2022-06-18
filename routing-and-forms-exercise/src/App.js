import './App.css';
import FakeLogin from './components/FakeLogin/FakeLogin';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
		<>
			<Routes>
				<Route path="" element={<FakeLogin />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
    );
}

export default App;
