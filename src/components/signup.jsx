import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {auth, app} from './Firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";


function Signup(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   function userSignup(e){
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // props.setIsUser(true)
      alert(' new user created successfully')
    })
    .catch((error) => {
      console.log(error)
    });

    handleClose()
   }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        signUp
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <input type="email" value={email} placeholder='email' id='email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userSignup }>
            signup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signup ;