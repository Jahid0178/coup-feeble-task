# Feeble Hero Section Implementation

A pixel-perfect implementation of the Feeble Hero Section. This project demonstrates high-fidelity UI replication, advanced animation orchestration, and clean, maintainable code.

## 🚀 Live Demo

**Link:** https://coup-feeble-task.vercel.app/

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (Motion 12+)
- **Deployment:** Vercel

## 🎬 Animation & Interaction Strategy

To meet Feeble's standard for "Execution Excellence," I implemented a layered animation system designed for depth and narrative flow.

### 1. Parallax & Layered Entrance

In the `HeroScenery` component, I used a **Z-axis layering strategy** (z-10 through z-40).

- **The Motion:** The background container uses a `circOut` easing over 1.5s for a "smooth landing" effect.
- **Visual Depth:** By staggering opacity (10%–15%) and scaling layers (shape-1 to shape-4), I created atmospheric depth that frames the content without distracting the user.

### 2. Kinetic "Bird" System

I built a modular `Bird` component to handle both static and dynamic environmental details:

- **Ambient Birds:** Fixed elements with speech bubbles to add personality to the business-centric theme.
- **Dynamic Pathing:** In `AnimationBirds`, I used viewport-relative units (`vw/vh`) to animate birds crossing the screen.
- **Directional Logic:** Used `-scale-x-100` dynamically to ensure bird assets face their direction of travel.

### 3. Performance & Usability

- **GPU Acceleration:** All animations are handled by Framer Motion for 60fps performance.
- **Responsive Layouts:** Used `hidden lg:block` to declutter the scene on mobile while maintaining visual richness on desktop.
- **Interactivity Safety:** Implemented `pointer-events-none` on all decorative layers to ensure zero interference with CTAs and buttons.

## ⚙️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jahid0178/coup-feeble-task
   ```
