
import { AppointmentsProviders } from "./Contexts/useAppointments"
import { Routes } from "./Routes"
import { GlobalStyle } from "./styles/global"

function App() {

	return (
		<AppointmentsProviders>
			<GlobalStyle />

			<Routes />
		</AppointmentsProviders>
	)
}

export default App
