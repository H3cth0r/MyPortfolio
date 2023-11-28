<script>
  import LogoIcon from "$lib/assets/doodle-logo.png";
  import SandwichIcon from "$lib/assets/swMenu.png";
  import LogoIconBlue from "$lib/assets/doodle-logo-blue.png";
  import SandwichIconBlue from "$lib/assets/swMenu-blue.png";
  import { ButtonLink } from "$lib/components";
  import { page } from '$app/stores';

  let active_menu = false;
  
  let handleOpenMenu = () => {
    active_menu = !active_menu;
  }

  let blueLogo = false;
  let y = 0;
  let innerHeight; 
  $: path = $page.url.pathname;
  $: {
     if(y > 1.8*innerHeight){
        blueLogo = true;   
     }else{
        blueLogo = false;
     }
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/>


<div class={blueLogo ? "navbar-down navbar-item" : "navbar navbar-item"}>
  <div class="buttons-container">
    <img class="logo-button" src={blueLogo ? LogoIconBlue:LogoIcon }/>
    <div class="menu-horizontal">
      <ul class="menu-horizontal-list">
        <ButtonLink label_txt={'Blogging'} label_color={blueLogo ? '#004BC3' : 'white' }/>
        <ButtonLink label_txt={'Gallery'} label_color={blueLogo ? '#004BC3' : 'white' }/>
        <ButtonLink label_txt={'Login'} label_color={blueLogo ? '#004BC3' : 'white' }/>
      </ul>
    </div>
  </div>
</div>


<style>
  .navbar-item {
    z-index: 20;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 8vh;
  }
  .navbar-down {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: white;
    top:0;
    left: 0;
    width: 100vw;
    height: 8vh;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
  }
  .logo-button {
    width: 100px;
    height: 20px;
  }
  .menu-horizontal{
    width: 30%;
    height: 100%;
    display: flex;
  }
  .menu-horizontal-list{
    height: 100%;
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .menu-button {
    width: 60px;
    height: auto;
  }
  .image-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .menu-container{
    pointer-events: none;

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top:0;
    left: 0;
  }
  .center-menu-box-container {
    display: flex;
    justify-content: end;

    width: 80%;
    height: 80%;
  }
  .menu-box-container {
    pointer-events: auto;
    height: 100%;
    width: 60%;
    background-color: white;
    border-radius: 7px ;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow:
    rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
    rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
  }
  .menu-box-inner-container {
    width: 80%;
    height: 80%;
    background-color: green;
  }
</style>
