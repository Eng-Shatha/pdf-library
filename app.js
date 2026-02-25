function toggleText() {
    const text = document.getElementById("moreText");
    const btn = document.querySelector(".about-btn");

    if (text.style.display === "none" || text.style.display === "") {
        text.style.display = "block";
        btn.textContent = "إخفاء";
    } else {
        text.style.display = "none";
        btn.textContent = "اقرأ المزيد";
    }
}
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        alert("يرجى تعبئة جميع الحقول قبل الإرسال!");
    } else {
        alert(`شكراً لك ${name}, تم إرسال بياناتك بنجاح!`);
        form.reset();
    }
});