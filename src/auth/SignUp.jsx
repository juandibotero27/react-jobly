import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


const SignUp = ({signup}) => {
  const navigate = useNavigate()

   

    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const [formErrors, setFormErrors] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
      }

    async function handleSubmit(e) {
      e.preventDefault();
      let result = await signup(formData)
      if(result.success) {
        navigate('/companies');
        console.log('done')
      }else {
        setFormErrors(result.errors)
      }
      }


        

    return (
        <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h2 className="mb-3">Sign Up</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name='username'
                    value={formData.username}
                    className='form-control'
                    onChange={handleChange}
                 
                    
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name='password'
                    type='password'
                    value={formData.password}
                    className='form-control'
                    onChange={handleChange}
                    
                  />
                </div>

                <div className="form-group">
                  <label>First name</label>
                  <input
                    name='firstName'
                    className='form-control'
                    value={formData.firstName}
                    onChange={handleChange}
                    

                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input
                      name="lastName"
                      value={formData.lastName}
                      className='form-control'
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    
                  />
                </div>
                <button onSubmit={handleSubmit} type='submit'>SUBMIT</button>

              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
export default SignUp;