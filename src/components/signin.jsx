import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {auth, app} from './Firebase'
import {signInWithEmailAndPassword } from "firebase/auth";


function Signin(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  function userSignin(e){
    e.preventDefault() ;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      props.setIsUser(true)
    })
    .catch((error) => {
       console.log(error)
    });

    handleClose()
   }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        signIn
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <input type="email" value={email} placeholder='email' id='email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
            <input type="password" value={password} placeholder='password' onChange={(e) =>setPassword(e.target.value)} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userSignin }>
           signin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Signin ;