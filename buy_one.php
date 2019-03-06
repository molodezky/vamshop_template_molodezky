<?php
include ('includes/application_top.php');

// check if fields passed are empty
if(empty($_POST['namebo'])   ||
   empty($_POST['phonebo']))
   {
echo "No arguments Provided!";
return false;
   }

$spam_flag = false;

		if ( trim( $_POST['anti_bot_qbo'] ) != date('Y') ) { // answer is wrong - maybe spam
			$spam_flag = true;
		}
		if ( ! empty( $_POST['anti_bot_e_email_urlbo'] ) ) { // field is not empty - maybe spam
			$spam_flag = true;
		}

if ($spam_flag == false) {

$namebo = $_POST['namebo'];
$phonebo = $_POST['phonebo'];
$productbo = $_POST['productbo'];
$product_urlbo = 'http://'.$_POST['product_urlbo'];
// create email body and send it 
//$to = EMAIL_SUPPORT_ADDRESS; // put your email
$to = 'molodezky@ukr.net'; // put your email
$email_subject = "Вам отправлена форма - Быстрый заказ: $namebo";
$email_body = "Заполнена форма \"Быстрый заказ\". \n\n".
 "Данные отправителя:\n\nИмя: $namebo \n".
 "Телефон: $phonebo \n".
 "Товар: $productbo \n".
 "Страница товара: $product_urlbo";
$headers = "From: molodezky@ukr.net\n";
$headers .= "Reply-To:";
mail($to,$email_subject,$email_body,$headers);
return true; 

}
?>
