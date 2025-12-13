<script lang="ts">
  import {Router, Route} from "svelte5-router";
  import Home from "./scenes/Home.svelte";
  import Rsvp from "./scenes/Rsvp.svelte";
  import {Toaster} from "svelte-5-french-toast";

  export let url = "";
</script>


<Router {url}>
  <Route path="/rsvp">
    <Rsvp/>
  </Route>

  <Route path="*" component={Home}/>

  <Toaster/>
</Router>