import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import firebase from "firebase"
import Header from "./Header"
import { getUser, getUserInfo, isProfessor } from "./firestoreUtils"
import userEvent from "@testing-library/user-event"

export default function ProfessorDashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()



  let user = getUserInfo()
// alert(" ProfessorDashboard: " + user)
// alert(" userRole: " + user.role)

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
    <div hidden={user.role != "Professor"}>
    <Header></Header>
    </div>
    <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh", width: "1000px" }}>
          <Card style = {{width: "1500px"}}>

        <Card.Body className="w-100">
          <h2 className="text-center mb-4">Professor Dashboard</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br></br>
          <strong>Name:</strong> {currentUser.name}

          <Link hidden= {user.role != "Professor"}to="/update-profile" className="btn btn-secondary w-100 mt-3">
            Update Profile
          </Link>
          <br/>
          <br/>
          <NavLink hidden={currentUser == null} to="./professorClasses" className= "btn btn-primary w-100">ProfessorClasses</NavLink>
          <br/>
          <br/>
          <NavLink hidden={currentUser == null} to="./createExperiment" className= "btn btn-primary w-100">CreateExperiment</NavLink>
          
        </Card.Body>
      </Card>
</Container>
          
          <div className="w-100 text-center mt-3">
            <Link to = "/" >Homepage</Link>
          </div>
    </>
  )
}
