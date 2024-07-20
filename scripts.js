// ملف scripts.js

// دالة لترجمة النص
function translateText() {
    const inputText = document.getElementById('inputText').value.trim();
    const resultText = document.getElementById('result');
    const feedback = document.getElementById('feedback');
    
    // التحقق من وجود نص
    if (inputText === "") {
        feedback.textContent = "يرجى إدخال نص للترجمة.";
        resultText.value = ""; // مسح خانة الترجمة
        return;
    }
    
    // تحويل النص إلى فرانكو (هنا تحتاج إلى إدخال دالة الترجمة الفعلية)
    const translatedText = convertToFranco(inputText); // قم بتعريف دالة التحويل
    resultText.value = translatedText;
    feedback.textContent = ""; // مسح الرسالة إذا كانت الترجمة ناجحة
}

// دالة لتحويل النص إلى فرانكو (تحتاج إلى تنفيذ هذا الجزء)
function convertToFranco(text) {
    // هذا مثال بسيط لتحويل بعض الأحرف
    // يجب عليك استبداله بدالة التحويل الفعلي إلى فرانكو
    const map = {
        'ا': 'a', 'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'g', 'ح': '7', 'خ': 'kh', 'د': 'd', 'ذ': 'dh',
        'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'd', 'ط': 't', 'ظ': 'z', 'ع': '3',
        'غ': 'gh', 'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'w',
        'ي': 'y'
    };
    return text.split('').map(char => map[char] || char).join('');
}

// دالة لنسخ النص إلى الحافظة
function copyToClipboard() {
    const resultText = document.getElementById('result');
    resultText.select();
    document.execCommand('copy');
    alert('تم نسخ النص إلى الحافظة!');
}
