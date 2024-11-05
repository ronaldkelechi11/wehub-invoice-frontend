import { Link, useNavigate } from "react-router-dom"
import InputField from "../components/Authentication/InputField"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation";

const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="w-screen h-screen flex flex-row bg-black">
            <div className="w-full relative">
                <div className="absolute bottom-5 left-5 font-lato text-white">
                    <TypeAnimation
                        sequence={[
                            "'Accounting is the language of business.'", 1500,

                            "'Someone's sitting in the shade today because someone planted a tree a long time ago.'", 1500,

                            "'Rule No.1: Never lose money. Rule No.2: Never forget Rule No.1.'", 1500,

                            "'Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.'", 1500,

                            "'The best investment you can make is in your own abilities.'", 1500
                        ]}
                        speed={20}
                        repeat={Infinity}
                        className="italic text-lg" />
                    <br />
                    <Link to={'http://www.berkshirehathaway.com/'} className="text-lg italic text-primary">- Warren Buffett</Link>
                </div>
            </div>


            <div className="w-full bg-black p-5 relative flex justify-center items-center">
                <Link to={'/login'} className="absolute top-5 right-5 text-primary font-lato">Login</Link>


                <div className="flex flex-col text-white">
                    <h1 className="font-extrabold font-lato text-2xl">Create an Account</h1>
                    <h3 className="text-grey text-sm">You are one step towards making swift payments and generating invoice instantly</h3>

                    <form className="mt-5">
                        <InputField type={'text'} placeholder={'Email123@gmail.com'} label={'Email'} required value={email} onChange={(e) => setEmail(e.target.value)} />

                        <InputField type={'telephone'} placeholder={'+234 123456789'} label={'Phone Number'} value={telephone} onChange={(e) => setTelephone(e.target.value)} required />

                        <InputField type={'password'} placeholder={'Password'} label={'Password'} value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <p className="text-sm mt-5">By creating an account you argree to all our <Link to={'#'} className="text-primary">Terms and Conditions</Link></p>

                        <button onClick={() => { navigate('accountsetup') }} className="bg-white text-black w-full rounded-lg text-center font-lato p-3 font-extrabold mt-3">Sign Up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup
