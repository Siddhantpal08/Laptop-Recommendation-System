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

    // Navigation Links
    const navLinks = [
        { name: 'Home', page: 'index.html' },
        { name: 'Category', page: 'Category.html' },
        { name: 'About', page: 'about.html' },
        { name: 'Sign-in', page: 'profile.html' }
    ];

    navLinks.forEach(link => {
        document.querySelector(`.radio .name:contains("${link.name}")`).addEventListener('click', function() {
            window.location.href = link.page;
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

    // Fetch Preferences
    fetch('fetch_preferences.php')
        .then(response => response.json())
        .then(data => {
            const preferencesDiv = document.getElementById('preferences');
            let output = '<ul>';
            data.forEach(preference => {
                output += `<li>Profession: ${preference.profession}, Budget: ₹${preference.budget}, Specifications: ${preference.specifications}</li>`;
            });
            output += '</ul>';
            preferencesDiv.innerHTML = output;
        })
        .catch(error => console.error('Error fetching preferences:', error));
});

// Function to Display Results
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