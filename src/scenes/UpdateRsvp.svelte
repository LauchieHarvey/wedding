<script lang="ts">
    import { collection, doc, getDoc, writeBatch } from "firebase/firestore";
    import Header from "../components/Header.svelte";
    import { RsvpStorageService } from "../services/rsvp-storage-service";
    import { db } from "../main";
    import toast from "svelte-5-french-toast";
    import { Attendance } from "../types";
    import { link } from "svelte5-router";

    const toastOptions = {position: "bottom-center", duration: 6_000} as const;

    type RSVP = {
        id: string;
        "full-name": string;
        attendance: Attendance;
    };

    let rsvps = $state<RSVP[]>([]);

    const getRsvps = async (): Promise<RSVP[]> => {
        const rsvpIds = RsvpStorageService.getRsvpIds();

        if (!rsvpIds.length) return [];

        const rsvpCollection = collection(db, "rsvps");

        const snapshots = await Promise.all(
            rsvpIds.map(id => getDoc(doc(rsvpCollection, id)))
        );

        return snapshots
            .filter(snap => snap.exists())
            .map(snap => ({ id: snap.id, ...snap.data() })) as RSVP[];
    };

    const updateRsvps = async (e: SubmitEvent) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const batch = writeBatch(db);
        let numRsvpsChanged = 0;
        const newLocalRsvps: RSVP[] = [];

        rsvps.forEach(rsvp => {
            // Read the checked value from the radio buttons
            const value = (
                form.querySelector<HTMLInputElement>(`input[name="attendance-${rsvp.id}"]:checked`)
            )?.value as RSVP["attendance"] | undefined;

            // If it differs from firestore then update it in firestore.
            if (value && value !== rsvp.attendance) {
                const ref = doc(db, "rsvps", rsvp.id);

                batch.update(ref, { attendance: value });
                numRsvpsChanged += 1;

                newLocalRsvps.push({...rsvp, attendance: value})
            } else {
                newLocalRsvps.push(rsvp);
            }
        });

        if (numRsvpsChanged <= 0) {
            toast("No changes to update", toastOptions);
            return;
        }

        try {
            await batch.commit();

            const successMessage = numRsvpsChanged > 1 ? `${numRsvpsChanged} RSVPs updated` : "RSVP updated";
            toast.success(successMessage, toastOptions);
        } catch (e) {
            console.error(e);
            toast.error("Failed to update RSVPs", toastOptions);
        }

        rsvps = newLocalRsvps;
    }

    $effect(() => {
        getRsvps().then(newRsvps => {
            rsvps = newRsvps;
        }).catch(e => {
            console.error(e);
            toast.error("Failed to load RSVPs");
        });
    });

</script>

<Header/>

<main>
    <a href="/rsvp" use:link> &lt; Back</a>

    <section>
        <p>You may edit your RSVPs here. It will only appear on this device.</p>

        <form onsubmit={updateRsvps}>
            {#each rsvps as rsvp (`rsvp-fieldset-${rsvp.id}`)}
                <fieldset>
                    <legend>{rsvp["full-name"]}</legend>

                    <div>
                        <input 
                            id={`both-${rsvp.id}`}
                            type="radio"
                            name={`attendance-${rsvp.id}`}
                            value={Attendance.BOTH}
                            checked={rsvp.attendance === Attendance.BOTH}
                        />

                        <label for={`both-${rsvp.id}`}>
                            Attending ceremony and reception
                        </label>
                    </div>

                    <div>
                        <input
                            id={`ceremony-${rsvp.id}`}
                            type="radio"
                            name={`attendance-${rsvp.id}`}
                            value={Attendance.CEREMONY_ONLY}
                            checked={rsvp.attendance === Attendance.CEREMONY_ONLY}
                        />

                        <label for={`ceremony-${rsvp.id}`}>
                            Attending ceremony only
                        </label>
                    </div>

                    <div>
                        <input 
                            id={`not-coming-${rsvp.id}`}
                            type="radio"
                            name={`attendance-${rsvp.id}`}
                            value={Attendance.NOT_COMING}
                            checked={rsvp.attendance === Attendance.NOT_COMING}
                        />

                        <label for={`not-coming-${rsvp.id}`}>
                            Unable to attend
                        </label>
                    </div>
                </fieldset>
            {/each}

            <button type="submit">Update All</button>
        </form>
    </section>
</main>

<style>
    main {
        padding: 0.4rem;
    }

    p {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        margin: 3rem auto 3rem auto;

        @media (min-width: 600px) {
            width: 60svw;
        }

        @media (min-width: 1024px) {
            width: 40svw;
        }

        @media (min-width: 1400px) {
            width: 30svw;
        }
    }

    fieldset {
        position: relative;
        border: none;
        padding: 2rem 0.5rem 0 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    legend {
        font-size: 1.2rem;
    }

    a {
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }

    fieldset:nth-child(2n + 1) {
        align-self: flex-start;
        border-left: 1px solid var(--secondary-color);
    }

    fieldset:nth-child(2n) {
        align-self: flex-end;
        border-right: 1px solid var(--secondary-color);
        margin-left: auto;
    }

    fieldset:nth-child(2n + 1) legend {
        position: absolute;
        left: 0.4rem;
        top: 0;
    }

    fieldset:nth-child(2n) legend {
        position: absolute;
        right: 0.4rem;
        top: 0;
    }

    fieldset div {
        display: flex;
        gap: 0.4rem;
    }

    fieldset:nth-child(2n) div {
        flex-direction: row-reverse;
    }
</style>