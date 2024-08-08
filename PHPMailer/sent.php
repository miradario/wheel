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
$filename = $_REQUEST['filename'] ;
$pdf = $_REQUEST['pdf'] ;  

//$email = 'miradario@gmail.com';


$mailbody =  "Your workflow design is ready!<Br /> Thanks for taking the time to configure your ProMAX workflow design! Your design and quote are attached. <Br /> If you have any additional questions or are ready to process your order please book time <a href='https://www.promax.com/jody'> here </a> <Br /> You can check your budget <a href="; // + link + "> here </a><Br />  Best,"

$mail->isSMTP();                                      // Set mailer to use SMTP
$mailbody =  $_REQUEST['body'] ;
$mail->Host = "smtp.office365.com"; 
$mail->Port = "587"; // typically 587 
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = "info@promax.com";
$mail->Password = "Calcsafe8820!";
$mail->SMTPDebug = 2; 
$mail->setFrom("info@promax.com", "ProMAX Info");
$mail->addAddress($email );
$mail->Subject = 'Your ProMAX Workflow Design';
$mail->msgHTML($mailbody); // remove if you do not want to send HTML email
$mail->AltBody = 'HTML not supported';

/* $contact_image_data=$pdf;
$data = substr($contact_image_data, strpos($contact_image_data, ","));
$encoding = "base64"; 
$type = "image/png";
$mail->AddStringAttachment(base64_decode($data), $filename, $encoding, $type);   */

$base64 = 'data:image/png;base64,' . base64_encode($pdf);
$encoding = "base64"; 
$type = "image/png";
//$mail->AddStringAttachment($pdf, $filename, $encoding, $type);

 $contact_image_data=$pdf;
$subdata = substr($contact_image_data, strpos($contact_image_data, ","));

$encoding = "base64"; 
$type = "image/png"; 
//$mail->AddStringAttachment($subdata, $filename, $encoding, $type);  


//$mail->addAttachment('docs/brochure.pdf'); //Attachment, can be skipped

$mail->send();
