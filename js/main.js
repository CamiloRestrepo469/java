const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {
  loop: true,
  delay:75
});

typewriter
  .typeString('!Visitenos y no se arrepentirá¡')
  .pauseFor(200)
  .start();
  
 