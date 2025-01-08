<?php
// شامل کردن فایل envLoader.php که تابع loadEnv را دارد
require_once 'envLoader.php';

// بارگذاری متغیرهای محیطی از فایل .env
loadEnv(__DIR__ . '/.env');

// دریافت API Key از متغیر محیطی
$apiKey = getenv('API_KEY');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// اگر درخواست OPTIONS باشد، پاسخ 204 داده می‌شود
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// بررسی پارامتر city
if (!isset($_GET['city'])) {
    echo json_encode(['error' => 'City is required']);
    exit;
}

$city = htmlspecialchars($_GET['city'], ENT_QUOTES, 'UTF-8');

// ساخت URL درخواست پیش‌بینی وضعیت هوا به OpenWeatherMap API
$forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q={$city}&appid={$apiKey}&units=metric";

// ارسال درخواست به API و دریافت پاسخ
$forecastResponse = file_get_contents($forecastApiUrl);

if ($forecastResponse === FALSE) {
    echo json_encode(['error' => 'Error fetching data from OpenWeatherMap API']);
    exit;
}

// بازگرداندن پاسخ پیش‌بینی وضعیت هوا
echo $forecastResponse;
?>
