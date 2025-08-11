import { init, getDB } from './db.js';import bcrypt from 'bcryptjs';import { v4 as id } from 'uuid';
init(); const db=getDB();
function user(email,name,role){const pw=bcrypt.hashSync('password',10);const uid=id();db.prepare('INSERT INTO users (id,email,name,role,password_hash) VALUES (?,?,?,?,?)').run(uid,email,name,role,pw);return uid;}
const u = user('user@example.com','Test User','user'); const euid = user('expert@example.com','Expert','expert');
const exid = id(); db.prepare('INSERT INTO experts (id,user_id,title,bio,rate_per_min_cents,is_online) VALUES (?,?,?,?,?,1)').run(exid,euid,'Cookie Artist','Royal icing tips',200);
console.log('Seeded:', {user:'user@example.com', expert:'expert@example.com', password:'password'});