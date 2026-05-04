# Project Changelog - HANSONFLIX Interactive Resume

This document tracks all major technical changes, bug fixes, and feature implementations performed on the Hanson Interactive Resume project.

## [2026-05-04] - Deployment & Final Polish
### Added
- **Clickable Contact Links**: Implemented `tel:` links for the phone number and `mailto:` links for the email address in both the navbar and footer.
- **Sequential Audio Logic**: Added custom JavaScript to play `intro.mp3` followed by a 3-second delay and then `cinematic_intro.mp3` upon first user interaction.
- **Changelog**: Created `change.md` to document project history.

### Fixed
- **Portrait Framing**: Adjusted the hero portrait multiple times, ultimately removing the circular avatar next to the title as requested and optimizing the hero layout.
- **Section Overlap**: Increased vertical spacing between the hero section and content rows to `250px-300px` to prevent visual clutter and overlapping elements.
- **CI/CD Build Failures**: 
    - Resolved `fatal: No url found for submodule` error by removing broken submodule references in the Git index.
    - Fixed 404 image errors on GitHub Pages by standardizing folder names to lowercase (`assets/`, `documents/`) and correcting Git index case sensitivity.
- **Broken Assets**: Replaced failing external Pixabay audio links with reliable local assets in `assets/sounds/`.

### Changed
- **Folder Structure**: Migrated all assets to a flat, lowercase directory structure for cross-platform compatibility (Linux/macOS).
- **Hero Title**: Removed "Starring — Frank Hanson" to streamline the branding and focus on the "HANSONFLIX" identity.

## [2026-05-03] - Rebranding & Asset Optimization
### Added
- **Rebranding**: Restored the "HANSONFLIX" brand name and theme.
- **Optimized Video**: Replaced the 370MB 4K drone video with a GitHub-friendly 69MB version (`Drone github version.mp4`).

### Changed
- **Asset Naming**: Renamed all files to use snake_case and removed spaces/special characters to prevent URL encoding issues.

## [Future Recommendations]
- **Naming Conventions**: Always use lowercase and snake_case for files and folders.
- **File Size**: Keep assets under 50MB where possible for optimal GitHub Pages performance.
- **Audio**: Ensure user interaction precedes audio playback to comply with modern browser autoplay policies.
