import React from "react";
import ContactForm from './ContactForm';
import NewsList from "./NewsList";

const Contact = () => {
    return (
        <div className='d-flex container-fluid'>
            <ContactForm />
            <NewsList />
        </div>
    );
};

export default Contact;