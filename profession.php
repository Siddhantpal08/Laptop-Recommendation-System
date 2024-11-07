<?php
header('Content-Type: application/json');

// Include the database connection file
include 'db_connect.php';

// Ensure the session is started to get the user_id
session_start();

// Fetch preferences for the logged-in user
$user_id = $_SESSION['user_id'] ?? 0;

$stmt = $conn->prepare("SELECT profession, budget, specifications FROM preferences WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$preferences = array();
while ($row = $result->fetch_assoc()) {
    $preferences[] = $row;
}

// Return the data in JSON format
echo json_encode($preferences);

$stmt->close();
$conn->close();
?>
