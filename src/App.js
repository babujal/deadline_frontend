import logo from "./logo.svg";
import "./App.css";
import Header from "./components/HeaderIndex";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
			<Main />
			<h1>Login</h1>
			<Login />
		</div>
	);
}

export default App;
