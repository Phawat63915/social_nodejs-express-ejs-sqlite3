import { hash_password } from "./hashpassword.js";

export const check_password = (password_hash_db, password) => {
    return hash_password(password,password_hash_db.split('.')[0]) == password_hash_db
}