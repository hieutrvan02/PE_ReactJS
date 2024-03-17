import React, { useState } from "react";

const ContactForm = () => {

    const [contact, setContact] = useState({
        title: "",
        des: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { title, des } = contact;

    const onInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const validateTitle = (value) => {
        if (!value) {
            setErrorMessage("Title is required");
        } else {
            setErrorMessage("");
        }
    };

    const validateDes = (value) => {
        if (!value) {
            setErrorMessage("Description is required");
        } else {
            setErrorMessage("");
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!title || !des) {
            setErrorMessage("Please enter both title and description");
            return;
        }
        if (errorMessage) {
            return;
        }
        try {
            alert(JSON.stringify(contact))
            setSuccessMessage("Contact input successfully!");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="display-4 text-center mb-5">Contact Form</h1>
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={onSubmit}>
                    <div className="form-row align-items-center">
                        <div className="col-sm-12 my-1">
                            <label className="text-center" htmlFor="inlineFormInputTilte">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputTilte"
                                placeholder="Enter title"
                                name="title"
                                value={title}
                                onChange={(e) => {
                                    onInputChange(e);
                                    validateTitle(e.target.value);
                                }}
                                onBlur={(e) => validateTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-sm-12 my-1">
                            <label className="block" htmlFor="inlineFormInputGroupDescript">
                                Description
                            </label>
                            <div className="input-group">
                                <textarea
                                    rows={6}
                                    className="form-control"
                                    id="inlineFormInputGroupDescript"
                                    placeholder="Enter Description"
                                    name="des"
                                    value={des}
                                    onChange={(e) => {
                                        onInputChange(e);
                                        validateDes(e.target.value);
                                    }}
                                    onBlur={(e) => validateDes(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
