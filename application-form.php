<?php
// Sends the users application form to EMAIL_RECIPIENT.

define('EMAIL_RECIPIENT', 'friends@rainmakerfoundation.org');

error_reporting(0);

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
$child1_name = $_POST['child1-name'];
$child1_date_of_birth = $_POST['child1-date-of-birth'];
$child1_school = $_POST['child1-school'];
// }

$charity_sector_interests = implode('<br>', $_POST['charity-sector-interests']);
$other_charity_sector = $_POST['other-charity-sector'];
$charities_already_involved_with = $_POST['charities-already-involved-with'];

$rainmaker_interests = implode('<br>', $_POST['rainmaker-interests']);
$areas_of_expertise = implode('<br>', $_POST['areas-of-expertise']);
$other_area_of_expertise = $_POST['other-area-of-expertise'];

$parter_charity_sector_interests = implode('<br>', $_POST['partner-charity-sector-interests']);
$partner_other_charity_sector = $_POST['partner-other-charity-sector'];

$partner_rainmaker_interests = implode('<br>', $_POST['partner-rainmaker-interests']);
$partner_areas_of_expertise = implode('<br>', $_POST['partner-areas-of-expertise']);
$partner_other_area_of_expertise = $_POST['partner-other-area-of-expertise'];

$donation_frequency = $_POST['donation-frequency'];
$donation_amount = $_POST['donation-amount'];
$donation_method = $_POST['donation-method'];

$gift_aid_consent = $_POST['gift-aid-consent'];
$photo_consent = $_POST['photo-consent'];

$message = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
$message .= "<html>";
$message .= "<head>New application form received</head>";
$message .= "<body style=\"background-color:#fff;\" >";

// Message content.
$message = "<p><b>Membership:</b><br> $membership </p>";
$message .= "<p><b>Name:</b><br> $name </p>";
$message .= "<p><b>Date of birth:</b><br> $date_of_birth </p>";
$message .= "<p><b>Address:</b><br> $address_line1";
$message .= "<br>$address_line2 </p>";
$message .= "<p><b>Postcode:</b><br> $postcode </p>";
$message .= "<p><b>Job Title:</b><br> $job_title </p>";
$message .= "<p><b>Referral:</b><br> $referral </p>";

$message .= "<p><b>Method of Contact:</b><br> $method_of_contact </p>";		
$message .= "<p><b>Phone:</b><br> $phone </p>";
$message .= "<p><b>Time of contact:</b><br> $time_of_contact </p>";
$message .= "<p><b>Email:</b><br> $email </p>";
$message .= "<p><b>Social Media:</b><br> $social_media </p>";

$message .= "<p><b>Partner Name:</b><br> $partner_name </p>";
$message .= "<p><b>Partner Date of Birth:</b><br> $partner_date_of_birth </p>";
$message .= "<p><b>Partner Email:</b><br> $partner_email </p>";
$message .= "<p><b>Partner Phone:</b><br> $partner_phone </p>";
$message .= "<p><b>Partner Job Title:</b><br> $partner_job_title </p>";
$message .= "<p><b>Partner Same Address:</b><br> $partner_same_address </p>";

$message .= "<p><b>Partner Address:</b><br> $partner_address_line1";
$message .= "<br>$partner_address_line2<br/> </p>";
$message .= "<p><b>Partner Postcode:</b><br> $partner_postcode </p>";
$message .= "<p><b>Young rainmakers workshop:</b><br> $young_rainmakers_workshop </p>";
$message .= "<p><b>Child name:</b><br> $child1_name </p>";
$message .= "<p><b>Child Date of Birth:</b><br> $child1_date_of_birth </p>";
$message .= "<p><b>Child School:</b><br> $child1_school </p>";

$message .= "<p><b>Charity Sector Interests:</b><br> $charity_sector_interests";
$message .= "<br><b>Other Charity Sector:</b><br> $other_charity_sector </p>";
$message .= "<p><b>Charity already involved with:</b><br> $charities_already_involved_with </p>";
$message .= "<p><b>Rainmaker interests:</b><br> $rainmaker_interests </p>";
$message .= "<p><b>Areas of Expertise:</b><br> $areas_of_expertise </p>";
$message .= "<br> $other_area_of_expertise </p>";

$message .= "<p><b>Partner Charity Sector Interests:</b><br> $parter_charity_sector_interests </p>";
$message .= "<p><b>other Charity Sector Interests:</b><br> $partner_other_charity_sector </p>";
$message .= "<p><b>Partner Rainmaker interests:</b><br> $partner_rainmaker_interests </p>";
$message .= "<p><b>Partner Areas of Expertise:</b><br> $partner_areas_of_expertise </p>";
$message .= "<br> $partner_other_area_of_expertise </p>";

$message .= "<p><b>Donation frequency:</b><br> $donation_frequency </p>";
$message .= "<p><b>Donation amount:</b><br> $donation_amount </p>";
$message .= "<p><b>Donation method:</b><br> $donation_method </p>";

$message .= "<p><b>Gift Aid consent:</b><br> $gift_aid_consent </p>";
$message .= "<p><b>Photograph use consent:</b><br> $photo_consent </p>";
						
// Structure of HTML message
$message .= "</body>";
$message .= "</html>";

$email_subject = "Application form - $name";

$email_headers = implode("\n", array(
	"From: applicationform@rainmakerfoundation.org",
	"Reply-To: $email",
	// "Subject: $email_subject",
	// "Return-Path:  $email",
	// "MIME-Version: 1.0",
	// "X-Priority: 3",
	"Content-Type: text/html; charset=UTF-8"
));

header('Content-type: application/json');

require_once('PHPMailer/class.phpmailer.php');

$mail = new PHPMailer();
$mail->Subject = "Rainmaker Application Form - $name";
$mail->SetFrom(EMAIL_RECIPIENT, 'Rainmaker Application Form');
$mail->AddReplyTo($email, $name);
$mail->IsHTML(true);
$mail->MsgHTML($message);

// Who the message is to.
$mail->AddAddress(EMAIL_RECIPIENT, EMAIL_RECIPIENT);

try {
	$mail->Send();
	echo json_encode(array(
		'error' => false
	));
} catch (phpmailerException $e) {
	echo json_encode(array(
		'error' => true,
		'message' => $e->errorMessage(),
	));
}
