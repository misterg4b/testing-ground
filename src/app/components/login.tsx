'use client'
import { use, useState } from "react"
import { NotifLogin } from "./notiflogin"

export const Login = () => {
    const [isLoggedIn,setLoggedIn] = useState(false)
    const [count,isTambah] = useState(0)

    const handleTambah = () =>{
        isTambah(count + 1)
    }
    const handleKurang = () =>{
        isTambah(count - 1)
    }
    const handleLogin = () => {
        setLoggedIn(true)

    }
    const handleLogout = () => {
        setLoggedIn(false)

    }

    return (
        <>

            
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
            <button onClick={handleTambah}>Tambah!</button>
            <button onClick={handleKurang}>Kurang!</button>
            <div>Sekarang poin anda {count} </div>
            <div className=" flex rounded-sm justify-center gap-2 ">
                <button className = 'bg-gray-500 p-3 rounded-sm 'onClick={handleLogin}> Login! </button>
                <button className =' bg-gray-500 p-3 rounded-sm 'onClick={handleLogout}> Logout! </button>
            </div>
            <div>
                {!isLoggedIn ? <NotifLogin /> : 
                <div className="flex justify-center ">
                    <a href="/mesage" >
                        <button  className = 'bg-gray-500 p-3 rounded-sm '>
                            Masuk!
                        </button>
                    </a>
                
                </div>
                }
                
            </div>
            
            
        </>


        

    )
}