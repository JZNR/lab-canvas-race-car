document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
  });