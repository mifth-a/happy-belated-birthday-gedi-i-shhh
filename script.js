const message = `August 1st is your special day — but I hope every day after this feels just as special, or even more.\nWishing you a long life, good health, and smooth paths in everything you're facing.\n\nMay your goals be within reach, and your wishes come true one by one.\n\nI really hope this birthday marks the start of something beautiful — A time where the universe starts sending you all the good things you deserve.\n\nMay your days ahead be full of joy, good vibes, and that sweet smile of yours.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

