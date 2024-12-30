import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import 'swiper/css';
import './assets/fonts/fonts.css';
import './assets/css/style.css'
import Home from "./pages/Home.jsx";

function App() {
	return (
		
			<Router>
					<Routes Routes>
						<Route path="/" element={<Home />} />
					</Routes>
			</Router>
		
	);
}

export default App;
