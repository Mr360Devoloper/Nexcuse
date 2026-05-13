document.addEventListener("DOMContentLoaded", () => {
    const isAdmin = localStorage.getItem('isNexcuseAdmin') === 'true';
    
    if (isAdmin) {
        document.getElementById('admin-controls').style.display = 'block';
        document.getElementById('admin-pill').style.display = 'block';
        document.getElementById('welcome-msg').innerText = "Welcome, Pratyush";
    }

    // Handle Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
});
