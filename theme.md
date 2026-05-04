# Theme & Visual Philosophy

## Interactive Physics
- **Motion Curves**: All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` for a smooth, premium feel.
- **Depth Hierarchy**: Z-index strategy ensures the Navbar remains on top (1000), followed by Modals (2000) and Toasts (3000).
- **Scale Effects**: Hovering over poster cards triggers a `scale(1.05)` transformation with a `box-shadow` lift to signify interactivity.

## Token Marriage (Color Palette)
| Token | HEX | Usage |
| :--- | :--- | :--- |
| **Primary Black** | `#141414` | Main background and footer. |
| **Netflix Red** | `#e50914` | Branding, active buttons, and CTA links. |
| **Secondary Gray** | `#b3b3b3` | Subtitles, descriptions, and meta-text. |
| **Pure White** | `#ffffff` | Titles, icons, and high-emphasis text. |
| **Overlay Black** | `rgba(0,0,0,0.8)` | Modal backdrops and hero gradients. |

## Typography Standards
- **Font Family**: 'Inter', sans-serif (Google Fonts).
- **Weights**:
    - **Bold (700-900)**: Used for titles (`HANSONFLIX`, `h1`, `h2`).
    - **Regular (400)**: Body text and descriptions.
    - **Light (300)**: Meta-text in modals.

## Standardized Components
- **Navbar**: Sticky at the top, transparent on load, transitions to opaque black on scroll.
- **Poster Cards**: Consistent aspect ratios with bottom-aligned text overlays.
- **Modals**: Full-screen centered overlays with responsive padding and content scaling.
