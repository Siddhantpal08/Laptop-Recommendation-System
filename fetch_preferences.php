<?php
include 'db_connect.php';

session_start();
$user_id = $_SESSION['user_id']; // Assuming user ID is stored in session after login

$sql = "SELECT * FROM preferences WHERE user_id = '$user_id'";
$result = $conn->query($sql);

$preferences = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $preferences[] = $row;
    }
}
$conn->close();
echo json_encode($preferences);
?>
