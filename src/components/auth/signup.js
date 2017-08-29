import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // import Field
import { connect } from 'react-redux';
import * as actions from '../../actions';

// const renderInput = field => // Define stateless component to render input and errors
//     <div>
//         <input {...field.input} type={field.type} /> 
//         {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
//     </div> 
    // Type specified below in <Field>

class Signup extends Component {
    handleFormSubmit(formProps) {
        // Call action creator to sign up the user!
        this.props.signupUser(formProps);
    }

    renderInput({ label, ...field }) {
        return (
            <fieldset className="form-group">
                <label>{label}:</label>
                <input {...field.input } type={field.type} className="form-control" />
                {field.touched && field.errors && <span className="error">{field.error}</span>}
            </fieldset>
        )
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {

        const { handleSubmit } = this.props; // No fields prop

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="email" label="Email" component={this.renderInput} type="text" />
                <Field name="password" label="Password" component={this.renderInput} type="password" />
                <Field name="passwordConfirm" label="Confirm Password" component={this.renderInput} type="password" />
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign up!</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please confirm your password';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error}
}

Signup = connect(mapStateToProps, actions)(Signup);

export default reduxForm({
    form: 'signup',
    validate
})(Signup);