import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'


const Login = ({login}) => {


    const navigate= useNavigate()
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const [formErrors, setFormErrors] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
      e.preventDefault();
      let result = await login(formData)
      
      if(result.success){
      navigate('/companies')
      console.log('done')
        
      }else{
          setFormErrors(result.errors)
      }
      
    }





    


    return (
        <div className="LoginForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h3 className="mb-3">Log In</h3>

          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                      name="username"
                      type='text'
                      className="form-control"
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleChange}
                  />
                </div>
                <button type='submit' onSubmit={handleSubmit}>
                  LOGIN
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    )

}

export default Login;