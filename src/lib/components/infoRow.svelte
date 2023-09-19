<script>

  // props
  export let info_title = "Basic Stocks Operations";
  export let info_content = "Basic Stocks Operations: Personal project. Developed financial indicators and applied them to evolving neural networks for trading stocks and options. Achieved substantial returns averaging 20-35% per month on simulations. Migrating project to Uber Research team's PyTorch-NEAT library and C++ bindings for improved performance.";
  export let info_link = null;


  const openLinkNewTab = () => {
    window.open(info_link, '_blank'); 
  }

</script>

<div class={info_link ? "main-container" : "main-container-no-button"}>
  <div class="info-container">
    <p class="info-title">{info_title}</p>
    <p class="info-paragraph">
      {info_content}
    </p>
  </div>
  {#if info_link != null}
    <div class="button-container">
      <button class="button-link" on:click={openLinkNewTab}>
        <p>Github</p>
      </button>
    </div>
  {/if}
</div>


<style>
  .main-container 
  {
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
  .main-container-no-button
  {
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
  .info-container
  {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 55%;
    text-align: justify;
  }
  .info-title
  {
    font-size: 20px;
  }
  .button-container
  {
    display: flex;
    align-items: end;
    justify-content: end;
    height: 30%;
  }
  .button-link
  {
    font-family: "Times New Roman", Times, serif;
    width: 13%;
    background-color: transparent;
    border: 1px solid black;
    color: black;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button-link:hover
  {
    font-family: "Times New Roman", Times, serif;
    width: 13%;
    background-color: black;
    border: 1px solid black;
    color: black;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .button-link:hover p
  {
    color: white;
  }
</style>
