import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import EditableList from './EditableList';

const AddRecipe = () => {
    return (
        <div>
            <h1>Add a Recipe</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Chicken Tikka Masala" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Save Recipe
                </Button>
            </Form>
        </div>
    );
}

export default AddRecipe;