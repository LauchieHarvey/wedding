<script lang="ts">
    interface RsvpProps {
        inviteCode?: string;
    }

    export const {inviteCode}: RsvpProps = $props();
</script>


<main>
    <h1>RSVP now</h1>
    <p>{inviteCode}</p>
</main>