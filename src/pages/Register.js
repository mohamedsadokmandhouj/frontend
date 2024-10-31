import React from 'react'

function Register() {
  return (

    <div className="page page-center">
      <div className="container container-tight py-4">
        
        <form className="card card-md" action="./" method="get" autoComplete="off" noValidate>
          <div className="card-body">
            <h2 className="card-title text-center mb-4  title-color ">Create new account</h2>
            <div className="mb-3">
              <label className="form-label label-red">Name</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label className="form-label label-red">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
              <label className="form-label label-red">Password</label>
              <div className="input-group input-group-flat">
                <input type="password" className="form-control" placeholder="Password" autoComplete="off" />
                <span className="input-group-text">
                  <a href="#" className="link-secondary" data-bs-toggle="tooltip" aria-label="Show password" data-bs-original-title="Show password">{/* Download SVG icon from http://tabler-icons.io/i/eye */}
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-check">
                <input type="checkbox" className="form-check-input" />
               </label>
            </div>
            <div className="form-footer">
              <button 
              type="submit"
              style={{ backgroundColor: "red", borderColor: "red" }}
               className="btn btn-primary w-100">Create new account</button>
            </div>
          </div>
        </form>
        <div className="text-center text-secondary mt-3">
          Already have account? <a href ="/login" tabIndex={-1}>Sign in</a>
        </div>
      </div>
    </div>







  )
}

export default Register