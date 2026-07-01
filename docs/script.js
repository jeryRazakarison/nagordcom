const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const copyButton = document.querySelector("[data-copy-email]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (copyButton) {
  const baseLabel = copyButton.textContent.trim();

  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.copyEmail;

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Email copié";
    } catch {
      window.location.href = `mailto:${email}`;
    }

    window.setTimeout(() => {
      copyButton.textContent = baseLabel;
    }, 1800);
  });
}
