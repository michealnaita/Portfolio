export function initTypography(classnames) {
  // const type = typeof classnames === "array";
  // if (!type) return console.log(typeof classnames);
  const paragraphArray = document.querySelectorAll(".typography");
  if (!paragraphArray.length) return;
  paragraphArray.forEach((paragraph) => {
    const paragraphClone = paragraph.textContent;
    paragraph.textContent = "";
    paragraph.style.color = "inherit";
    Array.from(paragraphClone, (char) => {
      const classname = classnames[getRandomInt(classnames.length)];
      const span = document.createElement("span");
      span.style.width = "max-content";
      span.textContent = char;
      span.style.display = "inline-block";
      if (char === " ") span.style.display = "inline";
      if (classname) span.classList.add(classname);
      if (char === " ") span.classList.remove(classname);
      paragraph.append(span);
    });
  });
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}
