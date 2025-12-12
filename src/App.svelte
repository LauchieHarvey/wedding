<script lang="ts">
  import {Router, Route} from "svelte5-router";
  import Home from "./scenes/Home.svelte";
  import Rsvp from "./scenes/Rsvp.svelte";

  export let url = "";
</script>


<Router {url}>
  <Route path="/rsvp">
    <Rsvp/>
  </Route>

  <Route path="*" component={Home}/>
</Router>