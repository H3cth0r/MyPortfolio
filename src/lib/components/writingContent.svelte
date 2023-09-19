<script>
  export let title;
  export let date;
  export let content;
</script>

<div class="main-container">

  <div class="sub-container header-container">
      <div class="header-row header-title">
        <p>{title}</p>
      </div>
      <div class="header-row header-date">
        <p>{date}</p>
      </div>
  </div>

  <div class="sub-container content-container">
    <p>
      {content} 
    </p>
  </div>

</div>


<style>
  .main-container
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
  }
  .sub-container
  {
    width: 80%;
    max-width: 800px;
  }
  .sub-container p
  {
    text-align: justify;
  }
  .header-container
  {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 15vh;
  }
  .header-title
  {
    width: 100%;
  }
  .header-row
  {
    width: 100%;
  }
  .header-title p
  {
    font-size: 35px;
  }
  .header-date
  {
    display: flex;
    align-items: end;
    height: 25%;
    width: 100%;
    border-top : 1px solid black;
  }
</style>
