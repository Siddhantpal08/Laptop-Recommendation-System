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
        const elements = document.querySelectorAll('.radio .name');
        elements.forEach(element => {
            if (element.textContent.trim() === link.name) {
                element.addEventListener('click', function() {
                    window.location.href = link.page;
                });
            }
        });
    });

    // Specifications Form Submission
document.addEventListener('DOMContentLoaded', function() {
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
            .then(data => {
                console.log('Response Data:', data); // Log the returned data
                displayResults(data);
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
    }

    function displayResults(laptops) {
        const resultsDiv = document.getElementById('results');
        let output = '<h2>Recommended Laptops</h2>';
        if (Array.isArray(laptops) && laptops.length > 0) {
            laptops.forEach(function(laptop) {
                console.log(laptop); // Log each laptop's data
                output += `
                    <div class="laptop">
                        <h3>${laptop.brand} ${laptop.model}</h3>
                        <p>${laptop.specifications}</p>
                        <p>Price: ₹${laptop.price}</p>
                        <p>${laptop.description}</p>
                    </div>
                `;
            });
        } else if (laptops.message) {
            output += `<p>${laptops.message}</p>`;
        } else {
            output += '<p>No laptops found for these specifications.</p>';
        }
        resultsDiv.innerHTML = output;
    }
});

    
    

    // Profession Form Submission
    document.addEventListener('DOMContentLoaded', function() {
        const professionForm = document.getElementById('professionForm');
        if (professionForm) {
            professionForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(professionForm);
    
                fetch('profession.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    console.log('Received response:', response); // Log the response object
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Response Data:', data); // Log the actual response data
                    displayResults(data);
                })
                .catch(error => console.error('There was a problem with the fetch operation:', error));
            });
        }
    
        function displayResults(laptops) {
            const resultsDiv = document.getElementById('results');
            let output = '<h2>Recommended Laptops</h2>';
            if (Array.isArray(laptops) && laptops.length > 0) {
                laptops.forEach(function(laptop) {
                    console.log('Laptop data:', laptop); // Log each laptop's data
                    output += `
                        <div class="laptop">
                            <h3>${laptop.brand} ${laptop.model}</h3>
                            <p>${laptop.specifications}</p>
                            <p>Price: ₹${laptop.price}</p>
                        </div>
                    `;
                });
            } else if (laptops.message) {
                output += `<p>${laptops.message}</p>`;
            } else {
                output += '<p>No laptops found for this profession.</p>';
            }
            resultsDiv.innerHTML = output;
        }
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
    }
    // Fetch User Data
    fetch('fetch_user.php')
        .then(response => response.json())
        .then(data => {
            const usernameSpan = document.getElementById('username');
            if (usernameSpan) {
                usernameSpan.innerText = data.username;
            } else {
                console.error('Element with ID "username" not found.');
            }
        })
        .catch(error => console.error('Error fetching user data:', error));

    // Button Click Handlers
    const addButtonClickHandlers = function(buttonId, url) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', function() {
                window.location.href = url;
            });
        }
    };

    addButtonClickHandlers('signInBtn', 'login.html');
    addButtonClickHandlers('registerBtn', 'register.html');

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
});
document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch_preferences.php')
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // This will help you see the actual data returned
            if (!Array.isArray(data)) {
                throw new Error('Expected an array');
            }
            const preferencesDiv = document.getElementById('preferences');
            if (preferencesDiv) {
                let output = '<ul>';
                data.forEach(preference => {
                    output += `<li>Profession: ${preference.profession}, Budget: ₹${preference.budget}, Specifications: ${preference.specifications}</li>`;
                });
                output += '</ul>';
                preferencesDiv.innerHTML = output;
            } else {
                console.error('Element with ID "preferences" not found.');
            }
        })
        .catch(error => console.error('Error fetching preferences:', error));
});
document.addEventListener('DOMContentLoaded', function() {
    // Register Form Submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent the default form submission

            const formData = new FormData(registerForm);

            fetch('register.php', {
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
                const registerResult = document.getElementById('registerResult');
                if (registerResult) {
                    registerResult.innerText = data.message;
                    if (data.success) {
                        registerResult.style.color = 'green';
                        setTimeout(() => {
                            window.location.href = 'login.html'; // Redirect to login page
                        }, 1000);
                    } else {
                        registerResult.style.color = 'red';
                    }
                } else {
                    console.error('Element with ID "registerResult" not found.');
                }
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
        });
    }
});