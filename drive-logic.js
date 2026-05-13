// --- CONFIGURATION ---
const API_KEY = 'bc55823136b52865e3f7c8c7a0be827955da3db7'; 
const FOLDERS = {
    classwork: 'https://drive.google.com/drive/u/5/folders/1soxcjhKkO9TxfUCXimv81tfkQ8n4bfFL',
    homework: 'https://drive.google.com/drive/u/5/folders/1VxatVzwaGrEN4ZC74TYlgOHhNKVTZQpM'
};

// --- THE FETCH ENGINE ---
async function fetchNexcuseData() {
    // Fetch Classwork (Files)
    await fetchFromDrive(FOLDERS.classwork, 'cw-grid', false);
    
    // Fetch Homework (Reminders)
    await fetchFromDrive(FOLDERS.homework, 'hw-list', true);
}

async function fetchFromDrive(folderId, elementId, isReminder) {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,webViewLink,thumbnailLink)&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.files) {
            renderFiles(data.files, elementId, isReminder);
        }
    } catch (error) {
        console.error(`Drive Error (${elementId}):`, error);
    }
}

// --- THE RENDERER ---
function renderFiles(files, elementId, isReminder) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; // Clear loading state

    files.forEach(file => {
        const item = document.createElement('div');
        
        if (isReminder) {
            // Logic for Empty .txt files as Reminders
            item.className = 'reminder-item';
            item.innerHTML = `
                <i class='bx bx-bell'></i>
                <span>${file.name.replace('.txt', '')}</span>
            `;
        } else {
            // Logic for Classwork Cards
            item.className = 'asset-card';
            item.innerHTML = `
                <div class="card-preview">
                    <img src="${file.thumbnailLink || 'assets/file-icon.png'}" alt="Preview">
                </div>
                <div class="card-info">
                    <h4>${file.name}</h4>
                    <a href="${file.webViewLink}" target="_blank" class="view-btn">View Notes</a>
                </div>
            `;
        }
        container.appendChild(item);
    });
}

// Start the fetch when the page loads
document.addEventListener('DOMContentLoaded', fetchNexcuseData);
