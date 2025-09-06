/**
 * Simula una API REST para la autenticación de usuarios.
 * @param {Object} creds - Objeto con las credenciales (email y password).
 * @returns {Promise<Object>} - Una promesa que resuelve con un objeto de usuario o lanza un error.
 */

export const login = (creds) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (creds.email === 'correo@tecnochile.com' && creds.password === '123456'){
                const user = {
                    id: 1,
                    name: 'Usuario',
                    email: 'correo@tecnochile.com'
                };
                resolve(user);
            } else {
                reject(new Error('Credenciales inválidas. Por favor, inténtelo de nuevo.'));
            }
        }, 1000);
    });
}