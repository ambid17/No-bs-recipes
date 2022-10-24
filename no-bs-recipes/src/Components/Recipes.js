import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ArrowRight } from 'react-bootstrap-icons';

const Recipes = () => {
    return (
        <div>
            <h1>Recipes</h1>

            <Container fluid>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <ArrowRight />
                            <Card.Body>
                                <Card.Title>Chicken Masala</Card.Title>
                                <Card.Text>
                                    Spicy chicken cream soup.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Chicken Parmesean</Card.Title>
                                <Card.Text>
                                    Some sweet juicy chicken with some tasty marinara.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <ArrowRight />
                            <Card.Body>
                                <Card.Title>Chicken Masala</Card.Title>
                                <Card.Text>
                                    Spicy chicken cream soup.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Chicken Parmesean</Card.Title>
                                <Card.Text>
                                    Some sweet juicy chicken with some tasty marinara.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Recipes;