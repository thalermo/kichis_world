## click on Kichi ☑️

## add the typing field

## css stuff

-make bubble speech exact width as the wall
-make thw font size bigger
-place kichi in center
-add some space between kichi and select button
-when kichi speaks, her figure should glow
-make kichi sprites (slightly different variations of image) for interactivity

## JS

-store data from user(user name, task and pre-set time)
-add typing field and store the info

-

## Ideas

-use background to give more features to the app (doors, elements in the room) eg. the door on the right is the exit
-select button can be used to select a task (rename to "Tasuku button")
-add voice feature

## Api sh\*t

-add motivational quotes/facts about japan/new japanese word/weather/all

## Todays tasks 24.11.22

- corrected the input width to 95% ✅
- place a function in the text array instead. (Marc's example)
- show the user bubble after asking the question
- show the buttons after choose a task
- adding an animation to the user bubble that appear after kichis bubble stop typing

- change all the interface, interacting with the keyboard, for consistency

- keys interaction. each key represent a word in japanese for something. for example, 動機
  Dōki, the key D will open the Doki door for more motivation. etc.

- place on the doors some japanese words

I done this -- npm install react react-dom

---

function mergeLocalStorage(key, obj){
var newObj = JSON.parse(localStorage.getItem(key));
for (var k in obj){
newObj[k] = obj[k];
}
localStorage.setItem(key, JSON.stringify(newObj));
return newObj;
}
