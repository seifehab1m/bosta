# Bosta

This is a React-based web application built using **Vite** that includes features such as light and dark modes, code splitting, memoization, animations, and the ability to download content in both Arabic and English.

## Setup and Installation

Follow these steps to set up and run the application locally:

1. Clone the repository:
   https://github.com/seifehab1m/bosta.git

2. Navigate to the project directory:
   cd bosta

3. Install the required dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the application:
   The application will open in your default browser at **http://localhost:5173**

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine. You can check if they are installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

## Notes on Additional Features

1. Light and Dark Mode:
   Implemented a theme toggle that allows users to switch between light and dark modes. This improves the accessibility and visual experience for users in different lighting environments.

2. Code Splitting:
   Applied Vite's built-in code-splitting feature to split large chunks of JavaScript files into smaller, on-demand-loaded bundles. This results in faster initial load times for the application, enhancing performance.

3. Memoization with Lodash:
   Used Lodash to memoize API requests to avoid sending the same requests multiple times. This helps to reduce unnecessary network traffic and improve the overall performance of the app.
4. Animation:
   Added smooth, interactive animations on the page to improve transitions and overall user experience. These animations provide a dynamic and visually engaging interface, making the application feel more fluid and responsive.

5. Download PDF:
   Implemented functionality that allows users to download the content of the site as a PDF file in both Arabic and English. This feature was implemented using the jsPDF library, and it ensures that users can get a downloadable document in their preferred language.
