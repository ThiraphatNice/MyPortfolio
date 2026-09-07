document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const header = document.getElementById("siteHeader");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll(".nav__link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const onScrollHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  const timelineItems = document.querySelectorAll(".timeline__item");

  if ("IntersectionObserver" in window && timelineItems.length) {
    const timelineObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    timelineItems.forEach((item) => timelineObserver.observe(item));
  } else {
    timelineItems.forEach((item) => item.classList.add("is-visible"));
  }

  const toTopBtn = document.getElementById("toTop");
  if (toTopBtn) {
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const projectModal = document.getElementById("projectModal");
  const projectCards = document.querySelectorAll(".project-card[data-project]");
  const modalStage = document.getElementById("modalStage");
  const modalImageCount = document.getElementById("modalImageCount");
  let activeImages = [];
  let activeImageIndex = 0;
  let lastFocusedElement = null;

  const projectDetails = {
    parking: {
      title: "ระบบลานจอดรถของบริษัท Metthier",
      members: "4 คน",
      period: "ปี 2 เทอม 1-2 (ช่วงปี 2024)",
      stack: "HTML, CSS, JavaScript, React, phpMyAdmin",
      description: "ระบบลานจอดรถของบริษัท Metthier ที่พัฒนาขึ้นเพื่อจัดการ การเข้าถึงลานจอดรถของพนักงาน โดยมีฟีเจอร์หลัก ๆ เช่น การตรวจสอบลานจอดรถที่ว่างล่วงหน้า และระบบประวัติการจอดรถรวมถึงการชำระเงิน โดยผมได้ทำหน้าที่ในการทำระบบเก็บประวัติการจอดรถ โดยผู้ใช้สามารถดูประวัติการจอดและรายละเอียดต่าง ๆ ของตนเองย้อนหลังได้ 4 เดือน",
      images: [
        "images/project/metthier/Screenshot 2026-09-07 140439.png",
        "images/project/metthier/Screenshot 2026-09-07 140459.png",
        "images/project/metthier/Screenshot 2026-09-07 140514.png",
        "images/project/metthier/Screenshot 2026-09-07 140527.png",
        "images/project/metthier/Screenshot 2026-09-07 140538.png",
        "images/project/metthier/Screenshot 2026-09-07 140611.png",
        "images/project/metthier/Screenshot 2026-09-07 140635.png"
      ]
    },
    shrook: {
      title: "Shrook เว็บแต่งนิยายออนไลน์",
      members: "3 คน",
      period: "ปี 3 เทอม 1 (ช่วงปี 2025)",
      stack: "HTML, CSS, JavaScript, React, MongoDB",
      description: "เว็บแต่งนิยายออนไลน์ที่พัฒนาขึ้นเพื่อให้ผู้ใช้สามารถสร้างและเผยแพร่นิยายของตนเองได้ โดยมีฟีเจอร์หลัก ๆ เช่น การสร้างและแก้ไขนิยาย และระบบคอมเมนต์จากผู้อ่าน โดยผมได้ทำหน้าที่ตั้งแต่การออกแบบการใช้งานระบบ , UX/UI Design รวมถึงการพัฒนาฟีเจอร์ที่สำคัญของเว็บ เช่น ระบบการเพิ่มเนื้อหา,ระบบจัดการ Backend,ระบบการคอมเมนต์,ฯลฯ",
      images: [
        "images/project/shrook/Screenshot (952).png",
        "images/project/shrook/Screenshot (953).png"
      ]
    },
    shoestore: {
      title: "ShoeStore ร้านขายรองเท้าออนไลน์",
      members: "1 คน",
      period: "ปี 3 เทอม 2 (ช่วงปี 2025)",
      stack: "C#, MySQL, .NET MVC",
      description: "โปรเจคต์ร้านขายรองเท้าออนไลน์ที่พัฒนาขึ้นเพื่อให้ผู้ใช้สามารถเลือกซื้อรองเท้าได้อย่างสะดวก โดยมีฟีเจอร์หลัก ๆ เช่น การค้นหาสินค้า, การเพิ่มสินค้าในตะกร้า, และระบบชำระเงิน โดยโปรเจคต์นี้เป็นโปรเจคต์ที่ผมพัฒนาขึ้นเองทั้งหมดตั้งแต่การออกแบบฐานข้อมูล, การพัฒนา Backend และ Frontend รวมถึงการทดสอบระบบทั้งหมด",
      images: [
        "images/project/shoestore/Screenshot (1495).png",
        "images/project/shoestore/Screenshot (1498).png",
        "images/project/shoestore/Screenshot (1499).png",
        "images/project/shoestore/Screenshot (1506).png",
        "images/project/shoestore/Screenshot (1509).png",
        "images/project/shoestore/Screenshot (1519).png",
        "images/project/shoestore/Screenshot (1520).png"
      ]
    },
    welly: {
      title: "Welly Chatbot ให้คำแนะนำด้านสุขภาพ",
      members: "4 คน",
      period: "ปี 3 เทอม 2 (ช่วงปี 2025)",
      stack: "Python, HTML, JavaScript, CSS, Supabase",
      description: "โปรเจคต์ Welly AI-Chatbot เป็นแชทบอทที่สามารถตอบคำถามและให้คำแนะนำด้านสุขภาพและโภชนาการได้ โดยผมได้ทำหน้าที่ในการพัฒนา Frontend ของเว็บแอปพลิเคชันและจัดเตรียม Data สำหรับการฝึกสอนโมเดล AI โดยใช้ข้อมูลจากแหล่งข้อมูลที่เชื่อถือได้ เพื่อให้ผู้ใช้สามารถเข้าถึงข้อมูลด้านสุขภาพและโภชนาการได้อย่างถูกต้องและมีประสิทธิภาพ",
      images: [
        "images/project/welly/welly1.png",
        "images/project/welly/welly2.png",
        "images/project/welly/welly3.png",
        "images/project/welly/welly4.png"
      ]
    }
  };

  const renderModalImage = () => {
    const imagePath = activeImages[activeImageIndex];
    modalStage.innerHTML = imagePath ? `<img src="${imagePath}" alt="ภาพตัวอย่างโปรเจคต์">` : "<p>ยังไม่มีภาพตัวอย่าง</p>";
    modalImageCount.textContent = `${String(activeImageIndex + 1).padStart(2, "0")} / ${String(activeImages.length || 1).padStart(2, "0")}`;
  };
  const openProjectModal = (projectKey, card) => {
    const project = projectDetails[projectKey];
    if (!project) return;
    lastFocusedElement = card;
    activeImages = project.images;
    activeImageIndex = 0;
    document.getElementById("modalProjectTitle").textContent = project.title;
    document.getElementById("modalMembers").textContent = project.members;
    document.getElementById("modalPeriod").textContent = project.period;
    document.getElementById("modalStack").textContent = project.stack;
    document.getElementById("modalDescription").textContent = project.description;
    projectModal.classList.toggle("project-modal--mobile-app", projectKey === "parking");
    renderModalImage();
    projectModal.hidden = false;
    document.body.classList.add("modal-open");
    window.requestAnimationFrame(() => projectModal.classList.add("is-open"));
    projectModal.querySelector(".project-modal__close").focus();
  };
  const closeProjectModal = () => { projectModal.hidden = true; projectModal.classList.remove("is-open", "project-modal--mobile-app"); document.body.classList.remove("modal-open"); lastFocusedElement?.focus(); };
  projectCards.forEach((card) => {
    const open = () => openProjectModal(card.dataset.project, card);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
  const closeWithAnimation = () => {
    if (projectModal.hidden || projectModal.classList.contains("is-closing")) return;
    projectModal.classList.add("is-closing");
    window.setTimeout(() => {
      projectModal.classList.remove("is-closing");
      closeProjectModal();
    }, 300);
  };
  projectModal?.querySelectorAll("[data-modal-close]").forEach((element) => element.addEventListener("click", closeWithAnimation));
  const showPreviousImage = () => { if (activeImages.length > 1) { activeImageIndex = (activeImageIndex - 1 + activeImages.length) % activeImages.length; renderModalImage(); } };
  const showNextImage = () => { if (activeImages.length > 1) { activeImageIndex = (activeImageIndex + 1) % activeImages.length; renderModalImage(); } };
  document.getElementById("modalPrev")?.addEventListener("click", showPreviousImage);
  document.getElementById("modalNext")?.addEventListener("click", showNextImage);
  document.addEventListener("keydown", (event) => {
    if (!projectModal || projectModal.hidden) return;
    if (event.key === "Escape") closeWithAnimation();
    if (event.key === "ArrowLeft") showPreviousImage();
    if (event.key === "ArrowRight") showNextImage();
  });

});
