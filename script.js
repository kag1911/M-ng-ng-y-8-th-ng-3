// Danh sách lời chúc 8/3
const loiChuc = [
    "Chúc em luôn xinh đẹp và hạnh phúc mọi ngày, cảm ơn em vì tất cả! 💖",
    "Chúc em một ngày 8/3 tràn đầy niềm vui và tình yêu!, yêu nàng nhiều 💐",
    "Cảm ơn em vì đã xuất hiện trong cuộc đời anh. Yêu em! 💕",
    "Mong mọi điều tốt đẹp nhất sẽ đến với em hôm nay và mãi mãi! 🌸",
    "Hôm nay là ngày của em, hãy tận hưởng nó trọn vẹn nhé! 😘"
];

// Lấy phần tử nút và đoạn hiển thị lời chúc
const btn = document.getElementById("btn");
const message = document.getElementById("message");


// Thêm sự kiện khi bấm nút
btn.addEventListener("click", function() {
    // Chọn ngẫu nhiên một lời chúc
    const audio = new Audio("click.mp3.wav");
    audio.play();
    let randomIndex = Math.floor(Math.random() * loiChuc.length);
    message.textContent = loiChuc[randomIndex];

    // Hiệu ứng nhỏ: đổi màu chữ mỗi lần bấm
    message.style.color = `hsl(${Math.random() * 360}, 80%, 50%)`;
    
    const videoContainer= document.getElementById("video-container");
    const video= document.getElementById("video");
    videoContainer.style.display="block";
    video.currentTime=0;
    video.play();
});
