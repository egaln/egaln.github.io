// script.js

// 显示登录和注册弹出框
document.getElementById("loginBtn").addEventListener("click", () => {
    openModal("loginModal");
  });
  
  document.getElementById("registerBtn").addEventListener("click", () => {
    openModal("registerModal");
  });
  
  // 显示和关闭弹出框
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("hidden");  // 移除隐藏类，使弹出框显示
    modal.classList.add("show");       // 添加显示类
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("show");    // 移除显示类，使弹出框隐藏
    modal.classList.add("hidden");     // 添加隐藏类
  }
  
  // 切换登录和注册弹出框
  function toggleModal(hideModalId, showModalId) {
    closeModal(hideModalId);
    openModal(showModalId);
  }
  
  // 登录和注册表单提交事件（简单示例）
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    alert(`Logged in with email: ${email}`);
    closeModal("loginModal");
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    alert(`Registered with email: ${email}`);
    closeModal("registerModal");
  });
  
  // 页面导航切换逻辑
  document.getElementById("homeLink").addEventListener("click", function() {
    setActiveSection('home');
  });
  document.getElementById("aboutLink").addEventListener("click", function() {
    setActiveSection('about');
  });
  document.getElementById("contactLink").addEventListener("click", function() {
    setActiveSection('contact');
  });
  
  function setActiveSection(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
      if (s.dataset.section === section) {
        s.classList.add('active');
        s.classList.remove('hidden');
      } else {
        s.classList.remove('active');
        s.classList.add('hidden');
      }
    });
  }
  