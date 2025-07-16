const questions = [
  { question: "Câu 1: Xe nào không bao giờ giảm đi ?", answer: "Xe tăng" },
  { question: "Câu 2: Hoa gì luôn ở phía sau ?", answer: "Hoa hậu" },
  {
    question:
      "Câu 3: Con gì không mắt, không tai, có đầu có cuối ai ai cũng nhờ ?",
    answer: "Con đường",
  },
  { question: "Câu 4: Độc gì càng trúng càng thích ?", answer: "Độc đắc" },
  {
    question: "Câu 5: Ăn gì không no nhưng ai cũng thích ?",
    answer: "Ăn tiền",
  },
  {
    question: "Câu 6: Bạch mã trắng, hắc mã đen, vậy ngựa ô màu gì ?",
    answer: "Màu đen",
  },
  { question: "Câu 7: Cam gì hay mua thiếu?", answer: "Cam chịu" },
  {
    question: "Câu 8: Thương yêu cần hành động, vậy thương gì cần nói nhiều ?",
    answer: "Thương lượng",
  },
  { question: "Câu 9: Cái gì càng cầm càng dễ mất ?", answer: "Cầm đồ" },
  {
    question: "Câu 10: Tôi có hàm răng nhưng không có miệng, tôi là ai ?",
    answer: "Con đường",
  },
  { question: "Câu 11: Tảo gì bị cấm ?", answer: "Tảo hôn" },
  { question: "Câu 12: Cây gì không có lá ?", answer: "Cây cột điện" },
  { question: "Câu 13: Măng nào không mọc ra từ tre ?", answer: "Măng cụt" },
  {
    question: "Câu 14: Câu gì bị nhiều người không thích ?",
    answer: "Câu giờ",
  },
  { question: "Câu 15: Cân nào bay được ?", answer: "Cân đẩu vân" },
  { question: "Câu 16: Tập gì không dùng để viết ?", answer: "Tập phim" },
  {
    question: "Câu 17: Dịch gì khách hàng rất thích ?",
    answer: "Dịch vụ chăm sóc khách hàng",
  },
  { question: "Câu 18: Con gì ăn lửa với than ?", answer: "Con tàu lửa" },
];

let currentIndex = 0;

// Khi modal mở, tải câu đầu tiên
const modal = document.getElementById("myModal");
modal.addEventListener("shown.bs.modal", () => {
  loadQuestion(currentIndex);
});

function loadQuestion(index) {
  const q = questions[index];
  const questionEl = document.getElementById("modalLabel");
  const answerEl = document.getElementById("answer");

  // Fade out current
  questionEl.classList.remove("fade-in");
  answerEl.classList.remove("fade-in");
  questionEl.classList.add("fade-out");
  answerEl.classList.add("fade-out");

  setTimeout(() => {
    questionEl.innerText = q.question;
    //answerEl.innerText = q.answer;
    answerEl.innerText = `💡 ${q.answer}`;
    answerEl.style.display = "none";
    answerEl.style.opacity = 0;

    document.getElementById("showAnswerBtn").style.display = "inline-block";
    document.getElementById("hideAnswerBtn").style.display = "none";
    document.getElementById("questionIndex").innerText = `Câu ${index + 1}/${
      questions.length
    }`;

    // Fade in new
    questionEl.classList.remove("fade-out");
    answerEl.classList.remove("fade-out");
    questionEl.classList.add("fade-in");
    answerEl.classList.add("fade-in");
  }, 0);
}

function showAnswer() {
  const answer = document.getElementById("answer");
  answer.style.display = "inline-block";
  answer.style.opacity = 1;
  document.getElementById("showAnswerBtn").style.display = "none";
  document.getElementById("hideAnswerBtn").style.display = "inline-block";
}

function hideAnswer() {
  const answer = document.getElementById("answer");
  answer.style.opacity = 0;
  setTimeout(() => {
    answer.style.display = "none";
  }, 0);
  document.getElementById("showAnswerBtn").style.display = "inline-block";
  document.getElementById("hideAnswerBtn").style.display = "none";
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    currentIndex = 0;
    loadQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  } else {
    currentIndex = questions.length - 1;
    loadQuestion(currentIndex);
  }
}

particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
  retina_detect: true,
});

// function playMusic() {
//   const music = document.getElementById("bgMusic");
//   music.volume = 0.3;
//   music.play().catch((err) => {
//     console.log("Trình duyệt chặn autoplay:", err);
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const btnPlay = document.querySelector(".btn-start");
//   btnPlay.addEventListener("click", playMusic);
// });
