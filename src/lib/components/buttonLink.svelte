<script>
  export let label_txt = "None";
  export let label_color = "white";
  export let custom_function = false;
  export let clickedButton = () => {
    alert("Clicked");
  }

  import { onMount } from 'svelte';
  let mouseX = 0;
  let mouseY = 0;
  let showImage = false;

  let offset = 30;
  onMount(() => {
    // Listen for mousemove events to update cursor position
    window.addEventListener('mousemove', handleMouseMove);
  });
  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
  function handleMouseEnter() {
    showImage = true;
  }
  function handleMouseLeave() {
    showImage = false;
  }
</script>


<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<li
  class="li-style"
  on:mouseenter={handleMouseEnter} 
  on:mouseleave={handleMouseLeave}
>
  {#if showImage}
    <div class="square" style={`left:${mouseX-75}px; top:${mouseY + offset}px`} />
  {/if}
  {#if custom_function}
    <a class="a-style" href="#" style={`--label_color: ${label_color}`} on:click={clickedButton}>
      {label_txt} 
    </a>
  {:else}
    <a class="a-style" href="#" style={`--label_color: ${label_color}`} >
      {label_txt} 
    </a>
  {/if}
  <span class="material-symbols-outlined" style={`--label_color: ${label_color}`}>
    arrow_outward
  </span>
</li>

<style>
  /* Style your square image here */
  .square {
    position: absolute;
    width: 150px; /* Adjust the size of the square as needed */
    height: 150px;
    background: url('https://m.media-amazon.com/images/I/71lpeugdqBL.jpg') center center/cover; /* Replace 'path/to/your/image.jpg' with your image URL */
    border-radius: 5px; /* Adjust border radius for a rounded appearance */
    pointer-events: none; /* Allows the mouse events to pass through the square */
  }
  .li-style {
    display: flex;
    align-items: center;
  }
  .a-style{
    font-size: 22px;
    color: var(--label_color);
    padding-right: 5px;
    text-decoration: none;
  }

  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
    color: var(--label_color);
    height: 15px;
  }

</style>
