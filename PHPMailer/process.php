<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer;
$mail->isSMTP(); 
$email = $_REQUEST['email'] ;
$body = $_REQUEST['body'] ;
$subject = $_REQUEST['subject'] ;
$filename = $_REQUEST['filename'] ;
$data = $_REQUEST['data'] ;


// Form Data
/* $fullname = $_REQUEST['fullname'] ;
$email = $_REQUEST['email'] ;
$mobile = $_REQUEST['mobile'];
$category = $_REQUEST['category'] ;
$message = $_REQUEST['message'] ; */

/* $mailbody = 'New Lead Enquiry' . PHP_EOL . PHP_EOL .
            'Name: ' . $fullname . '' . PHP_EOL .
            'Mobile:' . $mobile . '' . PHP_EOL .
            'Interested In: ' . $category . '' . PHP_EOL .
            'Message: ' . $message . '' . PHP_EOL; */

    
$mail->isSMTP();                                      // Set mailer to use SMTP
$mailbody ='test';
$mail->Host = "smtp.gmail.com"; 
$mail->Port = "587"; // typically 587 
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = "resilience@tlexinstitute.com";
$mail->Password = "ziwqe7-kiwcov-vefhiV";
$mail->SMTPDebug = 2; 
$mail->setFrom("resilience@tlexinstitute.com", "Tlex Resilience");
$mail->addAddress($email, );
$mail->Subject = $subject ;
$mail->msgHTML($body); // remove if you do not want to send HTML email
$mail->AltBody = 'HTML not supported';

$contact_image_data=$data;
$subdata = substr($contact_image_data, strpos($contact_image_data, ","));

$encoding = "base64"; 
$type = "image/png";
$mail->AddStringAttachment(base64_decode($subdata), $filename, $encoding, $type);   


//$mail->addAttachment('docs/brochure.pdf'); //Attachment, can be skipped

$mail->send();
/* 
$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'miradario@gurudevelopers.com.ar'; // SMTP username
$mail->Password = 'mira4200'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to
$mail->SMTPDebug = 2; 
$mail->setFrom('miradario@gurudevelopers.com.ar', 'WebMaster'); // Admin ID
$mail->addAddress('miradario@gurudevelopers.com.ar', 'Business Owner'); // Business Owner ID
$mail->addReplyTo('miradario@gmail.com', 'daro'); // Form Submitter's ID

//$mail->addReplyTo($email, $fullname); // Form Submitter's ID

$mail->isHTML(false); // Set email format to HTML

$mail->Subject = 'New Lead Enquiry';
$mail->Body    = 'hola'; // $mailbody;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
} 
 */