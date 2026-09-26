const pages = {
    home: `<h1>HOME</h1><p>Welcome to the HOME page!</p>`
}

function navigate(pageKey) {
    const contentArea = document.getElementById('content-area');
    if (pages[pageKey]) {
        contentArea.innerHTML = pages[pageKey];
    } else {
        contentArea.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
    }
}