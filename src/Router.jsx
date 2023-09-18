import { atom } from "recoil"
import Index from "./pages/Index"

import { HashRouter, Routes, Route } from "react-router-dom"

export const exampleAtom = atom({
	key: "exampleAtom",
	default: null,
})

export default function () {
	return (
		<HashRouter>
			<Routes>
				<Route path="*" Component={Index} />
				<Route path="/" Component={Index} />
			</Routes>
		</HashRouter>
	)
}
