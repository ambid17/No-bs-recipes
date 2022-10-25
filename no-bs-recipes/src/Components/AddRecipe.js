import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import EditableList from './EditableList';
import { useState } from 'react';

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) =>{
        // Prevent refresh on submit
        e.preventDefault();
        const recipe = {recipeName, ingredients, instructions};

        console.log(recipe);
    }

    return (
        <div>
            <h1>Add a Recipe</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Chicken Tikka Masala" 
                        onChange={ (event) => {setRecipeName(event.target.value)} }
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={ (event) => {setIngredients(event.target.value)} }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Instructions</Form.Label>
                    <Form.Control as="textarea" rows={6} onChange={ (event) => {setInstructions(event.target.value)} }/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Save Recipe
                </Button>
            </Form>
        </div>
    );
}

export default AddRecipe;