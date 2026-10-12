# AeroGro AI 🚀🌱

AeroGro AI is a cutting-edge, hybrid AgTech startup application built with **React Native** and **Expo**. The platform bridges real-world sustainable agricultural tracking on Earth with a highly engaging, physics-informed sci-fi simulation framework for automated antigravity farming environments. 

Powered by **AI Core Integration**, it provides actionable insights for modern farmers on Earth while simulating the mechanics of zero-gravity automation in space.

---

## 🌟 Core App Modules

### 1. 📊 Dashboard Home Screen (`DashboardHomeScreen.tsx`)
*   A clean, split-panel navigation dashboard.
*   Orchestrates a top-panel view for Earth-based analytics (weather, live pricing graphs) and a dark-mode space station viewport tracking floating agricultural pod systems.

### 2. 🌾 Earth-Ag Tracker (`EarthAgTrackerScreen.tsx`)
*   **Methodology Toggle:** Seamlessly switch between **Organic Farming** (tracking certified off-farm inputs like bio-fertilizers and compost) and **Natural Farming** (tracking on-farm closed-loop resources, biodiversity, and local microbial cultures).
*   **Weather Intelligence Engine:** Ingests live weather alerts and utilizes predictive algorithms to forecast volatility and price spikes in the vegetable market based on upcoming climate shifts.

### 3. 🛸 Antigravity Simulator (`AntigravitySimulatorScreen.tsx`)
*   **Zero-G Fluid Dynamics:** Simulates a gravity-free cultivation chamber. Solves biological challenges like surface tension pooling, where water clusters into floating spheres that risk suffocating plant roots.
*   **Autonomous Engineering Array:** Visualizes 3D spatial mapping paths for automated misting and pollination drones, alongside robotic arm kinematics for zero-G planting and harvesting.

---

## 🛠️ Tech Stack & Architecture

This application is built with a highly responsive, component-driven TypeScript architecture:

*   **Framework:** [Expo (v50.0.0+)](https://expo.dev) & React Native (v0.74.0)
*   **Navigation:** Native Stack Routing (`@react-navigation/native-stack`)
*   **Data Visualization:** Victory Charts (`victory-native`) for dynamic market price rendering
*   **Graphics Interface:** React Native SVG (`react-native-svg`) to render complex 3D vector paths inside the space physics engine

---

## 📂 Repository File Structure

```text
aerogro-ai/
├── src/
│   ├── components/
│   │   ├── AIChatFAB.tsx                   # Unified AI Assistant Floating Action Button
│   │   ├── AntigravityCanvas.tsx           # 3D/SVG Space Farming Physics Viewport
│   │   ├── AntigravityControlPanel.tsx     # Automation Control Matrix (Drones, Mist, Vacuum)
│   │   ├── ModeToggle.tsx                  # Organic vs. Natural Agriculture Selector
│   │   ├── SplitPanel.tsx                  # Dual Module Dashboard Layout Manager
│   │   └── WeatherIntelligenceWidget.tsx   # Dynamic Climate/Price Correlator
│   └── screens/
│       ├── DashboardHomeScreen.tsx         # Unified App Entry Interface
│       ├── EarthAgTrackerScreen.tsx       # Real-World Market & Eco-Ag Dashboard
│       └── AntigravitySimulatorScreen.tsx  # Space Physics Simulation Sandbox
├── App.tsx                                 # App Root & Navigation Container Configuration
├── package.json                            # System Dependencies & Executable Scripts
└── README.md                               # Project Documentation
```

---

## 🚀 Fast Local Setup & Installation

Get the app running locally on your computer or mobile device in three quick steps:

### 1. Clone the Repository
```bash
git clone https://github.com
cd aerogro-ai
```

### 2. Install Project Dependencies
Ensure you have [Node.js](https://nodejs.org) installed. Run the following command in the project root:
```bash
npm install
```

### 3. Initialize the Development Server
Fire up the Metro bundler engine:
```bash
npm run start
```

### 📱 Testing on Physical Devices
1. Download the **Expo Go** application from the Apple App Store or Google Play Store.
2. Scan the **QR Code** generated in your terminal window using your default phone camera app (iOS) or the Expo Go app scanner (Android).
3. To view the user interface directly on your desktop internet browser instead, press **`w`** in your terminal window.

---

## 📄 License
This project is proprietary and built for startup development. All rights reserved.
