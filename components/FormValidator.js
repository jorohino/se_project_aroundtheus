//first parameter is a settings object that stores selectors and form classes,
//// and the second one takes a form element to be validated.
class FormValidator {
    constructor(config, formSelector) {
        this._config = config;
        this._formSelector = formSelector;
    }

    //private method checking the field's validity
    _checkInputValidity(formEl, inputEl, config) {
        if(!inputEl.validity.valid) {
            return showInputError(formEl, inputEl, config)
        }
        hideInputError(formEl, inputEl, config);
    }

    //private method changing the state of the Submit button
    _toggleSubmitButton() {
        //submission button for all forms should be disabled whenever one or more form fields are invalid
    }

    //private method adding all the needed handlers
    _setEventListeners() {

    }

    //public method which enables form validation
    enableValidation(config) {

    }

    //public method to either disable the state of the button and reset form validation 
    //(including the state of the submit button)
    resetValidation() {
        //after SUCCESSFULLY submitting the card form, 
        ////the form fields should be cleared and the submit button should be disabled

        //for the edit profile modal, the button must be disabled after submission. 
        ////When the user opens the modal again, it will already be filled with valid input values

        //reset the validation error messages on the card modal
    }

    //create an instance of the FormValidator class for each form that should be validated
}