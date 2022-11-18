import { Redirect, Route } from 'react-router-dom'

function Private(props: any) {
    const isLogged = !!localStorage.getItem("accessToken")
    return isLogged ? <Route {...props} /> : <Redirect to="/" />
}

export default Private