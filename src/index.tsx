import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import MuiProvider from "./theme/mui";
import ThemeProvider from "./theme/Provider";

// Toast
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter basename="/">
			<MuiProvider>
				<ThemeProvider>
					<App />
				</ThemeProvider>
				<ToastContainer
					autoClose={4e3}
					closeOnClick
					hideProgressBar
					limit={5}
					pauseOnFocusLoss={false}
					position="bottom-left"
					rtl
				/>
			</MuiProvider>
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
