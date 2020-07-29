((d, w) => {
    let main = d.getElementById("main");
    let follow = d.getElementById("follow");

    let startingPos = follow.getBoundingClientRect();

    w.addEventListener("mousemove", MouseEvent => {
        let moveX = MouseEvent.clientX;
        let moveY = MouseEvent.clientY;

        let hue = (moveX / w.innerWidth) * 360;

        let xPos = moveX - startingPos.x - (startingPos.width/2);
        let yPos = moveY - startingPos.y - (startingPos.height/2);

        follow.style.transform = `translate(${xPos}px, ${yPos}px)`;
        follow.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
    });

    
})(document, window);