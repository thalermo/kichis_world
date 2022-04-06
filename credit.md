## Links we used for the project

Typing text: https://css-tricks.com/snippets/css/typewriter-effect/

https://codepen.io/geoffgraham/pen/jrWwWM

draft

typewriter {
color: #000;
font-family: "retro-gaming";
overflow: hidden; /_ Ensures the content is not revealed until the animation _/
border-right: 0.15em solid orange; /_ The typwriter cursor _/
white-space: nowrap; /_ Keeps the content on a single line _/
margin: 0 auto; /_ Gives that scrolling effect as the typing happens _/
letter-spacing: 0.15em; /_ Adjust as needed _/
animation: typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite;
}

/_ The typing effect _/
@keyframes typing {
from {
width: 0;
}
to {
width: 100%;
}
}

/_ The typewriter cursor effect _/
@keyframes blink-caret {
from,
to {
border-color: transparent;
}
50% {
border-color: orange;
}
}
