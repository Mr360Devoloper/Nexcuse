const authForm = document.getElementById('auth-form');
const toggleLink = document.getElementById('toggle-link');
const authTitle = document.getElementById('auth-title');
let isLogin = true;

const ADMIN_EMAIL = "pratyush.24651@kvsrodelhi.in"; // Set your email here

// Toggle UI between Login and Signup
toggleLink.addEventListener('click', () => {
    isLogin = !isLogin;
    authTitle.innerText = isLogin ? "Login" : "Sign Up";
    toggleLink.innerText = isLogin ? "Create Account" : "Back to Login";
});

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (isLogin) {
        auth.signInWithEmailAndPassword(email, pass)
            .then(res => handleAuthSuccess(res.user))
            .catch(err => alert(err.message));
    } else {
        auth.createUserWithEmailAndPassword(email, pass)
            .then(res => handleAuthSuccess(res.user))
            .catch(err => alert(err.message));
    }
});

function handleAuthSuccess(user) {
    // Check if the logged-in user is YOU
    const isAdmin = user.email === ADMIN_EMAIL;
    localStorage.setItem('isNexcuseAdmin', isAdmin);
    
    // Redirect to Dashboard
    window.location.href = 'dashboard.html';
}
