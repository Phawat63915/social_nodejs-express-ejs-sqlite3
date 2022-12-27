import crypto from 'crypto'

export const hash_password = (pass, salt = crypto.randomBytes(pass.length+5).toString('hex')) => {
    return salt + "." + crypto.pbkdf2Sync(pass, salt, pass.length+254, pass.length+8, `sha512`).toString(`hex`);
}