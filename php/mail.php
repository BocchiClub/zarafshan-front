<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$company = $_POST['company']
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message']                         

$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               
$mail->Username = 'darina_rustamova@mail.ru'; // логин от почты с которой будут отправляться письма
$mail->Password = 'Tas-ix319';        // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                     

$mail->setFrom('darina_rustamova@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('darishkarustamova@gmail.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Компания этого пользователя: ' .$company. '<br>Почта этого пользователя: ' .$email. '<br>Сообщение: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'thank-you');
}

?>