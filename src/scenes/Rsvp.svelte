<script lang="ts">
    import { addDoc, collection } from "firebase/firestore";
    import Header from "../components/Header.svelte";
    import WeddingInfo from "../components/WeddingInfo.svelte";
    import { db } from "../main";
    import { RsvpStorageService } from "../services/rsvp-storage-service";
    import toast from "svelte-5-french-toast";
    import { link, Link } from "svelte5-router";
    import { Attendance } from "../types";

    const fullNameKey = "full-name";
    const attendanceKey = "attendance"
    const toastOptions = {position: "bottom-center", duration: 6_000} as const;

    let isLoading = $state<boolean>(false);
    let rsvpIds = $state<string[]>(RsvpStorageService.getRsvpIds());

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

            rsvpIds = RsvpStorageService.addRsvpId(res.id);

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
    <a href="/" use:link> &lt; Home</a>

    <section>
        <h1>RSVP</h1>

        <form onsubmit={handleSubmitRsvp}>

            <p>
                Please submit your RSVPs before the 1st of May 2026
                {#if rsvpIds.length > 0}
                    <br/>
                    <br/>
                    You have submitted {rsvpIds.length} RSVPs on this device. Click <Link to="/rsvp/update">here</Link> to edit them.
                {/if}
            </p>

            <label class="full-name-label">
                <span>Full name</span>

                <input name={fullNameKey} type="text" autocomplete="name" required/>
            </label>

            <fieldset>
                <legend>I shall be</legend>

                <div>
                    <input type="radio" id="option-1" name="attendance" value={Attendance.CEREMONY} checked>

                    <label for="option-1">attending</label>
                </div>

                <div>
                    <input type="radio" id="option-2" name="attendance" value={Attendance.NOT_COMING}>

                    <label for="option-2">unable to attend</label>
                </div>
            </fieldset>

            <button type="submit" disabled={isLoading}>Submit</button>
        </form>

    </section>

    <WeddingInfo/>
</main>

<style>
    main {
        padding: 0.4rem;
    }

    a {
        margin-left: 0.5rem;
        display: block;
    }

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