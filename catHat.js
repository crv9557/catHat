<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
  <img src="img/cat.png" style="position: relative">
</p>
<script>
  var cat = document.querySelector("img");
  var hat = document.querySelector("img");
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.005
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat style.left = (Math.cos(angle) * 200) + "px";
    hat.style.top = (Math.sin(angle) * 10) + "px";
    hat.style.left = (Math.cos(angle) *100) + "px";
    requestAnimationFrame(animate);
  }
  request AnimationFrame(animate);
</script>
