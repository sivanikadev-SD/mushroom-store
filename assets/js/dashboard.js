// =====================
// DASHBOARD LOGIC
// =====================
const dashTitles = {
  'overview': 'Subscriber Dashboard',
  'deliveries': 'My Deliveries',
  'varieties': 'Variety Preferences',
  'guides': 'Growing Guides',
  'tutorials': 'Video Tutorials',
  'notifications': 'Notifications',
  'settings': 'Account Settings'
};

function switchDash(section, el) {
  // Update sections
  document.querySelectorAll('.dash-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('dash-' + section);
  if (target) target.classList.add('active');
  
  // Update nav links
  document.querySelectorAll('.dash-nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  else {
    // If element is not explicitly provided, find the matching nav link via an attribute or simple hardcode path if needed.
    // Assuming matching by clicking via another method.
  }
  
  // Update top bar title
  const titleEl = document.getElementById('dashTopTitle');
  if (titleEl) titleEl.textContent = dashTitles[section] || 'Dashboard';
}
