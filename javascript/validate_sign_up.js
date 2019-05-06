//The signup validation

$(document).ready(function () {
    jQuery.validator.addMethod("lettersAndNumbers", function(value, element) {

        return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
    }, "Please enter only letters and numbers");

    jQuery.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || /^[a-zA-Z]+$/.test(value);
    }, "Please enter only letters");
    jQuery.validator.addMethod("unique", function(value, element) {
        for(var i=0;i<usersArr.length;i++)
        {
            if(usersArr[i].username === value)
                return false;
        }
        return true;
    }, "This username is already being used");

    $('#sign_up_form').validate({ // initialize the plugin
        rules: {
            username: {
                required: true,
                unique: true
            },
            password: {
                required: true,
                minlength: 8,
                lettersAndNumbers: true
            },
            fName: {
                required: true,
                letters: true
            },
            lName: {
                required: true,
                letters: true
            },
            email: {
                required: true,
                email: true
            }
        },
        submitHandler: function (form) {

            Submit();

        }
    });
});
