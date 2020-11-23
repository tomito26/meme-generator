import './Header.css'
import {Nav,Navbar,} from 'react-bootstrap'
function Header(){
    return (
      <div>
        <header>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <img
                  className="img-fluid"
                  style={{ height: "100px" ,width:"100px"}}
                  src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                  alt="meme"
                />
                <Nav.Link href="#pricing" className="pt-3 ml-3">
                  <h1>Meme Generator</h1>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <div className="p-3">
                    <img  className="img-fluid" style={{height:"100px"}}  src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="meme" />
                </div>
                <h3>Meme Generator</h3> */}
        </header>
      </div>
    );
}

export default Header