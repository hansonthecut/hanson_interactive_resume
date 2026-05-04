# HansonFlix: System & Implementation Blueprint

## Application Lifecycle
1.  **Bootstrapping**: Browser loads `index.html`.
2.  **Hydration**: `DOMContentLoaded` event triggers `renderPosters` in `script.js`.
3.  **Data Binding**: `resumeData` is iterated to generate HTML elements for each category (Experience, Education, etc.).
4.  **Interaction Ready**: Event listeners are attached for navigation, modals, and audio triggers.

## Core Loops
### Feature: Detail Deep-Dive (Modal)
- **Action**: User clicks a poster card.
- **Logic**: `openModal(item)` is called with the card's data object.
- **State Transition**: `modal-overlay` gains the `.active` class; `body.style.overflow` set to `hidden`.
- **UI Update**: Modal content is dynamically populated via DOM manipulation.

### Feature: Cinematic Audio Sequence
- **Action**: User clicks/keys anywhere on the page (first interaction).
- **Logic**: `startAudioSequence()` plays `intro.mp3`, then waits 3 seconds after completion to play `cinematic_intro.mp3`.
- **Mute Control**: `toggleSound()` updates the `isMuted` flag and syncs audio element `muted` properties.

## Routing Paradigms
The application uses **Hash-Based Internal Routing**. Links in the navbar (e.g., `#experience`) use standard HTML anchor behavior to scroll to section IDs. This is supplemented by `IntersectionObserver` in `script.js` to trigger "scroll-reveal" entrance animations as sections enter the viewport.

## Internal Data Flow
1.  **`resumeData` (Source)**: Centralized object containing all text and asset paths.
2.  **`renderPosters` (Engine)**: Transforms source data into styled DOM elements.
3.  **`style.css` (Layout)**: Governs the positioning, typography, and interactive physics (hover scales, transitions).
