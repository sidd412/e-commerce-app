import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import '../style.css'
///////////////////////////////////////////////////////
function TourTable() {
  return (
    <>
    <h1>Your Tours</h1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Description</th>
          <th>Booking</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
        <tr>
          <td>16 May</td>
          <td>Delhi</td>
          <td>for travelling</td>
          <td><button className='bt' >Book Now</button></td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}
/////////////////////////////////////////////////////////////////

export default function Home() {
  return (
    <div id='home'>
      <div id='dis'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet reprehenderit impedit maxime ex aspernatur labore quas mollitia qui modi eius, asperiores earum vitae hic consequuntur in non quaerat, error a. Iste odit itaque sed quae, illum necessitatibus illo totam minima laborum, nihil perferendis? Esse labore nulla veritatis deserunt obcaecati quis neque modi voluptatibus facere adipisci molestias distinctio vel laborum laboriosam expedita eligendi maiores perspiciatis temporibus id, possimus soluta! Ea eos laboriosam, necessitatibus et ut mollitia, blanditiis unde voluptatibus ipsum modi quos laudantium assumenda voluptate, beatae veritatis consequatur. Pariatur, expedita a vel exercitationem deserunt aut perspiciatis nam tenetur molestiae nulla asperiores.</div>
      <hr style={{color:"black"}} />
      <div id='tours'><TourTable/></div>
    </div>
  )
}
