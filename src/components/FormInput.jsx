import React from "react";
import styles from "./FormInput.module.css";
import { formActions } from "../store/slices/FormSlice";
import { useDispatch } from "react-redux";

function FormInput() {

    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        firstName: "",
        middleName: "",
        lastName: "",
        company: "",
        phone: "",
        email: ""
    });

    function handleFormChange(event) {
        const {name, value} = event.target;

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        dispatch(formActions.submitForm(formData));
        setFormData(() => {
            return {
                firstName: "",
                middleName: "",
                lastName: "",
                company: "",
                phone: "",
                email: ""
            }
        })
    }

    console.log(formData);

    return (
        <div className={styles["form-container"]}> 
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} required/>
                <label htmlFor="middle_name">Middle Name</label>
                <input type="text" name="middleName" value={formData.middleName} onChange={handleFormChange} required/>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} required/>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" value={formData.company} onChange={handleFormChange} required/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleFormChange} required/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} required/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormInput;