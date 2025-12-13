<script>
  import { link } from "svelte5-router";
</script>

<div class="header">
    <a href="/" use:link>
        T & L
    </a>
</div>

<style>
    .header {
        border-bottom: 1px solid var(--secondary-color);
        text-align: center;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
    }

    .header a {
        font-size: 1.2rem;
        text-decoration: none !important;
        margin: 0;
    }
</style>