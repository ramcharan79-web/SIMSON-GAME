# 🎮 Simon Game

A browser-based version of the classic **Simon** memory game, built while learning JavaScript. The game shows a growing sequence of colored button flashes, and you have to repeat it back correctly to advance to the next level.

## 🕹️ How to Play

1. Open `index.htm` in your browser.
2. Press any key to start the game.
3. Watch the sequence of colors that flash.
4. Click the buttons in the same order to repeat the sequence.
5. Each correct round adds one more color to the sequence and increases your level.
6. Get the sequence wrong, and it's game over — your final level is shown as your score. Press any key to try again.

## 📁 Project Structure
  SIMSON-GAME/
├── index.htm # Page structure and layout
├── style.css # Styling and animations
├── simon.js # Game logic
└── README.md # This file

## ✨ Features

- Randomly generated, ever-growing color sequence
- Visual flash feedback for both the computer's sequence and your own clicks
- Level tracker that updates as you progress
- Game-over screen showing your final score
- Responsive layout that works on mobile and desktop
- Dark-themed UI with glowing gradient buttons and a gradient title

## 🛠️ Built With

- **HTML5** – page structure
- **CSS3** – styling, gradients, transitions, and responsive layout
- **Vanilla JavaScript** – game logic, DOM manipulation, and event handling (no frameworks or libraries)

## 🚀 Running the Game

No build steps or installs needed — it's a static site:

1. Download/clone the project folder.
2. Open `index.htm` directly in any modern browser (Chrome, Firefox, Edge, Safari).

That's it — no server required.

## 📚 What I Practiced Building This

- DOM selection and manipulation (`querySelector`, `querySelectorAll`)
- Event listeners (`keypress`, `click`)
- Arrays and array methods for managing game state
- `setTimeout` for timing animations
- Basic game-state management (levels, sequences, win/lose conditions)
- Connecting JavaScript logic to CSS classes for animations

## 🔮 Possible Future Improvements

- Add sound effects for each color
- Add a strict mode (restart from level 1 on a wrong click)
- Add a start/reset button instead of relying on a keypress
- Store and display a high score using `localStorage`
