import { useEffect, useRef, useState } from "react"

const LoginForm = ({setUser}) => {

    const emailRef = useRef();
    const passRef = useRef();

    const [inUser, setInUser] = useState()
    const [inPw, setInPw] = useState()

    const handleLogin = (e) => {
        console.log(emailRef.current.value)
        e.preventDefault()

        if (inUser === "201910309@pusan.ac.kr" && inPw === "1234") {
            localStorage.setItem("user", emailRef);
            setUser(inUser);
        }
    }

    useEffect(() => {
        console.log(inUser, inPw)
    }, [inUser, inPw])

  return (
    <form >
          <h1 className="text-2xl font-bold">로그인</h1>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input onChange={(e) => setInUser(e.target.value)} ref={emailRef} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input onChange={(e) => setInPw(e.target.value)} ref={passRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div className="flex items-start mb-3">
        <div className="flex items-center h-5">
        </div>
      </div>
      <button type="submit" onClick={handleLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">로그인</button>
    </form>
  )
}

export default LoginForm
