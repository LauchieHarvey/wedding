<script>
    import Header from "../components/Header.svelte";
    import WeddingInfo from "../components/WeddingInfo.svelte";
</script>


<Header/>

<main>
    <section class="cta">
        <h1>Thejas & Lauchie</h1>
        <p>18th of July 2026</p>

        <a href="/rsvp">RSVP Now</a>
    </section>

    <img src="/botanical-gardens.jpg" alt="Hugging in the botanical gardens"/>

    <WeddingInfo/>
</main>

<style>
    .cta {
        text-align: center;
        border-bottom: 1px solid var(--secondary-color);
    }

    .cta h1 {
        margin-top: 4rem;
        margin-bottom: 1rem;
        font-weight: 300;
    }

    .cta a {
        border: 1px solid var(--secondary-color);
        border-radius: 999px;
        padding: 0.8rem 2.4rem;
        font-size: 1.8rem;
        font-weight: 300;
        margin-top: 3rem;
        margin-bottom: 3rem;
        text-decoration: none;
        color: var(--secondary-color);
        display: inline-block;
    }

    img {
        width: 100svw;
        filter: grayscale(70%);
        border-bottom: 1px solid var(--secondary-color);
    }

</style>