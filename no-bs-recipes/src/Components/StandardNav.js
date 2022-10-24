import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function StandardNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">No BS Recipes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/" variant="dark">Recipes</Nav.Link>
                    <Nav.Link href="/add">Create</Nav.Link>
                    <Nav.Link href="/groceries">Groceries</Nav.Link>
                </Nav>
            </Container>
        </Navbar >
    );
}

export default StandardNav;