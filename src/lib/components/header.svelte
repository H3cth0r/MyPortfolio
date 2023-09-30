<script>
  export let componentInsert;
  let y = 0;
  let innerHeight; 
  function calculate(y, startY, endY, startValue, endValue) {
		const diffY = endY - startY
		const diffValue = endValue - startValue
		if(y < startY) {
			return startValue;
		}else if(startY <= y && y <= endY) {
			const progress = (y - startY)/diffY;
			return startValue + (diffValue * progress);
		}else if(endY < y){
			return endValue;
		}
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={innerHeight}/>

<div class="main-container"
  style="opacity: {calculate(y, 0.5*innerHeight, 1.8*innerHeight, 1, 0)};"
>
    <div class="center-holder">
        <svelte:component this={componentInsert} {...$$restProps}/>
    </div>
</div>

<style>
  .main-container {
    display: flex;
    justify-content: center;

    background-color: var(--background-color);
    width: 100vw;
    height: 300vh;
  }
  .center-holder {
    display: flex;
    align-items: center;
    width: 80%;
    height: 100vh;
  }
  .center-holder-white {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100vh;
  }

  @media (max-width:500px){
    .center-holder{
      width: 90%;
    }
  }
</style>
