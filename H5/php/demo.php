<?php
	$a = '';
	$u = '';
	if(isset($_GET['browser'])){
		$a = $_GET['browser'];
		echo "$a";
	}

	if(isset($_GET['user_name'])){
		$u = $_GET['user_name'];
		echo "$u";
	}
?>	