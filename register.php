<?php
include 'db_connect.php';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
$response = [];
if ($conn->query($sql) === TRUE) {
    $response['success'] = true;
    $response['message'] = 'Registration successful';
} else {
    $response['success'] = false;
    $response['message'] = 'Error: ' . $conn->error;
}
$conn->close();
echo json_encode($response);
?>
