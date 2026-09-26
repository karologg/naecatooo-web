const pages = {
    home: `
            <h1>HOME</h1><p>Welcome to the HOME page!</p>
    `,
    ocs: `
            <h1>ORIGINAL CHARACTERS</h1><p>Here are some original characters.</p>
    `,
    portfolio: `
            <h1>PORTFOLIO</h1><p>Check out my portfolio.</p>
    `,
    collection: `
            <h1>COLLECTION</h1><p>Explore my collection.</p>
    `,
}

const banner = {
    home: `HOME`,
    ocs: `ORIGINAL CHARACTERS`,
    portfolio: `PORTFOLIO`,
    collection: `COLLECTION`,
}

async function navigate(pageKey, button) {
    const contentArea = document.getElementById('content-area');
    const bannerArea = document.getElementsByClassName('banner')[0];
    try {
        const response = await fetch(`pages/${pageKey}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pageContent = await response.text();
        contentArea.innerHTML = pageContent;
        bannerArea.innerHTML = banner[pageKey];
    } catch (error) {
        console.error('Error fetching page:', error);
        contentArea.innerHTML = `<h1>404</h1><p>Page not found.</p>`;
    }
}