import env from '../environment'
// import { authHeader } from '../router/auth-header'

export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    // console.log('I am here in user.service : ' + username + '    ' + password)

    return fetch(`${env.apiBaseUrl}/users`, requestOptions)
        .then(handleResponse)
        .then(user => {
            /*console.log('user.service => login()')
            console.log('user : ' + JSON.stringify(user))
            console.log(user.accessToken)*/
            // login successful if there's a jwt token in the response
            if (user.accessToken) {
                // console.log('inside token')
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            // console.log('done user service')

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    console.log('logged out')
}

function handleResponse(response) {
    return response.text().then(text => {
        // console.log('user.service => handleResponse()')
        // console.log('handle : ' + text)
        const data = text && JSON.parse(text);
        // console.log('data : ')
        // console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}