<script>
  export let data;

  import "../app.css";
  import { InfoRow } from "$lib/components";
  // import { db } from "../firebase.server.js";
  import { Header } from "$lib/components";
  import { TitleHeader } from "./partials";

</script>


<Header componentInsert={TitleHeader} --background-color="#004BC3" />

<div class="my-work-container">
  <div class="center-holder-white">
   
    <div class="section-title">
      <p>My Work</p>
    </div>

    {#each data.mywork_data as { info, title, url }, i}
      <InfoRow info_title={title} info_content={info} info_link={url}/>
    {/each}
  </div>
</div>

<style>
  .my-work-container {
    display: flex;
    justify-content: center;
    width: 100vw;
  }
  .center-holder-white {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    max-width: 800px;
  }
  .section-title
  {
    width: 100%;
    height: 8vh;
  }
  .section-title p
  {
    font-size: 35px;
  }
</style>
