<script lang="ts">
    import Header from "../components/Header.svelte";
    import WeddingInfo from "../components/WeddingInfo.svelte";

    const handleSubmitRsvp = (e: SubmitEvent) => {
        e.preventDefault();
    }

</script>

<Header/>

<main>
    <section>
        <h1>RSVP</h1>

        <form onsubmit={handleSubmitRsvp}>

            <p>The 1st of May 2026 is the last day that RSVPs and changes to RSVPs will be open.</p>

            <label class="full-name-label">
                <span>Full name</span>
                <input id="full-name" type="text" />
            </label>

            <fieldset>
                <legend>I will be</legend>

                <div>
                    <input type="radio" id="option-1" name="attendance" value="both" checked>
                    <label for="option-1">attending the ceremony & the reception</label>
                </div>

                <div>
                    <input type="radio" id="option-2" name="attendance" value="reception">
                    <label for="option-2">only attending the ceremony</label>
                </div>

                <div>
                    <input type="radio" id="option-3" name="attendance" value="not-coming">
                    <label for="option-3">unable to attend</label>
                </div>
            </fieldset>

            <button type="submit">Submit</button>
        </form>

    </section>

    <WeddingInfo/>
</main>

<style>
    section {
        border-bottom: 1px solid var(--secondary-color);
        padding-bottom: 4rem;
    }

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
        margin-bottom: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: auto;
        margin-left: auto;
        gap: 3rem;
        padding: 0.5rem;

        @media (min-width:768px) {
            width: 35svw;
        }

        @media (min-width:1024px) {
            width: 30svw;
        }
    }

    .full-name-label {
        display: flex;
        flex-direction: column;
    }

    form label:first-child span {
        margin-left: 0.5rem;
    }

    label:has(input[type="text"]) {
        width: 100%;
    }

    input[type="text"] {
        border: 1px solid var(--secondary-color);
        color: var(--secondary-color);
        padding: 0.4rem;
        font-size: 1.2rem;
        font-family: var(--body-font);
    }

    input[type="text"]:focus-visible {
        outline: 1px solid var(--secondary-color)
    }

    input[type="radio"] {
        accent-color: var(--secondary-color);
        transform: scale(1.2);
    }

    input[type="radio"]:hover {
        cursor: pointer;
    }

    button {
        font-size: 2rem;
        background-color: inherit;
        border-radius: 999px;
        border: 1px solid var(--secondary-color);
        font-family: var(--body-font);
        font-weight: 300;
        padding: 0.2rem 2rem;
        width: fit-content;
    }

    button:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        cursor: pointer;
    }

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 1px solid var(--secondary-color);
        width: 100%;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    fieldset div {
        display: flex;
        gap: 0.5rem;
    }

</style>