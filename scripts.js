document.addEventListener('DOMContentLoaded', function() {
    // Budget Slider
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budgetValue');
    if (budgetSlider && budgetValue) {
        budgetValue.innerText = budgetSlider.value;

        budgetSlider.oninput = function() {
            budgetValue.innerText = this.value;
        };
    }

    // Budget Form Submission
    const budgetForm = document.getElementById('budgetForm');
    if (budgetForm) {
        budgetForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(budgetForm);
            fetch('budget.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => displayResults(data))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.radio .name:contains("Home")').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.radio .name:contains("Category")').addEventListener('click', function() {
            window.location.href = 'Category.html';
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.radio .name:contains("About")').addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.radio .name:contains("Sign-in")').addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.radio .name:contains("Home")').addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    });

    // Specifications Form Submission
    const specificationsForm = document.getElementById('specificationsForm');
    if (specificationsForm) {
        specificationsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(specificationsForm);
            fetch('specifications.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => displayResults(data))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
    }

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(loginForm);
            fetch('login.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const loginResult = document.getElementById('loginResult');
                loginResult.innerText = data.message;
                if (data.success) {
                    loginResult.style.color = 'green';
                    setTimeout(() => {
                        window.location.href = 'profile.html';
                    }, 1000);
                } else {
                    loginResult.style.color = 'red';
                }
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
         const professionForm = document.getElementById('professionForm'); 
         if (professionForm) { professionForm.addEventListener('submit', function(e) { 
            e.preventDefault(); const formData = new FormData(professionForm); 
            fetch('profession.php', { method: 'POST', body: formData }) 
            .then(response => { if (!response.ok) { throw new Error('Network response was not ok'); 
            } return response.json(); }) 
            .then(data => displayResults(data)) .catch(error => console.error('There was a problem with the fetch operation:', error)); 
        }); }
    function displayResults(laptops) { 
        const resultsDiv = document.getElementById('results'); 
        let output = '<h2>Recommended Laptops</h2>'; 
        if (laptops.length > 0) { laptops.forEach(function(laptop) { output += ` 
            <div class="laptop">
            <h3>${laptop.brand} ${laptop.model}</h3>
            <p>${laptop.specifications}</p>
            <p>Price: ₹${laptop.price}</p> </div> `; 
        }); } else { output += '<p>No laptops found for this profession.</p>'; 
        } resultsDiv.innerHTML = output; }
   // Fetch Preferences
fetch('fetch_preferences.php') 
.then(response => response.json()) 
.then(data => { const preferencesDiv = document.getElementById('preferences'); 
    if (preferencesDiv) { let output = '<ul>'; data.forEach(preference => { 
        output += `<li>Profession: ${preference.profession}, Budget: ₹${preference.budget}, Specifications: ${preference.specifications}</li>`; 
    }); output += '</ul>'; preferencesDiv.innerHTML = output; } else { console.error('Element with ID "preferences" not found.'); } }) 
    .catch(error => console.error('Error fetching preferences:', error
    ));
    function displayResults(laptops) {
        const resultsDiv = document.getElementById('results');
        let output = '<h2>Recommended Laptops</h2>';
        if (laptops.length > 0) {
            laptops.forEach(function(laptop) {
                output += `
                    <div class="laptop">
                        <h3>${laptop.brand} ${laptop.model}</h3>
                        <p>${laptop.specifications}</p>
                        <p>Price: ₹${laptop.price}</p>
                        <p>${laptop.description}</p>
                    </div>
                `;
            });
        } else {
            output += '<p>No laptops found for this specification.</p>';
        }
        resultsDiv.innerHTML = output;
    }
});
// Sign In Button Click
const signInBtn = document.getElementById('signInBtn');
if (signInBtn) {
    signInBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}
})
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code

    // Fetch User Data
    fetch('fetch_user.php')
        .then(response => response.json())
        .then(data => {
            const usernameSpan = document.getElementById('username');
            const logoutBtn = document.getElementById('logoutBtn');
            if (data.username !== 'Guest') {
                usernameSpan.innerText = data.username;
                logoutBtn.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching user data:', error));

    // Sign In Button Click
    const signInBtn = document.getElementById('signInBtn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Register Button Click
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }

    // Logout Button Click
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            fetch('logout.php')
                .then(() => {
                    window.location.href = 'index.html';
                })
                .catch(error => console.error('Error logging out:', error));
        });
    }

    // Other existing form submission handlers...
});
