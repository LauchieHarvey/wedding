<script lang="ts">
  import type { FormEventHandler } from "svelte/elements";
    import Header from "../components/Header.svelte";

    interface RsvpProps {
        inviteCode?: string;
    }

    export const {inviteCode}: RsvpProps = $props();

    let newInviteCode = $state();

    const handleInviteCodeInput: FormEventHandler<HTMLInputElement> = (e) => {
        let inputValue = e.currentTarget.value.replaceAll("~", "");

        if (inputValue.length > 3) {
            inputValue = inputValue.slice(0, 3) + "~" + inputValue.slice(3);
        }

        newInviteCode = inputValue.toUpperCase();
    }
</script>

<Header/>

<main>
    <h1>RSVP</h1>
    {#if inviteCode != undefined}
        <p>{inviteCode}</p>
    {:else}
        <form onsubmit={() => console.log("submitting...")}>

            <label>
                Invite Code
                <input 
                    id="invite-code-input"
                    type="text"
                    aria-label="Invite code"
                    value={newInviteCode}
                    oninput={handleInviteCodeInput}
                    maxlength={8}
                />
            </label>

            <button>Submit</button>
        </form>
        <p>{newInviteCode}</p>
    {/if}
</main>

<style>
    h1 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    input {
        align-self: center;
        padding: 0.2rem;
        font-size: 2rem;
        border: 1px solid var(--secondary-color);
        text-align: center;
        font-family: var(--body-font);
    }

    input:focus-visible {
        outline: 1px solid var(--secondary-color)
    }

    button {
        font-size: 2rem;
        background-color: inherit;
        border-radius: 999px;
        border: 1px solid var(--secondary-color);
        font-family: var(--body-font);
        font-weight: 300;
        padding: 0.2rem 2rem;
    }
</style>