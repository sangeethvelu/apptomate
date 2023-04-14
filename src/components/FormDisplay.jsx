import React from "react";
import { useSelector } from "react-redux";

function FormDisplay() {

    const formData = useSelector(state => state.form.formData);

    console.log(formData);

    return (
        <div>
            <div>
                <p>First Name: {formData.firstName}</p>
                <p>Middle Name: {formData.middleName}</p>
                <p>Last Name: {formData.lastName}</p>
                <p>Company: {formData.company}</p>
                <p>Phone: {formData.phone}</p>
                <p>Email: {formData.email}</p>
            </div>
        </div>
    )
}

export default FormDisplay;