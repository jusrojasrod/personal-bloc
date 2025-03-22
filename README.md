# New York Times Clone

A responsive clone of the New York Times website with dark mode support.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark mode toggle with persistent preference storage
- Clean typography matching the NYT style
- Component-based architecture for maintainability
- Realistic mock news content across various categories

## Current Version: 5 - Clean Header Design

The latest version features a cleaner header design with:
- Removed subscription and login buttons
- Dark mode toggle for easy theme switching
- Fully responsive navigation
- Authentic NYT typography and layout

## Screenshots

### Light Mode
![Light Mode Screenshot](https://via.placeholder.com/800x600.png?text=NYT+Clone+Light+Mode)

### Dark Mode
![Dark Mode Screenshot](https://via.placeholder.com/800x600.png?text=NYT+Clone+Dark+Mode)

## Technology Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   bun install
   ```
3. Start the development server:
   ```
   bun run dev
   ```
4. Open your browser to `http://localhost:3000`

## Project Structure

- `/src/components`: Reusable UI components
- `/src/app`: Next.js app router pages
- `/src/context`: React context for theme management
- `/src/data`: Mock data for articles

## Dark Mode Implementation

The dark mode is implemented using:
- React Context for state management
- CSS variables with HSL color values
- LocalStorage for persisting user preferences
- System preference detection
- Smooth transitions between themes

## Credits

This is a demo project created for educational purposes.
