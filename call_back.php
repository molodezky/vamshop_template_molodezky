<?php
include ('includes/application_top.php');

// check if fields passed are empty
if(empty($_POST['name'])   ||
   empty($_POST['phone']))
   {
echo "No arguments Provided!";
return false;
   }

$spam_flag = false;

		if ( trim( $_POST['anti_bot_q'] ) != date('Y') ) { // answer is wrong - maybe spam
			$spam_flag = true;
		}
		if ( ! empty( $_POST['anti_bot_e_email_url'] ) ) { // field is not empty - maybe spam
			$spam_flag = true;
		}

if ($spam_flag == false) {

$name = $_POST['name'];
$phone = $_POST['phone'];
// create email body and send it 
$to = EMAIL_SUPPORT_ADDRESS; // put your email
$email_subject = "Вам отправлена форма - Перезвоните мне: $name";
$email_body = "Заполнена форма \"Перезвоните мне\". \n\n".
 "Данные отправителя:\n\nИмя: $name \n".
 "Телефон: $phone";
$headers = "From: " .EMAIL_SUPPORT_ADDRESS . "\n";
$headers .= "Reply-To:";
mail($to,$email_subject,$email_body,$headers);
return true; 

}
?>
