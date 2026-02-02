# PeaceTalk ⭐

**Transform conflict into connection.**

PeaceTalk is a web application that helps you translate judgmental thoughts into Nonviolent Communication (NVC) feelings and needs, supported by wisdom from A Course in Miracles (ACIM).

## Live Demo
🌐 **[http://peacetalk.duckdns.org](http://peacetalk.duckdns.org)**

## Features
- **NVC Translator:** Turn "He is lazy" into "I feel overwhelmed because I need support."
- **Daily Wisdom:** Get random lessons from ACIM to shift your perception.
- **Journaling:** Save your translations to track your journey (SQLite backed).
- **Philosophy:** Learn how NVC and ACIM complement each other.

## Tech Stack
- **Backend:** Node.js, Express
- **Frontend:** EJS, Vanilla CSS (Outfit & Playfair Display fonts)
- **Database:** SQLite (`better-sqlite3`)
- **Hosting:** Linode (Ubuntu), Nginx Reverse Proxy, PM2

## Development
Running locally:
```bash
npm install
npm start
# Visit http://localhost:3001
```

## License
MIT
