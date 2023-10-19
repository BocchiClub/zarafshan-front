<?php
$name = $_POST['name'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$company = htmlspecialchars($company);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

if (mail("darisha6602@gmail.com", "Заявка с сайта",
"Имя: ".$name.
".Компания: ".$company.
".Телефон: ".$phone.
".Сообщение: ".$message,
"From:.example@mail.ru \r\n"))
{ 
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>
