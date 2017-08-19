<?php  ?><?php
require_once ("Email_class.php");
$firstname=$_POST['first_name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$besttime=$_POST['best_time'];
$services=$_POST['services'];

{
	$Sender="donotreply@medicorpnet.com";
	$Recipiant="medinetcorpllc@gmail.com";
	$Bcc = "";
	$Subject="www.medicorpnet.com - contactus details";
	$message.=" \n";
	$message.="Below are the details: \n";
	$message.=" \n";
	$message.=" \n";
	$message.=" \n";
	$message.=" \n";
	$message.="First Name: $firstname\n";
	$message.="Email: $email\n";
	$message.="Phone: $phone\n";
	$message.="Best Time to Call: $besttime\n";
	$message.="Services: $services\n";
	$msg = new Email($Recipiant, $Sender, $Subject);
	$msg->Bcc = $Bcc;
	$msg->TextOnly = true;
	$msg->Content = $message;
	$SendSuccess = $msg->Send();
	header("Location: Thanks.htm");
}
?>
<? ob_flush(); ?>