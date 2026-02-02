const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../data/journal.db');
const db = new Database(dbPath);

// Initialize DB
db.exec(`
    CREATE TABLE IF NOT EXISTS entries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        thought TEXT,
        translation TEXT,
        feeling TEXT,
        need TEXT
    );
`);

function saveEntry(thought, translation) {
    const stmt = db.prepare('INSERT INTO entries (thought, translation) VALUES (?, ?)');
    return stmt.run(thought, translation);
}

function getRecentEntries(limit = 5) {
    const stmt = db.prepare('SELECT * FROM entries ORDER BY timestamp DESC LIMIT ?');
    return stmt.all(limit);
}

module.exports = {
    saveEntry,
    getRecentEntries
};
