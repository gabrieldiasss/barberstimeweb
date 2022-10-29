import { useEffect } from "react"

function App() {

	useEffect(() => {

		async function listar() {
			const response = await fetch("https://api-braga.herokuapp.com/api/barbersAll/4")
			const data = await response.json()
			console.log(data)
		}

		listar()

	}, [])

	return (
		<>
			
		</>
	)
}

export default App
