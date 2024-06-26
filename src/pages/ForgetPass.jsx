import React from 'react';

export default function ForgetPass() {
  return (
    <div className="pass-container">
      <div className="pass-card animated fadeInDown">
        <h5 className="card-header">Forgot Password</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input type="password" className="form-control" placeholder="Enter your new password" required />
            </div>
            <div className="text-right">
              <button className='create-btn-create' >Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}