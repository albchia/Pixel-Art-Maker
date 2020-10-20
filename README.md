# Pixel-Art-Maker
A single-page Web App to draw pixel art on a customizable canvas.

This was one of the projects I realized during the Udacity Path "Intro to Programming" Nanodegree.

[See full project](https://albchia.github.io/Pixel-Art-Maker/)

# Table of Contents
- [About the Project](#About-the-Project)
- Contributing

## About the Project
This is the third project made during Udacity classroom on "Intro to Programming".

#### Project Screenshot
Here a preview of my _Pixel Art Maker_!

![pixel-art-maker-screenshot-II](https://user-images.githubusercontent.com/70691672/96138919-8fae9f00-0efe-11eb-8683-eb9881e46bc0.PNG)

#### Project Overview
Title: _"Pixel Art Maker"_

> GitHub: link - https://github.com/albchia/Pixel-Art-Maker.git

For this project the task is to build a single-page web app that allows users to draw pixel art on a customizable canvas. It will be given a `starter code`, including `HTML` and `css`, to build the application. Through the `javascript code` the user will create a `grid` of squares, representing their `design` and apply `colors` to those squares, to create a digital masterpiece.

The user should be able to:
1. Dynamically set the size of the `table` as `_N_` by `_M_` grid
2. Choose a color
3. Click a cell in the grid to fill that cell with the chosen color

The primary task is to implement the `makeGrid()` function, that dynamically creates a grid that user can interact with.

##### _What skills needed?_
In the project you will be use your `front-end programming` skills including:
- Defining `variables` with `const` and `let`
- Accessing the `DOM` using methods of the `document` object
- Declaring `functions` and attaching them to the `DOM object` as event listeners
- Writing `nested loops` and using `loop variables`

#### Project Instructions
Starter code includes all required `HTML input fields`, as well as some basic styling. A skeleton of the `makeGrid()` function is provided.

##### _Development Strategy_
Before writing any code, load up the starter project to see how things look. `Design.js` is implemented in the `<body>` tag in the `index.html` file.

The goal is to built out the `design.js` file to achieve all the interactive elements on the page. Opening `design.js`, keep these three tasks in mind:

1. **Define your variables** by selecting the `DOM elements` that the user will interact with. This is where `js variables` come into play (these variables have to be accessed):
      - `submit` button
      - `table`
      - `color picker`
