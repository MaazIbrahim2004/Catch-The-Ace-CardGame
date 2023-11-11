# Catch The Ace!

## Overview
Catch The Ace! is an interactive card game where players hunt for the Ace of Spades. Built with HTML, CSS, and JavaScript, this game offers a visually appealing interface and engaging gameplay.

## Play Online
Access the live game here: [Catch The Ace!](https://catchtheace.netlify.app)

## Features
- **Dynamic Gameplay**: Players navigate through rounds, each with a new arrangement of cards.
- **Responsive Design**: The layout adapts to different screen sizes for an optimal gaming experience on various devices.
- **Local Storage**: Game progress is saved, allowing players to continue from where they left off.
- **Animations**: Smooth card flip and shuffle animations enhance the user experience.

## How to Play
1. **Start the Game**: Click the 'Play Game' button.
2. **Choose a Card**: Click on a card to reveal if it's the Ace of Spades.
3. **Scoring**: Points are awarded for finding the Ace. The game tracks your score and round.
4. **Game End**: The game concludes after four rounds or when the Ace is found.

## Setup for Local Development
To run this game on your local machine:
1. Clone or download the repository.
2. Open `index.html` in a modern web browser.

## Technologies Used
- HTML
- CSS (with an import from Google Fonts)
- JavaScript (ES6)
- JSON for data serialization

## Game Mechanics
- The game uses a grid layout for card positioning.
- Cards are dynamically created and shuffled using JavaScript.
- LocalStorage is utilized for saving and retrieving game progress. Game state is serialized to JSON for storage and then parsed back into JavaScript objects upon retrieval.
- This approach allows for a seamless experience, with players able to resume their game even after closing the browser.

## Data Handling
- The game leverages JSON for managing game state information.
- Card details, scores, and round information are stored in a structured JSON format, which simplifies the process of updating and retrieving game data.

## File Structure
- `index.html`: Main HTML file.
- `style.css`: CSS file for styling.
- `index.js`: JavaScript file containing game logic.
