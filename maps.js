document.addEventListener("DOMContentLoaded", () => {
    const hotspots = document.querySelectorAll(".hotspot");
    const modal = document.getElementById("infoModal");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeBtn = document.querySelector(".close");
  
    hotspots.forEach(hotspot => {
      hotspot.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.textContent = hotspot.dataset.title;
        modalText.textContent = hotspot.dataset.text;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  