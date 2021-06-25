import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from "../../../api/api";
import { useRouter } from 'next/router'

const AdminForm = () => {

    const router = useRouter();

    const [formState, setFormState] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        API.updateContent(formState, router.locale).then(function (response) {
                setFormState(response);
            })
            .catch(function (response) {
                console.log(response);
            });
    };

    const handleInputChange = (fildName) => (event) => {
        setFormState((prevState) => {
            return { ...prevState, [fildName]: event.target.value }
        })
    }

    useEffect(() => {
        API.getContent(router.locale).then(response => {
            setFormState(response);
        })
    }, [router.locale])

    return (
        <Form>
            <FormGroup>
                <Elements>
                    <Label htmlFor="title">Title</Label>
                    <Input name="title" id="title" type="text" autoComplete="off"
                        value={formState.title} onChange={handleInputChange('title')} />
                </Elements>
                <Elements>
                    <Label htmlFor="title_page">Title page</Label>
                    <Input name="title_page" id="title_page" type="text" autoComplete="off"
                        value={formState.title_page} onChange={handleInputChange('title_page')} />
                </Elements>
                <Elements>
                    <Label htmlFor="paragraph">Paragraph</Label>
                    <Input name="paragraph" id="paragraph" type="text" autoComplete="off"
                        value={formState.paragraph} onChange={handleInputChange('paragraph')} />
                </Elements>
                <Elements>
                    <Label htmlFor="image">image</Label>
                    <Input name="image" id="title" type="text" autoComplete="off"
                        value={formState.image} onChange={handleInputChange('image')} />
                </Elements>
                <Elements>
                    <Label htmlFor="description">Description</Label>
                    <Input name="description" id="description" type="text" autoComplete="off"
                        value={formState.description} onChange={handleInputChange('description')} />
                </Elements>
                <ButtonSubmit onClick={handleSubmit} type="button">Submit</ButtonSubmit>
            </FormGroup>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`

const FormGroup = styled.div`
    display: flex;
    flex-flow: column nowrap;
	width: 300px;
	margin-top: 50px;
    margin-bottom: 50px;
    font-family: system-ui;
`;

const Label = styled.label`
	margin-bottom: 0.2em;
    display: block;
`;

const Input = styled.input`
	box-shadow: 0 0 1px gray;
    padding: 5px;
    font-size: 15px;
`;

const Elements = styled.div`
    padding: 5px;
    text-align: center;
`;

const ButtonSubmit = styled.button`
    border: none;
    background-color: black;
    color: white;
    outline: none;
    font-size: 1rem;
    padding: 10px;
    border-radius: 999px;
    cursor: pointer;

`

export default AdminForm;