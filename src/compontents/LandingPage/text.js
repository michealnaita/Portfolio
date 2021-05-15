export function splitText() {
  const paragraphArray = document.querySelectorAll(".text");
  if (!paragraphArray.length) return;
  paragraphArray.forEach((paragraph) => {
    const paragraphClone = paragraph.textContent;
    paragraph.textContent = "";
    paragraph.style.color = "inherit";
    Array.from(paragraphClone, (char, i) => {
      // create single text group
      const span = document.createElement("span");
      span.style.width = "max-content";
      span.textContent = char;
      span.style.display = "inline-block";
      if (char === " ") span.style.display = "inline";
      //   console.log(i % 2);
      paragraph.append(span);
    });
  });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
