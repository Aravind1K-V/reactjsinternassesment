
# Onboarding gif assessment

## Overview:
In this project, I have created an animated  React JS component based on a gif.      
The interface consists of a centered container with a fixed width and height, styled with borders and shadows to create a card-like appearance.  
Inside the container, there's a welcome message, a circular area representing the animation, and two buttons for user interaction.  
The moving point within the circular area is created using nested div elements with CSS styling for position and appearance.  
The buttons are styled with rounded corners and hover effects.  

## Key Components: 
**App**: The main component of the application.    
**useState** and **useEffect** hooks: Used for managing state and performing side effects respectively.  
**Math.cos** and **Math.sin**: Utilized to calculate the x and y coordinates of the moving point based on the angle.  
## Animation:
1. To create the animation part, I have used the useState and useEffect hooks to create and manage state variables (xcoord, ycoord, and angle).   
2. useState here returns an array with two elements: the current state value and a function to update that value.  
3. I have initialized three state variables: xcoord, ycoord, and angle, with initial values of 20, 20, and 0 respectively.  
4. Here, useEffect is set up to run every time the angle state changes.  
5. Inside the effect, it sets up an interval using setInterval. This interval runs a function every 20 milliseconds.  
6. Inside the interval function, it updates the angle state by adding a small angle increment to its previous value. The angle is calculated in radians and wraps around when it reaches 2 * π.  
7. Then, it calculates new xcoord and ycoord based on the trigonometric functions Math.cos and Math.sin using the current angle.  
8. Finally, it updates the state variables xcoord and ycoord with the newly calculated values.


## Challenges:

The animation part was a bit challenging for me, so I had to surf the internet for it.   
I have used the information provided on the internet and tried to replicate the animation part as much as I could.

