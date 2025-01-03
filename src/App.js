import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/fonts/fonts.css';
import './assets/css/style.css'
import Home from "./pages/Home.jsx";

function App() {
	
	useEffect(() => {
		AOS.init({
			once: false,
		});
	}, []);

	return (		
		<Router>
			<Routes Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>		
	);
}

export default App;
