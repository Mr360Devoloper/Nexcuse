const adminEmail = "your-email@example.com"; // Replace with your actual email

// Signup Logic
function handleSignup(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            checkAdminStatus(userCredential.user);
        })
        .catch(error => alert(error.message));
}

// Login Logic
function handleLogin(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            checkAdminStatus(userCredential.user);
        })
        .catch(error => alert(error.message));
}

// The Admin Shield
function checkAdminStatus(user) {
    if (user.email === adminEmail) {
        localStorage.setItem('isAdmin', 'true');
        window.location.href = "dashboard.html"; // Redirect to admin view
    } else {
        localStorage.setItem('isAdmin', 'false');
        window.location.href = "dashboard.html"; // Redirect to student view
    }
}
