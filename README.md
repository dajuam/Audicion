# Audicion

Audicion is an angular tool to get data from an specific table.

## Instructions

1. Create config.php under "includes" folder
2. Complete with database parameters:
<pre>
<?php 
		$DB_HOST = 'localhost'; // eg. localhost
		$DB_USER = 'root'; // eg. root
		$DB_PASS = ''; eg. mypassword
		$DB_NAME = ''; // dbName
    $mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
?>
</pre>
