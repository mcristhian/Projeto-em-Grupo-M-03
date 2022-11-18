import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [distance, setDistance] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('Name'));
        setLastName(localStorage.getItem('Description'));
        setCheckbox(localStorage.getItem('Distance'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://api-p-em-g-m-03.herokuapp.com/rotas/${id}`, {
            Name,
            Description,
            Distance
        }).then(() => {
            history('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Descrição</label>
                    <input placeholder='Descrição' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Distância</label>
                    <input placeholder='Distância' value={distance} onChange={(e) => setDistance(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Atualizar</Button>
            </Form>
        </div>
    )
}

export default Update;
