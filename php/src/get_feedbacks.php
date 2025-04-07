<?php
require 'config.php';

$stmt = $pdo->query("SELECT id, message, created_at FROM feedbacks ORDER BY created_at DESC");
$feedbacks = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($feedbacks);
