import React from 'react';
import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";
import './App.css'; // Ensure this file contains styles for the forms

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>React Form Handling</h1>
        </header>
        
        <section className="form-section">
          {/* Controlled Component Section */}
          <div className="form-container">
            <h2>User Registration (Controlled Component)</h2>
            <RegistrationForm />
          </div>

          {/* Formik Form Section */}
          <div className="form-container">
            <h2>User Registration with Formik</h2>
            <FormikForm />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;