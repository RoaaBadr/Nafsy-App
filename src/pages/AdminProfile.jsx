import React from "react";
import Navbar from "../sections/Navbar";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function AdminProfile() {
  return (
    <>
      <Navbar />
      <section className="boarder">
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCol className="d-flex justify-content-center mb-2 my-5">
                  <MDBCardText>Profile Image</MDBCardText>
                </MDBCol>

                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt="avatar"
                    className="rounded-circle border"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn outline className="ms-1 my-3">
                      Sign out
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
              <MDBCol className="d-flex justify-content-center mb-2 my-5">
                  <MDBCardText>User Information</MDBCardText>
                </MDBCol>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        First + Last Name
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">User Age</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        example@example.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
              <MDBCol className="d-flex justify-content-center mb-2 my-5">
                  <MDBCardText>Admin Functions</MDBCardText>
                </MDBCol>
                <MDBCardBody>
                  
                  <MDBRow>
                    
                    <MDBCol sm="3">
                      
                      <MDBCardText>Articles</MDBCardText>
                      {/*Articles List */}
                    </MDBCol>

                    <hr className="py-4" />
                    <div className="d-flex justify-content-end mb-2">
                    <MDBBtn outline className="ms-1 my-3"
                    style={{border: "#8B4513 2px solid" , color:"#8B4513"}}>
                      Create New
                    </MDBBtn>
                    <MDBBtn outline className="ms-1 my-3"
                    style={{border: "red 2px solid" , color:"red"}}>
                      Delete
                    </MDBBtn>
                  </div>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Viseos</MDBCardText>
                      {/*Videos List */}
                    </MDBCol>
                    <hr className="py-4" />
                    <div className="d-flex justify-content-end mb-2">
                    <MDBBtn outline className="ms-1 my-3"
                    style={{border: "#8B4513 2px solid" , color:"#8B4513"}}>
                      Create New
                    </MDBBtn>
                    <MDBBtn outline className="ms-1 my-3"
                    style={{border: "red 2px solid" , color:"red"}}>
                      Delete
                    </MDBBtn>
                  </div>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
