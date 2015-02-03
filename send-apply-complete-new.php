
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <link href="style.css" rel="stylesheet" type="text/css" />
        
    </head>
    <body>
        <?php
        
        $membership = $_POST['membership'];

		$name = $_POST['name'];
		$date_of_birth = $_POST['date-of-birth'];
		$address_line1 = $_POST['address-line1'];
		$address_line2 = $_POST['address-line2'];
		$postcode = $_POST['postcode'];
		$job_title = $_POST['job-title'];
		$referral = $_POST['referral'];

		$method_of_contact = $_POST['method-of-contact'];
		// -> method-of-contact == phone
			$phone = $_POST['phone'];
			$time_of_contact = $_POST['time-of-contact'];
		
		// -> method-of-contact == email
		$email = $_POST['email'];		
		$social_media = $_POST['social-media'];

		// -> membership == family {
			$family_member = $_POST['family-member'];
			$partner_name = $_POST['partner-name'];
			$partner_date_of_birth = $_POST['partner-date-of-birth'];
			$partner_email = $_POST['partner-email'];
			$partner_phone = $_POST['partner-phone'];
			$partner_job_title = $_POST['partner-job-title'];
			$partner_same_address = $_POST['same-address'];

			// same-address != checked
			$partner_address_line1 = $_POST['partner-address-line1'];
			$partner_address_line2 = $_POST['partner-address-line2'];
			$partner_postcode = $_POST['partner-postcode'];

			$young_rainmakers_workshop =  $_POST['young-rainmakers-workshop'];

			// Child - name clash issue
			$child_family_member = $_POST['family-member'];
			$child1_name = $_POST['child1-name'];
			$child1_date_of_birth = $_POST['child1-date-of-birth'];
			$child1_school = $_POST['child1-school'];
		// }

		$charity_sector_interests = $_POST['charity-sector-interests'];
		$other_charity_sector = $_POST['other-charity-sector'];
		$charities_already_involved_with = $_POST['charities-already-involved-with'];
		$rainmaker_interests = $_POST['rainmaker-interests'];
		$parter_charity_sector_interests = $_POST['partner-charity-sector-interests'];
		$partner_other_charity_sector = $_POST['partner-other-charity-sector'];
		$partner_rainmaker_interests = $_POST['partner-rainmaker-interests'];
			
    // conteúdo da message
    $message .= "Membership: $membership<br/>";
    $message .= "Name: $name<br/>";
		$message .= "Date of birth: $date_of_birth<br/>";
		$message .= "Address Line 1: $address_line1<br/>";
		$message .= "Address Line 2: $address_line2<br/>";
		$message .= "Postcode: $postcode<br/>";
		$message .= "Job Title: $job_title<br/>";
		$message .= "Referral: $referral<br/>";

		$message .= "Method of Contact: $method_of_contact<br/>";		
		$message .= "Phone: $phone<br/>";
		$message .= "Time of contact: $time_of_contact<br/>";
		$message .= "Email: $email<br/>";

		$message .= "Social Media: $social_media<br/>";
		$message .= "Family Member: $family_member<br/>";
		$message .= "Partner Name: $partner_name<br/>";
		$message .= "Partner Date of Birth: $partner_date_of_birth<br/>";
		$message .= "Partner Email: $partner_email<br/>";
		$message .= "Partner Phone: $partner_phone<br/>";
		$message .= "Partner Job Title: $partner_job_title<br/>";
		$message .= "Partner Same Address: $partner_same_address<br/>";

		$message .= "Partner Address Line 1: $partner_address_line1<br/>";
		$message .= "Partner Address Line 2: $partner_address_line2<br/>";
		$message .= "Partner Postcode: $partner_postcode<br/>";
		$message .= "Young rainmakers workshop: $young_rainmakers_workshop<br/>";
		$message .= "Child family member: $child_family_member<br/>";
		$message .= "Child name: $child1_name<br/>";
		$message .= "Child Date of Birth: $child1_date_of_birth<br/>";
		$message .= "Child School: $child1_school<br/>";

		$message .= "Charity Sector Interests: $charity_sector_interests<br/>";
		$message .= "Other Charity Sector: $other_charity_sector<br/>";
		$message .= "Charity already involved with: $charities_already_involved_with<br/>";
		$message .= "Rainmaker interests: $rainmaker_interests<br/>";
		$message .= "Partner Charity Sector Interests: $parter_charity_sector_interests<br/>";
		$message .= "Partner Charity Sector Interests: $partner_other_charity_sector<br/>";
		$message .= "Partner Rainmaker  interests: $partner_rainmaker_interests<br/>";		
						

// Estrutura HTML da message
        $msg = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
        $msg .= "<html>";
        $msg .= "<head>Apply contact form</head>";
        $msg .= "<body style=\"background-color:#fff;\" >";
        $msg .= $message; 
        $msg .= "</body>";
        $msg .= "</html>";

// Abaixo começaremos a utilizar o PHPMailer. 

            /*
              Aqui criamos uma nova instância da classe como $mail.
              Todas as características, funções e métodos da classe
              poderão ser acessados através da variável (objeto) $mail.
             */
            
           //-------------------------mail('contato@escale.com.br', 'Contato Totalmente', $msg);
   
           //sender --> ESTE EMAIL TEM QUE SER VALIDO DO DOMINIO
 	//====================================================
	$email_sender = "niqueeta@gmail.com"; // deve ser um email do dominio
	//====================================================
 
 
	//Configurações do email, ajustar conforme necessidade
	//====================================================
	$email_recipient = "niqueeta@gmail.com"; // qualquer email pode receber os dados
	$email_reply = "$email_recipient";
	$email_subject = "Apply Form Request";
	//====================================================

 
	//Seta os Headers (Alerar somente caso necessario)
	//====================================================
	$email_headers = implode ( "\n",array ( "From: $email_recipient", "Reply-To: $email_reply", "Subject: $email_subject","Return-Path:  $email_sender","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
	//====================================================
 
 
	//Enviando o email
	//====================================================
	if (mail ($email_recipient, $email_subject, nl2br($msg), $email_headers)){
		?>
               <script language= "JavaScript">

                alert('Thank you! We Will be in touch soon');
                location.href="apply.php";
                
                </script>
                <?php
	}
  	else{
		echo "<script>alert('Erro ao enviar: $mail->ErrorInfo');</script>";
                echo "<script>history.go(-1);</script>";
	}
	//====================================================

        ?>

    </body>
</html>