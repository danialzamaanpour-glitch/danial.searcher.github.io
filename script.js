document.getElementById("googleBtn").addEventListener("click", function () {
        let query = document.getElementById("searchBox").value;
    
        // برای اینکه خطا ندهد مقدار را به شکل URL ایمن تبدیل می‌کنیم
        let encoded = encodeURIComponent(query);
    
        // باز کردن جستجو در گوگل
        window.open("https://www.google.com/search?q=" + encoded, "_blank");
    });