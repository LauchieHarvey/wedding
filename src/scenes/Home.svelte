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

    <div class="image-container">
        <img src="/botanical-gardens.jpg" alt="Hugging in the botanical gardens"/>
    </div>

    <WeddingInfo/>
</main>

<style>
    .cta {
        text-align: center;
        border-bottom: 1px solid var(--secondary-color);
    }

    .image-container {
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

    .cta a:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        box-shadow: 0px 0px 2px var(--secondary-color);
    }

    img {
        display: block;
        width: 100svw;
        filter: grayscale(70%);
    }

    @media (min-width:576px) {
        img {
            width: 40svw;
            margin-top: 4rem;
            margin-bottom: 4rem;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            border: 1px solid var(--secondary-color);
            box-shadow: 0px 0px 6px 0px var(--secondary-color);
        }
    }

    @media (min-width:750px) {
        img {
            width: 25svw;
        }
    }

</style>