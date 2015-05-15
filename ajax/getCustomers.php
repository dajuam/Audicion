<?php
    include('../includes/config.php');

    function utf8ize($d) {
        if (is_array($d)) {
            foreach ($d as $k => $v) {
                $d[$k] = utf8ize($v);
            }
        } else if (is_string ($d)) {
            return utf8_encode($d);
        }
        return $d;
    }

    $query="SELECT * FROM audit_records ORDER BY id DESC LIMIT 5000";
    $result = $mysqli->query($query) or die($mysqli->error.__LINE__);

    $arr = array();
    if($result->num_rows > 0) {
    	while($row = $result->fetch_assoc()) {
    		$arr[] = $row;	
    	}
    }

    # JSON-encode the response
    $json_response = json_encode(utf8ize($arr));

    // Return the response
    echo $json_response;
?>