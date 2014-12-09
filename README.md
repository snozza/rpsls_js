Rock Scissors Paper Lizard Spock
========================

## RSPLS

### Introduction

RSPLS is a javascript of version of the extended edition of Rock Scissors Paper (includes Lizard and Spock). The task was set by Makers Academy and an added goal was to create the game logic while using minimal conditional statements. The entire game is written in JavaScript, with a hint of JQuery to provide effects and game outcome animations. To make for a quick online integration, a simple Sinatra app was setup so that this could be deployed to Heroku with minimal fuss. Testing was done using Jasmine.

### Languages/Platforms/Tools

* JavaScript
* JQuery
* Jasmine


### Learning Outcomes

This was the first project we did that actively used JQuery to provide dynamic content on a webpage and improve the overall animation experience. It was also one of the first times that we touched on front end JavaScript. As this was a carry-on from the standard Rock Scissors Paper task that we did previously, the logic was reasonably simple to extend.  Overall it was a relatively pain free experience, but provided a lot of insight into the uses of JavaScript and JQuery to provide dynamic content (a huge step up from our static Battleship app).

### To-do List
- [ ] Refactor the code. A small refactor goes a long way
- [ ] Make the design a little more funky. The CSS and HTML are effective, but rather simple.
- [ ] Exploit more of the JQuery functions and effects, currently just using basics.
- [ ] Turn this into a 2 player game (currently only vs. computer).
- [ ] Make session based to allow this to be truly multiplayer.


### Instructions

The live version of the site is available at [http://spockety-paper.herokuapp.com/](http://spockety-paper.herokuapp.com/).

Clone the repository:

```
$ git clone git@github.com:snozza/rpsls_js.git
```

Change into the directory

```
$ cd rpsls_js

```

Run the tests: 

```
$ open SpecRunner.html

```
