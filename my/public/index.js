document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav__list');
  
  if (!navToggle || !navList) {
    console.error('Navigation toggle or list not found.');
    return;
  }

  navToggle.addEventListener('click', function () {
    // Toggle 'active' class on the navList
    navList.classList.toggle('active');
    
    // Toggle 'active' class on the navToggle button
    this.classList.toggle('active');
    
    // Set aria-expanded based on the button's 'active' state
    this.setAttribute('aria-expanded', this.classList.contains('active'));
  });
});
