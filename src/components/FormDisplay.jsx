import React from "react";
import { useSelector } from "react-redux";
import styles from "./FormDisplay.module.css";

function FormDisplay() {

    const formData = useSelector(state => state.form.formData);

    console.log(formData);

    return (
        <div className={styles["result-container"]}>
            <div>
                <p><span>First Name:</span>{formData.firstName}</p>
                <p><span>Middle Name:</span>{formData.middleName}</p>
                <p><span>Last Name:</span>{formData.lastName}</p>
                <p><span>Company:</span> {formData.company}</p>
                <p><span>Phone:</span> {formData.phone}</p>
                <p><span>Email:</span> {formData.email}</p>
            </div>
        </div>
    )
}

export default FormDisplay;