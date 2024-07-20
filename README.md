# One More Light

## Description

One More Light is a web application that creates a dynamic lighting effect based on user settings. The app allows users to configure the duration, color mode, and speed of the lighting effect.

## Features

- **Lighting Effect**: Customizable lighting effect with multiple color modes and speed options.
- **Settings Configuration**: Users can select duration, color mode, and speed for the effect.
- **Warning Modal**: A warning is displayed before the lighting effect starts to caution users about potential sensitivity issues.
- **Responsive Design**: Uses Bootstrap for styling, ensuring a consistent look across devices.

## Technologies Used

- **React**: For building the user interface.
- **Bootstrap**: For styling and responsive design.
- **Babel**: For JSX compilation.

## Setup

1. **Include Dependencies**: Ensure the following scripts are included in the HTML file for React, ReactDOM, Babel, jQuery, and Bootstrap:

    ```html
    <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    ```

2. **HTML Structure**: Ensure the HTML file includes a `div` with an `id` of `root` for React to mount the application:

    ```html
    <div id="root" class="app"></div>
    ```

## Usage

1. **Start Screen**: Configure the lighting effect settings, including duration, color mode, and speed.
2. **Warning Modal**: A warning modal will appear on the first start, asking if you wish to proceed with the lighting effect.
3. **Lighting Effect**: Once started, the lighting effect will apply the chosen settings and will stop after the specified duration or when a click is detected.
