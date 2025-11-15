const LIST_OF_WORDS: string[] = [
  "Frontend Dveloper",
  "Software Engineer",
  "Student at SRB.IAU",
];

export default function changeWord(): () => void {
  const timeoutIds: ReturnType<typeof setTimeout>[] = [];

  function type() {
    let totalDelay = 0;

    LIST_OF_WORDS.forEach((word) => {
      const element = document.querySelector(".change-word");
      if (!element) return;

      element.textContent = "";

      word.split("").forEach((char, i) => {
        const id = setTimeout(() => {
          const el = document.querySelector(".change-word");
          if (el) el.textContent += char;
        }, totalDelay + i * 100);
        timeoutIds.push(id);
      });

      const typeDelay = word.length * 100;

      word.split("").forEach((_, i) => {
        const id = setTimeout(() => {
          const el = document.querySelector(".change-word");
          if (!el) return;
          el.textContent = el.textContent?.slice(0, -1) ?? "";
        }, totalDelay + typeDelay + 2000 + i * 100);
        timeoutIds.push(id);
      });

      totalDelay += typeDelay + 2000 + word.length * 100;
    });

    const totalTime = LIST_OF_WORDS.reduce(
      (sum, word) => sum + word.length * 100 + 2000 + word.length * 100,
      0
    );

    const id = setTimeout(type, totalTime);
    timeoutIds.push(id);
  }

  type();

  // Return cleanup function
  return () => {
    timeoutIds.forEach((id) => clearTimeout(id));
  };
}
