import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl : userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));

    };


    const register = () => {
        if (!name) {
            return alert("Please Enter a Full Name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                            );
                    });
            })
            .catch(error => alert(error));
            
    };


    return (
        <div className="login">
            <img src="./image/Linkedin-Logo.png" alt="" />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name(required if registering)"
                    type="text"

                />

                <input
                    value={profilePic}
                    onChange={(e) => setprofilePic(e.target.value)}
                    placeholder="Profile Pic Url (optional)"
                    type="text"
                />

                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" type="email"
                />

                <input value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"

                />

                <button type="submit" onClick={loginToApp}>SignIn</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register} >Resister Now</span></p>

        </div>
    )
}

export default Login;
