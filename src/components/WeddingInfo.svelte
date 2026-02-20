<script>
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("dinner")) {
        localStorage.setItem("dinner", "true");
    }
    if (urlParams.has("party")) {
        localStorage.setItem("party", "true");
    }

    const isInvitedToDinner = localStorage.getItem("dinner") != null;
    const isInvitedToParty = localStorage.getItem("party") != null;

    const partyInfoDirection = isInvitedToDinner ? "left" : "right";
</script>
<section>
    <h2>Wedding Ceremony</h2>

    <dl>
        <div class="left">
            <dt>Date</dt>

            <dd>18/07/2026</dd>
        </div>

        <div class="left">
            <dt>Start</dt>

            <dd>11am</dd>
        </div>

        <div class="left">
            <dt>Dress</dt>

            <dd>
                <a href="#dress-code">See dress code</a>
            </dd>
        </div>

        <div class="left">
            <dt>Location</dt>

            <dd>
                <a href="https://maps.app.goo.gl/RFNFGL4USU2Bv3ZK7" target="_blank">
                    St Mary's Kangaroo Point
                </a>
            </dd>
        </div>

        <div class="left">
            <dt>Refreshments</dt>

            <dd>Following the ceremony you are invited to enjoy food and wine on the lawn.</dd>
        </div>
    </dl>
</section>

{#if isInvitedToDinner}
    <section>
        <h2>Family Reception</h2>

        <dl>
            <div class="right">
                <dt>Date</dt>

                <dd>18/07/2026</dd>
            </div>

            <div class="right">
                <dt>Start</dt>

                <dd>5:30pm</dd>
            </div>

            <div class="right">
                <dt>Dress</dt>

                <dd>
                    <a href="#dress-code">See dress code</a>
                </dd>
            </div>

            <div class="right">
                <dt>Menu</dt>

                <dd>
                    <a href="https://todo.com" target="_blank">
                        TODO
                    </a>
                </dd>
            </div>

            <div class="right">
                <dt>Location</dt>

                <dd>
                    <a href="https://todo.com" target="_blank">
                        TODO 
                    </a>
                </dd>
            </div>
        </dl>
    </section>
{/if}

{#if isInvitedToParty}
    <section>
        <h2>Friends' Celebration</h2>

        <dl>
            <div class={partyInfoDirection}>
                <dt>Date</dt>

                <dd>18/07/2026</dd>
            </div>

            <div class={partyInfoDirection}>
                <dt>Start</dt>

                <dd>10pm</dd>
            </div>

            <div class={partyInfoDirection}>
                <dt>Dress</dt>

                <dd>
                    <a href="#dress-code">See dress code</a>
                </dd>
            </div>

            <div class={partyInfoDirection}>
                <dt>Drinks</dt>

                <dd>A bar tab will available</dd>
            </div>

            <div class={partyInfoDirection}>
                <dt>Location</dt>

                <dd>
                    <a href="https://maps.app.goo.gl/Aozwkd9nLvSR7hac8" target="_blank">
                        Hey Chica! 
                    </a> - Fortitude Valley
                </dd>
            </div>
        </dl>
    </section>
{/if}

<section id="dress-code">
    <h2>Dress Code</h2>

    <p>
        {#if isInvitedToDinner && isInvitedToParty}
            The dress code is <b>cocktail</b> attire for the church ceremony, the family dinner & the friends' celebration.
        {:else if isInvitedToDinner}
            The dress code is <b>cocktail</b> attire for both the church ceremony and the family dinner.
        {:else if isInvitedToParty}
            The dress code is <b>cocktail</b> attire for both the church ceremony and the friends' celebration.
        {:else}
            The dress code is <b>cocktail</b> attire.
        {/if}
    </p>

    {#if isInvitedToDinner || isInvitedToParty}
        <p>You may get changed between events if you wish.</p>
    {/if}
</section>

<style>
    section {
        border-bottom: 1px solid var(--secondary-color);
        padding-bottom: 4rem;
    }

    h2, p {
        text-align: center;
    }

    dl {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        margin-left: 3rem;
        margin-right: 3rem;

        @media (min-width:1024px) {
            margin-left: 30svw;
            margin-right: 30svw;
        }
    }

    dl div {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
    }

    dl div.left {
        border-left: 1px solid var(--secondary-color);
    }

    dl div.right {
        border-right: 1px solid var(--secondary-color);
        text-align: right;
    }

    dd {
        font-size: 1.4rem;
        margin: 0;
    }
</style>