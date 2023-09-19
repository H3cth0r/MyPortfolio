<script>
  export let data;

  // import { page } from '$app/stores';
  import { Header } from "$lib/components";
  import { WrittenContent } from "$lib/components";
  import { TitleHeader } from "./partials";

  // let postId = $page.params.postId;
  let { blog_data } = data;

</script>

<Header componentInsert={TitleHeader} blog_data={blog_data} --background-color="#00002E"/>
<WrittenContent title={blog_data.title} date={blog_data.date} content={blog_data.content}/>

<style>
</style>
