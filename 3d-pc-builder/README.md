# 3D PC Builder

A high-end interactive PC assembly tool with real-time 3D visualization.

## Features
- **3D Workbench**: Interactive 3D PC case visualization using React Three Fiber.
- **Component Gallery**: Browse and filter hardware components with compatibility status.
- **Real-time Compatibility**: Automatic checks for socket, clearance, and power requirements.
- **Build Summary**: Detailed breakdown of costs, performance metrics, and compatibility reports.
- **Modern UI**: Dark-themed, tech-focused design using Tailwind CSS and Lucide icons.

## Tech Stack
- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Rendering**: Three.js & @react-three/fiber
- **Icons**: Lucide React
- **Routing**: React Router DOM v6

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
npm install --registry=https://registry.npmmirror.com
```

### Development
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build
```bash
npm run build
```

## Project Structure
- `src/components/`: Reusable UI components and 3D models.
- `src/pages/`: Application pages (Home, Workbench, Parts, Summary).
- `src/App.tsx`: Routing configuration.
- `src/main.tsx`: Entry point.
- `design-drafts/`: Original design drafts.
