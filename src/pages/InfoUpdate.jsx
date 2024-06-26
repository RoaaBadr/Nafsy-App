import React from 'react';

export default function InfoUpdate() {
  return (
    <div className="pass-container">
      <div className="pass-card animated fadeInDown">
        <h5 className="card-header">Update User Information</h5>
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
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Enter your last name" required />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input type="number" className="form-control" placeholder="Enter your age" required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter your phone number" required />
            </div>
            <div className="text-right">
              <button className='create-btn-create' >Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}