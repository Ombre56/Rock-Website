import React, { useState } from 'react'
import { useBetween } from 'use-between';
import '../../styles/LoginForm.css';
import StateArticles from './StateArticles';

const correctDetails = {
    login: "admin",
    password: "admin"
};

function LoginForm() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { checkAdmin, setCheckAdmin } = useBetween(StateArticles);
    
    const submitForm = (e) => {
        const checkDeatils = (login === correctDetails.login && password === correctDetails.password);
        e.preventDefault();
        if (checkDeatils) {
            setCheckAdmin(!checkAdmin);
        } else {
            setError("Błąd, podałeś błędne dane!");
        }

        if (login.length <= 0 || password.length <= 0) {
            setError("Błąd, pole (login/hasło) nie może byc puste");
        }
        setLogin("")
        setPassword("")
    }

    return (
    <>
        {checkAdmin ? <div className="admin-message">Gratulacje jesteś teraz adminem!</div> :
            <div className="login-container">
                <h3 className='form-title'>Panel admina</h3>
                    <form onSubmit={submitForm}>
                        <div className="form-error">{error}</div>
                            <div className="form-container">
                                <div className="form-group">
                                    <label htmlFor="login" className='form-login'>Login: </label>
                                        <input
                                            type="text"
                                            name="login"
                                            id="login"
                                            placeholder="Wpisz login..."
                                            autoComplete="off"
                                            value={login}
                                            onChange={(e) => setLogin(e.target.value)}
                                        />
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className='form-password'>Hasło: </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Wpisz hasło..."
                                            autoComplete="off"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                    />
                            </div>
                            <input type="submit" className='form-button' value="Zaloguj" />
                    </div>
                </form>
            </div>
        }
    </>
    )
}

export default LoginForm
