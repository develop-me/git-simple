(d => {
  // get the height
  // have to subtract the window height as the pageYOffset
  // will never go to the bottom of the page as it doesn't scroll
  // beyond the end of the page
  let height = d.body.clientHeight - window.innerHeight;

  // create a named set function
  let set = () => {
      // get the current vertical scroll position
      let current = window.pageYOffset;
      // work out the hue by dividing by the height
      // and multiplying by 360
      // will give a value between 0 and 360
      let hue = Math.round((current / height) * 360);
      // set the body background colour
      d.body.style.backgroundColor = "hsl(" + hue + ",50%,50%)";
  };

  // on scroll call the set function
  window.addEventListener("scroll", set);

  // call the set function when the page loads
  // just in case it loads half way down
  set();
})(document);
