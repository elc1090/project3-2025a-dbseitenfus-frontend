
const URL_BASE = "http://localhost:8000";

//User

export async function getUsers() {
    const res = await fetch(`${URL_BASE}/user/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    return res.json();
}

export async function createUser(user) {
    const res = await fetch(`${URL_BASE}/user/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return res.json();
}

export async function updateUser(user) {
    const res = await fetch(`${URL_BASE}/user/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return res.json();
}

export async function deleteUser(userId) {
    const res = await fetch(`${URL_BASE}/user/${userId}/`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return res.json();
}

// Document

export async function getDocuments() {
    const res = await fetch(`${URL_BASE}/document/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    return res.json();
}

export async function createDocument(document) {
    const res = await fetch(`${URL_BASE}/document/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(document),
    });
    return res.json()
}