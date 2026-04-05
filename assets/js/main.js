// =====================
// THEME TOGGLE
// =====================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  const iconDark = document.getElementById('themeIconDark');
  const iconLight = document.getElementById('themeIconLight');
  
  if (iconDark && iconLight) {
    iconDark.style.display = isDark ? '' : 'none';
    iconLight.style.display = isDark ? 'none' : '';
  }
}

// =====================
// RTL TOGGLE
// =====================
function toggleRTL() {
  const html = document.documentElement;
  html.dir = html.dir === 'rtl' ? 'ltr' : 'rtl';
}

// =====================
// FILTER BUTTONS
// =====================
function setFilter(el) {
  const parent = el.closest('.shop-filters') || el.parentElement;
  parent.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// =====================
// PASSWORD TOGGLE
// =====================
function togglePwd(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.innerHTML = input.type === 'password'
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
}

// =====================
// HEADER SCROLL EFFECT
// =====================
window.addEventListener('scroll', () => {
  const h = document.getElementById('mainHeader');
  if (h) h.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(30,24,18,0.1)' : '';
});

// Setup active navigation state based on current URL path
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Set initial theme icon
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  const iconDark = document.getElementById('themeIconDark');
  const iconLight = document.getElementById('themeIconLight');
  
  if (iconDark && iconLight) {
    iconDark.style.display = isDark ? 'none' : '';
    iconLight.style.display = isDark ? '' : 'none';
  }
});

// =====================
// TOAST NOTIFICATION
// =====================
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    </div>
    <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  // Trigger reflow to ensure the transition plays
  toast.offsetHeight;
  toast.classList.add('toast-show');

  setTimeout(() => {
    toast.classList.remove('toast-show');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 300); // Wait for transition to finish
  }, 2500);
}

// =====================
// LOGOUT HANDLER
// =====================
function handleLogout(event, redirectUrl = '../index.html') {
  if (event) event.preventDefault();
  
  showToast("Logged out successfully");
  
  // Wait for the user to see the toast before redirecting
  setTimeout(() => {
    window.location.href = redirectUrl;
  }, 1200);
}

// =====================
// MOBILE MENU TOGGLE
// =====================
function toggleMobileMenu() {
  const wrapper = document.getElementById('navWrapper');
  if (wrapper) {
    wrapper.classList.toggle('active');
  }
}

// =====================
// MOBILE DASHBOARD SIDEBAR TOGGLE
// =====================
function toggleDashSidebar() {
  const sidebar = document.querySelector('.dash-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

