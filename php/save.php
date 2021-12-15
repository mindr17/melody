<?php
$_SESSION['name'] = $_GET['name'];
$_SESSION['phone'] = $_GET['phone'];
$content = $_SESSION['name'] . ' ' . $_SESSION['phone'] . '<br />';
$fp = fopen('../../data/db.html', 'a');
fwrite($fp, $content);
fclose($fp);
?>