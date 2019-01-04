<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL); 
// specify your email here

$to = 'victorox100@gmail.com';

// Assigning data from $_POST array to variables
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$from = $_POST['email'];}
if (isset($_POST['hade'])) {$hade = trim(stripcslashes($_POST['hade']));}
if (isset($_POST['message'])) {$message = $_POST['message'];}

if($hade == ''){
    // Construct subject of the email
    $subject = 'Cotizacion de ' . $name;

    // Construct email body
    $body_message = 'Name: ' . $name . "\r\n" . 'Email: ' . $from . "\r\n" . 'Message: ' . $message . "\r\n";

    // Construct headers of the message
    $headers = 'From: ' . $from . "\r\n";

    $mail_sent = mail($to, $subject, $body_message, $headers);

    if ($mail_sent == true) {
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
        
    } else {
        // http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
else{
    echo "Oops posible Spam! Something went wrong and we couldn't send your message.";
}
?>
