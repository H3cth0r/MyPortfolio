<script>
  export let label_txt = "None";
  export let label_color = "white";
  export let custom_function = false;
  export let clickedButton = () => {
    alert("Clicked");
  }
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<li
  class="li-style"
  style={`--label_color: ${label_color}`}
  on:click={clickedButton}
>
  {#if custom_function}
    <a class="a-style" href="#" style={`--label_color: ${label_color}`} >
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
  .li-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
    whidth: 100%;
    height: 8vh;
    border-bottom: 1px solid var(--label_color);
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
