$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var position = $("input#position").val();
            var file = $("input#file")[0].files[0]

            var formData = new FormData()
            formData.append("name", name)
            formData.append("email", email)
            formData.append("phone", phone)
            formData.append("position", position)
            formData.append("file", file)

            fetch('/.netlify/functions/send-email', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if(response.status == 200) {
                        return response.json()
                    } else {
                        throw response.json()
                    }
                }).then(response => {
                console.log('Success:', JSON.stringify(response))
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>Your email has been sent. </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            })
                .catch(error => {
                    console.error('Error:', error)
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                })

            // $.ajax({
            //     url: "/api/send-email",
            //     type: "POST",
            //     data: {
            //         name,
            //         email,
            //         phone,
            //         position,
            //         files
            //     },
            //     contentType: "multipart/form-data",
            //     cache: false,
            //     success: function() {
            //         // Success message
            //         $('#success').html("<div class='alert alert-success'>");
            //         $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //             .append("</button>");
            //         $('#success > .alert-success')
            //             .append("<strong>Your email has been sent. </strong>");
            //         $('#success > .alert-success')
            //             .append('</div>');
            //
            //         //clear all fields
            //         $('#contactForm').trigger("reset");
            //     },
            //     error: function() {
            //         // Fail message
            //         $('#success').html("<div class='alert alert-danger'>");
            //         $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //             .append("</button>");
            //         $('#success > .alert-danger').append("<strong>Sorry, it seems that my mail server is not responding. Please try again later!");
            //         $('#success > .alert-danger').append('</div>');
            //         //clear all fields
            //         $('#contactForm').trigger("reset");
            //     },
            // })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
