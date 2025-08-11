import Database from 'better-sqlite3';import fs from 'fs';
const db = new Database('./blinkchat.db'); db.pragma('journal_mode = WAL');
export function init(){ db.exec(fs.readFileSync('./models.sql','utf8')); }
export function getDB(){ return db; }