((d, w) => {

    // doing the thing


    let hue = 0;
    let last = 0;
    const speed = 5000; // for the hue method
    let body = d.getElementById("body");
    
    console.log(body);

    let doTheThing = time => {
        let dt = time - last;
        last = time;
      
         // using hue
        hue += dt / speed * 360;
        body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
        
        // Text fun
        if (Math.floor(hue) % 2) {
            body.style.color = "white";
          } else {
            body.style.color = "black";
          }

        requestAnimationFrame(doTheThing);
    };

    doTheThing(0); // do THE THING
    
})(document, window);