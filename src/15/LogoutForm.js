const LogoutForm = ({user, setUser}) => {

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null)
    }
    
  return (
    <form >
        <h1 className="text-2xl font-bold">로그아웃</h1>
        <div className="mb-6">
            </div>
        <a className="text-3xl">{user}님 <br/>환영합니다.</a>
        <div className="flex items-start mb-3">
        <div className="flex items-center h-5">
        </div>
      </div>
      <button type="submit" onClick={handleLogout} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">로그아웃</button>
    </form>
  )
}

export default LogoutForm
