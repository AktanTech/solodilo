jQuery(function($) {
    // Get the form.
    var form = $('#contactForm');

    // Get the messages div.
    var formMessages = $('#contact_message');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            // $(formMessages).removeClass('error');
            // $(formMessages).addClass('success');
        
            // Set the message text.
            $(formMessages).text(response);
            // $('#contact_form').fadeOut(1000)
            $('#contact_message').fadeIn(1000)
            // alert(response);
        
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            // $('#telefono').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).show();
        
            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).innerText(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });
});