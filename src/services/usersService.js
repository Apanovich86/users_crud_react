const baseUrl = 'http://localhost:5000/users';

export function getUsers() {
    return fetch(baseUrl)
        .then(res => res.json())
}

export function deleteUser(id) {
    return fetch(`${baseUrl}/${id}`, {method: 'DELETE'});
}

export function addUser(user) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json());
}

export function getUser(id) {
    return fetch(`${baseUrl}/${id}`)
        .then(res => res.json());
}

export function updateUser(user) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json());
}
