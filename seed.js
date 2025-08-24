import { init, getDB } from './db.js';import bcrypt from 'bcryptjs';import { v4 as id } from 'uuid';
init(); const db=getDB();
function addUser(email,name,role){const uid=id();const pw=bcrypt.hashSync('password',10);db.prepare('INSERT INTO users (id,email,name,role,password_hash) VALUES (?,?,?,?,?)').run(uid,email,name,role,pw);return uid;}
const userId=addUser('user@example.com','Test User','user'); const expertUserId=addUser('expert@example.com','Expert','expert');
const expertId=id(); db.prepare('INSERT INTO experts (id,user_id,title,bio,rate_per_min_cents,is_online) VALUES (?,?,?,?,?,1)').run(expertId,expertUserId,'Cookie Artist','Royal icing tips',200);
console.log('Seeded demo accounts. user@example.com / expert@example.com (password: password)');