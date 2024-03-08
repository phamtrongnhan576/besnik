var modal = document.getElementById("myModal");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
    var modalLogin = document.getElementById("myModal");
}
function openSignupModalFromLogin() {
    var modalLogin = document.getElementById("myModal");
    var modalSignup = document.getElementById("myModalSignup");
    modalLogin.style.display = "none"; // Ẩn modal đăng nhập
    modalSignup.style.display = "block"; // Hiển thị modal đăng ký
}
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function closeSignupModal() {
    var signupModal = document.getElementById("myModalSignup");
    signupModal.style.display = "none";
}
function validateForm() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (password !== confirm_password) {
        alert("Mật khẩu nhập lại không khớp vui lòng nhập lại!");
        return false;
    }
    return true;
}
var daySelect = document.getElementById("day");
for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    daySelect.add(option);
}
var monthSelect = document.getElementById("month");
for (var i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    monthSelect.add(option);
}
var yearSelect = document.getElementById("year");
for (var i = 1950; i <= 2024; i++) {
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    yearSelect.add(option);
}
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};
let refreshInterval = setInterval(() => {
    next.click();
}, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + "px";
    //
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener("click", () => {
        active = key;
        reloadSlider();
    });
});
window.onresize = function (event) {
    reloadSlider();
};

// JavaScript (cần jQuery)
$(".slider")
    .on("mouseover", function () {
        $(this).find(".buttons").fadeIn(); // Hiển thị nút chỉ điều khiển khi di chuột qua slider
    })
    .on("mouseout", function () {
        $(this).find(".buttons").fadeOut(); // Ẩn nút chỉ điều khiển khi di chuột ra khỏi slider
    });
