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

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);
        // Need to do something to log user in.
        this.props.signinUser({ email, password });
    }

    renderInput({ label, ...field }) {
        return (
            <fieldset className="form-group">
                <label>{label}:</label>
                <input {...field.input } type={field.type} className="form-control" />
                {field.touched && field.error && <span className="error">{field.error}</span>}
            </fieldset> 
        );
    }

    renderAlert() {
        if (this.props.errorMessage) {
            <div className="alert alert-danger">
                <strong>Oops!</strong> {this.props.errorMessage}
            </div>
        }
    }

    render() {
        const { handleSubmit } = this.props; // No fields prop

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                    name="email"            // Specify field name
                    label="Email"
                    component={this.renderInput} // Specify render component above
                    type="text"             // "type" prop passed to renderInput 
                />          

                <Field
                    name="password"         // Specify field name
                    label="Password"
                    component={this.renderInput} // Reuse same render component
                    type="password"         // "type" prop passed to renderInput
                />

                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

Signin = connect(mapStateToProps, actions)(Signin);

export default reduxForm({
    form: 'signin'
})(Signin);