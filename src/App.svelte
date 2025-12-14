<script lang="ts">
  import {Router, Route} from "svelte5-router";
  import Home from "./scenes/Home.svelte";
  import Rsvp from "./scenes/Rsvp.svelte";
  import {Toaster} from "svelte-5-french-toast";
  import UpdateRsvp from "./scenes/UpdateRsvp.svelte";

  export let url = "";
</script>


<Router {url}>
  <Route path="/rsvp" component={Rsvp}/>

  <Route path="/rsvp/update" component={UpdateRsvp}/>

  <Route path="*" component={Home}/>

  <Toaster/>
</Router>