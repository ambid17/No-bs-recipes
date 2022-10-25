import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState('');

    const handleSubmit = (e) =>{
        // Prevent refresh on submit
        e.preventDefault();
        const recipe = {recipeName, ingredients, directions};

        console.log(recipe);

        // save to server
    }

    const addIngredient = (event) => {
        event.preventDefault();
        setIngredients( oldArray => [...oldArray, event.target.value] );
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
                    <Form.Select onChange={ (event) => {setIngredients(event.target.value)} }/>
                    <Form.Control onSubmit={ (event) => {addIngredient(event)} }/>
                </Form.Group>
                <div>
                    {
                        ingredients.map((i) => {
                            return (<p>i</p>)
                        })
                    }
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Directions</Form.Label>
                    <Form.Control rows={6} onChange={ (event) => {setDirections(event.target.value)} }/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Save Recipe
                </Button>
            </Form>
        </div>
    );
}

export default AddRecipe;