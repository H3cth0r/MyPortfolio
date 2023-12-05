<script>
  import LogoIcon from "$lib/assets/doodle-logo.png";
  import SandwichIcon from "$lib/assets/swMenu.png";
  import LogoIconBlue from "$lib/assets/doodle-logo-blue.png";
  import SandwichIconBlue from "$lib/assets/swMenu-blue.png";
  import { ButtonLink, RowButton } from "$lib/components";
  import { page } from '$app/stores';
  import { writable } from 'svelte/store';

  let active_menu = false;
  
  let handleOpenMenu = () => {
    active_menu = !active_menu;
  }

  let blueLogo = false;
  let y = 0;
  let innerHeight; 
  let innerWidth;
  $: path = $page.url.pathname;
  $: {
     if(y > 1.8*innerHeight){
        blueLogo = true;   
     }else{
        blueLogo = false;
     }
  }

  let menuOpenned = writable(false);
  const openOrCloseMenu = () => {
    menuOpenned.update((status_menu) => !status_menu);
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight} bind:innerWidth={innerWidth} />



<div class={blueLogo ? "navbar-down navbar-item" : "navbar navbar-item"}>
  <div class="buttons-container">
    <img class="logo-button" src={blueLogo ? LogoIconBlue:LogoIcon }/>
    <div class="menu-horizontal">
      <ul class="menu-horizontal-list">
        {#if innerWidth > 700}
          <ButtonLink label_txt={'Blogging'} label_color={blueLogo ? '#004BC3' : 'white' }/>
          <ButtonLink label_txt={'Gallery'} label_color={blueLogo ? '#004BC3' : 'white' }/>
          <ButtonLink label_txt={'Login'} label_color={blueLogo ? '#004BC3' : 'white' }/>
        {:else}
          <ButtonLink 
            label_txt={'Menu'} 
            label_color={blueLogo ? '#004BC3' : 'white' } 
            custom_function={true}
            clickedButton={openOrCloseMenu}
          />
        {/if}
      </ul>
    </div>
  </div>
</div>

{#if $menuOpenned && innerWidth < 700}
  <div class="navbar-menu navbar-item">
    <div class="buttons-container-menu">
      <img class="logo-button" src={ LogoIconBlue }/>
      <div class="menu-horizontal">
        <ul class="menu-horizontal-list">
            <ButtonLink 
              label_txt={'Close'} 
              label_color={ '#004BC3' } 
              custom_function={true}
              clickedButton={openOrCloseMenu}
            />
        </ul>
      </div>
    </div>
    <div class="menu-vertical-container">
      <ul
        class="vertical-list"
      >
          <RowButton label_txt={'Blogging'} label_color='#004BC3'/>
          <RowButton label_txt={'Blogging'} label_color='#004BC3'/>
      </ul>
    </div>
  </div>
{/if}

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
  .navbar-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    background-color: white;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
  .buttons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 100%;
  }
  .buttons-container-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 8vh;
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
  .menu-vertical-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 88vh;
  }
  .vertical-list {
    width: 100%;
    padding-top: 4vh;
  }

  @media (max-width: 1280px){
    .menu-horizontal{
      width: 35%;
    }
  }
  @media (max-width: 1100px){
    .menu-horizontal{
      width: 45%;
    }
  }
  @media (max-width: 1000px){
    .menu-horizontal{
      width: 55%;
    }
  }
  @media (max-width: 700px){
    .menu-horizontal{
      width: 65%;
    }
  }
  @media (max-width: 700px){
    .menu-horizontal-list{
      justify-content: end;
    }
  }
</style>
