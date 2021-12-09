import React from 'react'
import SignUp from './components/SignUp'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Container classname="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 p-3" style={{ maxwidth: "400px" }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  )
}

