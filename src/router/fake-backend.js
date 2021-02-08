import ERPMasterLayoutData from '../service/ERPSidebarService';
const erpService = new ERPMasterLayoutData();

let users = [];

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = async function (url, opts) {
        // console.log("configureFakeBackend : " + url + '    ' + JSON.parse(opts.body).username + '    ' + JSON.parse(opts.body).password)

        // await erpService.getLoginRequestUserData(JSON.parse(opts.body).username, JSON.parse(opts.body).password)
        await erpService.login(JSON.parse(opts.body).username, JSON.parse(opts.body).password)
            .then(res => {
                // console.log(res.data)
                users = res.data;
            });
        return new Promise((resolve, reject) => {
            // console.log('resolve or reject')
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // console.log('set timeout')

                // authenticate
                if (url.endsWith('/users') && opts.method === 'POST') {
                    // console.log('i am inside authenticate')
                    // console.log(users)
                    /*// get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        console.log('filtered user')
                        return user.username === params.username && user.password === params.password;
                    });
                    console.log(filteredUsers)

                    if (filteredUsers.length) {
                        console.log('resolving')
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            accessToken: 'fake-jwt-token',
                            idToken: user.id + '_' + user.username,
                            expiresAt: new Date().getTime() + (4 * 60 * 60 * 1000)
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                        document.getElementById('error-message').innerHTML = '*incorrect username or password'
                        document.getElementById('error-message').className = ''
                    }*/
                    if (users) {
                        // console.log('resolving')
                        // if login details are valid return user details and fake jwt token
                        // let user = filteredUsers[0];
                        let responseJson = {
                            code:users.code,
                            status: users.status,
                            message: users.message,
                            accessToken: users.data.token.access_token,
                            token_type: users.data.token.token_type,
                            // expires_at: users.data.expires_at,
                            expires_at: new Date().getTime() + (Math.abs(new Date(users.data.token.expires_at).getTime() - new Date().getTime())),
                            user_detils: {
                                id: users.data.user.id,
                                name: users.data.user.name,
                                username: users.data.user.username,
                                email: users.data.user.email,
                                user_type: users.data.user.user_type,
                                sbu_id: users.data.user.sbu_id,
                                sbu_name: users.data.user.sbu_name,
                                role_id: users.data.user.role_id,
                                role_name: users.data.user.role_name
                            }
                        };
                        // console.log(responseJson)
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                        document.getElementById('error-message').innerHTML = '*incorrect username or password'
                        document.getElementById('error-message').className = ''
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    /*newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));*/
                    // erpService.writeUser(users);
                    const myuser = {
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        username: newUser.username,
                        password: newUser.password
                    }
                    // console.log(myuser)
                    erpService.writeUser(myuser);

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}