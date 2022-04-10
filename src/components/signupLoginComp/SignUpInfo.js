import React, { useRef, useState } from "react"
import {useAuth} from "../../contexts/AuthContext"
import {Alert} from "react-bootstrap"



  function SignUpInfo({ formData, setFormData }) {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e){
    e.prevendDefault()

    if(passwordRef.current.value!== passwordConfirmRef.current.value){
      return setError('Les mots de passe ne sont pas similaires')
    }

    try {
      setError('')
      setLoading(true)
     await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError ('Problème de création de compte')
    }
    setLoading(false)
  }
  
  return (
    <div className="sign-up-container" onSubmit={handleSubmit}>
      {error && <Alert variant = "danger">{error}</Alert>}
      <input
        type="email"
        placeholder="Email..."
        value={formData.email}
        ref = {emailRef}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
        required
      />
      <input
        type="password"
        placeholder="Mot de passe..."
        value={formData.password}
        ref = {passwordRef}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        required
      />
      <input
        type="password"
        ref = {passwordConfirmRef}
        placeholder="Confirmation mot de passe..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        required
      />  
      <div className="w-100">
        Vous avez déjà un compte ? <a href="" /> Connetez vous! <a/>
      </div>
    </div>
  );
}

export default  SignUpInfo