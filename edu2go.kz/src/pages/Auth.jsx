import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Auth.css';

export function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!formData.email || !formData.password) {
            setError("Please fill in all required fields.");
            setLoading(false);
            return;
        }

        if(!isLogin && formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const url = isLogin ? "#" : "#";
            const response = await axios.post(url, {
                email: formData.email,
                password: formData.password,
            });

            const { token } = response.data;

            localStorage.setItem("authToken", token);

            setFormData({ email: "", password: "", confirmPassword: "" });

            navigate("/dashboard");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className = "authContainer">
            <motion.div
              className = "authBox"
              initial = {{ opacity: 0, y: 50 }}
              animate = {{ opacity: 1, y: 0 }}
              transition = {{ duration: 0.5 }}
            >
                <h2 className = "authTitle">{isLogin ? "Sign In" : "Sign Up"}</h2>

                <AnimatePresence mode='wait'>
                    <motion.form
                      key = { isLogin ? "login" : "register" }
                      initial = {{ opacity: 0, x: isLogin ? -50 : 50 }}
                      animate = {{ opacity: 1, x: 0 }}
                      exit = {{ opacity: 0, x: isLogin ? 50 : -50 }}
                      transition = {{duration: 0.3 }}
                      onSubmit = { handleSubmit }
                      className = "authForm"
                    >
                        <div className = "formGroup">
                            <label htmlFor='email'>Email</label>
                            <input 
                              type = "email"
                              id = "email"
                              name = "email"
                              value = { formData.email }
                              onChange = { handleChange }
                              placeholder = "Enter your email"
                              required
                            />
                        </div>

                        <div className = "formGroup">
                            <label htmlFor='password'>Password</label>
                            <input 
                              type = "password"
                              id = "password"
                              name = "password"
                              value = { formData.password }
                              onChange = { handleChange }
                              placeholder = "Enter your password"
                              required
                            />
                        </div>

                        {!isLogin && (
                            <div className = "formGroup">
                               <label htmlFor='confirmPasword'>Confirm Pasword</label>
                                   <input 
                              type = "confirmPasword"
                              id = "confirmPasword"
                              name = "confirmPasword"
                              value = { formData.confirmPasword }
                              onChange = { handleChange }
                              placeholder = "Confirm your password"
                              required
                                   />
                        </div>
                        )}

                        {error && <p className = "errorMessage">{error}</p>}

                        <button type = "submit" className = "authButton" disabled = {loading}>
                            {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
                        </button>
                    </motion.form>
                </AnimatePresence>

                <p className = "authSwitch">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                       onClick = { () => setIsLogin(!isLogin)}
                       className = "switchButton"
                    >
                        {isLogin ? "Sign Up" : "Sign In"}
                    </button>
                </p>
            </motion.div>
        </div>
    );
}