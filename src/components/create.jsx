import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
// import { useHistory } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Create() {
    let history = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');
    // console.log(checkbox)
    const postData = () => {
        axios.post(`https://api-p-em-g-m-03.herokuapp.com/rotas`, {
            name,
            description,
            distance
        }).then(() => {
            history('/read');
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Distância</label>
                    <input placeholder='Distância' onChange={(e) => setDistance(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Adicionar</Button>
            </Form>
        </div>
    )
}

export default Create;
