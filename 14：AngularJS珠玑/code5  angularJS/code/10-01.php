<?php


	$hash = $_GET['hash'];

	switch ($hash) {
		case 'index':
			echo '<h1>Index Page!</h1>';
			break;

		case 'introduce':
			echo '<h1>Introduce Page!</h1>';
			break;
		case 'contact':
			echo '<h1>Contact Us Page!</h1>';
			break;
		default:
			# code...
			break;
	}






?>