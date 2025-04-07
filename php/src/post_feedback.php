<?php
require 'config.php';

$data = json_decode(file_get_contents('php://input'), true);
$message = $data['message'] ?? '';

if ($message) {
    $stmt = $pdo->prepare("INSERT INTO feedbacks (message, created_at) VALUES (?, NOW())");
    $stmt->execute([$message]);

    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Message vide']);
}
