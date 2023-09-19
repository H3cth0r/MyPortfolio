<script>
  import { page } from '$app/stores';


  export let blog_data = {};

</script>


<div class="main-container">
  <p class="title">{blog_data.title}</p>
  <div class="date-container">
    <p>{blog_data.date}</p>
  </div>
</div> 

<style>
  .main-container
  {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 50%;
    height: 80%;
  }
  .main-container p {
    color: white; 
    font-family: 'Alike', serif;
    font-weight: 400;
    font-style: normal;
    text-align: justify;
    text-justify: inter-word;
  }
  .title {
    font-size: 60px;
  }
  .date-container
  {
    display: flex;
    align-items: end;
    height: 10% ;
  }
</style>
