# **Moon Power** 
[Live Link!](https://winnieng3210.github.io/Moon_Power/)

![JSP](https://user-images.githubusercontent.com/32966351/137028073-c2ef6fa3-d894-4538-af2a-22df5f7e9e49.gif)


## **Background**

Moon Power is a one-player game that has a mix of functionality between Plant vs. Zombies and the classic arcade game, Alien Invasion.

Similar to Alien Invasion, you have control of where to fire your weapon at the Aliens, or in our case the enemies.

At some point the difficulty level will go up where the enemies will approach you much faster and, similar to Plant vs. Zombies, it will take more than one hit for the enemies to be exterminated.

You will have three life points, each life points indicating how many enemies went past you and in to the village. If you lose all three life points, you lose.

To win, you will have to defeat the Queen 3 times, who will pop up at random.

## **Functionality & MVPs**

In the game, users will be able to:
* Start, pause and reset the game board
* Navigate your character with the up and down key
* Use space bar to fire your weapon at the enemies
* Use the 'r', 'p' and 'm' keys to reset the game, pause the game or toggle sounds, respectively.

In addition, this project will include:
* A modal describing the background and rules of the game


## **Wireframes**
<img src="https://github.com/WinnieNg3210/JS_Project/blob/main/WireFrame.png?raw=true" style="height: 300px; width:500px;">

* Nav links include links to this project's Github repo, my LinkedIn, (and in
the future, my own website)
* How-to-play will display a pop up modal that shows the instruction of the game
* Game controls will allow the user to start, pause and reset the game



## **Technologies, Libraries, APIs**

This project will be implemented with the following technologies:
* The Canvas API to render the game board
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies
* HTML5, CSS, JavaScript, Canvas

## **Implementation Timeline**

* Friday Afternoon & Weekend: Setup project: Get webpack up and running. 
Get my canvas to show up on the screen and spend time getting comfortable with 
the Canvas API. Spend about 2-3 hours looking through a couple tutorial videos.
Outline the game board, the enemies, the resources and the utilities. 

* Monday: Implement all the underlying logic of the game. Ensure the grids 
update accordingly. Make sure everything is rendered appropriately on the
canvas.

* Tuesday: Finish making sure everything is rendered appropriatly in the 
canvas. Create the instruction modal as a hover.  After that, focus on user 
controls: start, stop, reset.

* Wednesday: Finish implementing user control. Create the styling. Implement
nav links.

* Thursday Morning: Deploy to Github pages

## **Code Snippets**
Detecting collision is the entire basis of the game where when two elements collide, something will happen. In this case, our enemies disappears.
I created a simple algorithm if detecting collision between two rectangles that are axis-aligned (no rotations or any complicated shapes); it simply compares the x and y as well as the width and height of two rectangles. If there's an overlap between the rectangle, we get collision.

```...javascript
  detectCollision(first, second) {
    if (
      !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
      )
    ) {
      return true;
    }
  }
```

## **Credits**
Assets used in the game:
* [LinkedIn & Github icons by Icons8](https://icons8.com/icon/)
* [Sprite Sheets by Sithjester](http://untamed.wild-refuge.net/rmxpresources.php?characters)
* [Sailormoon SoundEffects](https://www.zedge.net/ringtone/f21edd0c-abf0-3264-9bf1-6f3d459182fa)
