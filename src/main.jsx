import ReactDOM from "react-dom/client"
import Router from "./Router.jsx"
import "./index.css"

import { RecoilRoot } from "recoil"

ReactDOM.createRoot(document.getElementById("root")).render(
	<RecoilRoot>
		<Router />
	</RecoilRoot>
)
