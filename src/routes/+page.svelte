<script>
  /** @type {import('./$types').PageData} */
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
<div class="my-work-container">
  <div class="center-holder-white-center">
    <div class="section-title">
      <p>Check This Tracks</p>
    </div>
    <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/playlist/6hlsJJQkNzxBWqwrTSz3xG?utm_source=generator&theme=0" 
            width="100%" 
            height="360" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; 
            clipboard-write; 
            encrypted-media; 
            fullscreen; 
            picture-in-picture" 
            loading="lazy">
    </iframe>
  </div>
</div>

<style>
  .my-work-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }
  .center-holder-white {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    justify-content: space-between;
    width: 80%;
    z-index: 10;
    max-width: 800px;
  }
  .center-holder-white-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 80%;
    z-index: 10;
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
