# Feature: PeaceTalk MVP

## Goal
Build a "Nonviolent Communication (NVC) & ACIM Helper" web app.
The app helps users translate judgmental thoughts into NVC format (Observation, Feeling, Need, Request) and provides daily wisdom from A Course in Miracles (ACIM).

## Tech Stack
- **Backend**: Node.js + Express
- **Frontend**: EJS Templates + Vanilla CSS (Simple, clean, calming design)
- **Database**: SQLite (via `sqlite3` or `better-sqlite3`) for storing journal entries.
- **AI Integration**: Use a simple heuristic or mock for now (or `opencode` CLI if possible later, but start with rule-based or placeholder for "Translation").

## Requirements

### 1. Project Structure
- Initialize Node.js project (`package.json`).
- Install dependencies: `express`, `ejs`, `body-parser`, `better-sqlite3`.
- Create basic folder structure (`public`, `views`, `routes`).

### 2. Core Features
- **Home Page**: A calm, welcoming landing page.
- **NVC Translator Tool**:
    - Input: Text area ("What are you thinking?").
    - Process: A simple function that takes the input and "reframes" it (for MVP, use a simple keyword replacement or a placeholder response like "I hear you are feeling frustrated...").
    - Output: Display the reframed text.
- **ACIM Daily Lesson**:
    - A button "Get Daily Lesson".
    - Fetches a random lesson from a local JSON file (I will provide a small list of 5-10 lessons).
    - Displays the lesson on the page.
- **Journal**:
    - "Save Entry" button on the Translator result.
    - View "My Journal" page listing past entries.

### 3. Design
- Use a "Calm" color palette (Soft blues, whites, gentle greens).
- Responsive layout.

## Tasks
- [ ] Initialize project and git repo.
- [ ] Create `server.js` with basic Express setup.
- [ ] Create `views/index.ejs` (Home) and `views/layout.ejs`.
- [ ] Implement ACIM Lesson logic (create `data/lessons.json` and API route).
- [ ] Implement NVC Translator UI and basic logic (mock function).
- [ ] Implement SQLite database for Journal.
- [ ] Add "Save" and "List" functionality for Journal.
- [ ] Style the application with CSS (`public/style.css`).
- [ ] Final Review: Ensure app runs on port 3000.
