<script lang="ts">
    import { addDoc, collection } from "firebase/firestore";
    import Header from "../components/Header.svelte";
    import WeddingInfo from "../components/WeddingInfo.svelte";
    import { db } from "../main";
    import { RsvpStorageService } from "../services/rsvp-storage-service";
    import toast from "svelte-5-french-toast";

    const fullNameKey = "full-name";
    const attendanceKey = "attendance"
    const toastOptions = {position: "bottom-center", duration: 6_000, width: 'fit-content'} as const;

    let isLoading = $state<boolean>(false);

    const handleSubmitRsvp = async (e: SubmitEvent) => {
        e.preventDefault();

        isLoading = true;
        const loadingToastId = toast.loading("Saving RSVP...", toastOptions);

        const data = new FormData(e.target as HTMLFormElement);

        const fullName = data.get(fullNameKey)?.toString();
        const attendance = data.get(attendanceKey)?.toString();

        try {
            const res = await addDoc(
                collection(db, "rsvps"), 
                {[fullNameKey]: fullName, [attendanceKey]: attendance}
            );

            RsvpStorageService.addRsvpId(res.id);

            toast.remove(loadingToastId);
            toast.success(attendance === 'not-coming' ? "Successfully saved." : "See you there!", toastOptions);
        } catch (e) {
            console.error(e);

            toast.remove(loadingToastId);
            toast.error("Failed to save. Reach out directly if the problem persists.", toastOptions);
        } finally {
            isLoading = false;
        }
    }

</script>

<Header/>

<main>
    <section>
        <h1>RSVP</h1>

        <form onsubmit={handleSubmitRsvp}>

            <p>Please submit your RSVP before the 1st of May 2026</p>

            <label class="full-name-label">
                <span>Full name</span>

                <input name={fullNameKey} type="text" autocomplete="name" required/>
            </label>

            <fieldset>
                <legend>I will be</legend>

                <div>
                    <input type="radio" id="option-1" name="attendance" value="both" checked>

                    <label for="option-1">attending the ceremony & the reception</label>
                </div>

                <div>
                    <input type="radio" id="option-2" name="attendance" value="ceremony">

                    <label for="option-2">only attending the ceremony</label>
                </div>

                <div>
                    <input type="radio" id="option-3" name="attendance" value="not-coming">

                    <label for="option-3">unable to attend</label>
                </div>
            </fieldset>

            <button type="submit" disabled={isLoading}>Submit</button>
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
        background-color: white;
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