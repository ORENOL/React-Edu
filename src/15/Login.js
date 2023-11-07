import { useEffect, useState } from "react"
import LoginForm from "./LoginForm"
import LogoutForm from "./LogoutForm"

const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(localStorage.getItem("user"))
    }, [])

  return (
    <main className="container">
    { user 
    ? <div className="flex items-center justify-center">
        <article className="w-4/12">
            <LogoutForm user={user} setUser={setUser}/>
        </article>
    </div>

    : <div className="flex items-center justify-center">
        <article className="w-1/2 ">
            <LoginForm setUser={setUser} />
        </article>
    </div>
    }
    </main>
  )
}

export default Login
