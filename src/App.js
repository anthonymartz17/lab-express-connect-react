import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
function App() {
	console.log(process.env.REACT_APP_BASE_URL);
	return (
		<div>
			<Router>
				<head>
					<NavBar />
				</head>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/logs" element={<Index />} />
						<Route path="/logs/:id" element={<Show />} />
						<Route path="/logs/new" element={<New />} />
						<Route path="/logs/:id/edit" element={<Edit />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
