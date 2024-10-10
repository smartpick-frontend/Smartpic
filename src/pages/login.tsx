
import { useState } from 'react'
import './login.sass'
import { Icon } from '@iconify/react'
import data from '../assets/data/user.json'
import { useNavigate} from 'react-router-dom'



export default function Login() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const router = useNavigate()

    function validate(): boolean {
        if (user.username === data.username && user.password === data.password) {
            return true
        } else return false
    }

    const handleChange = (e: { target: { name: any; value: any } }) => {

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    return (
        <div className="main">
            <div className="form">
                <div className="top">

                    LOGIN

                </div>
                <div className="mid">
                    <div className="inp-box">
                        <div className="icn-box">
                            <Icon icon={'solar:user-bold'} color='#535353' height={25} />
                        </div>
                        <input
                            type="text"
                            placeholder='Username'
                            name='username'
                            onChange={handleChange}
                            value={user.username}
                        />
                    </div>
                    <div className="inp-box">
                        <div className="icn-box">
                            <Icon icon={'mdi:password'} color='#535353' height={25} />
                        </div>
                        <input
                            type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={user.password}

                        />
                    </div>
                </div>
                <div className="bot">
                    <button className='btn' onClick={() => {
                        if (validate()) {
                            router("/guard")
                        } else {

                        }
                    }}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
