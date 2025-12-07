<script>
  import Header from "./Header.svelte";

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
    </dl>
</section>

<section>
    <h2>Wedding Reception</h2>

    <dl>
        <div class="right">
            <dt>Date</dt>

            <dd>18/07/2026</dd>
        </div>

        <div class="right">
            <dt>Start</dt>

            <dd>4pm</dd>
        </div>

        <div class="right">
            <dt>Dress</dt>

            <dd>
                <a href="#dress-code">See dress code</a>
            </dd>
        </div>

        <div class="right">
            <dt>Menu</dt>

            <dd>Indian buffet style</dd>
        </div>

        <div class="right">
            <dt>Location</dt>

            <dd>
                <a href="https://maps.app.goo.gl/ihRVrai5PYJsQRXg9" target="_blank">
                    Cherbon Waters
                </a>
            </dd>
        </div>
    </dl>
</section>

<section id="dress-code">
    <h2>Dress Code</h2>

    <dl>
        <div class="left option">
            <dt>Option 1</dt>

            <dd>Wear cocktail attire to the ceremony and change into Indian attire for the reception</dd>
        </div>

        <div class="right option">
            <dt>Option 2</dt>

            <dd>Wear Indian attire for both the ceremony and the reception</dd>
        </div>
    </dl>

    <h3>Cocktail Attire</h3>

    <h3>Indian Attire</h3>
</section>

<style>
    section {
        border-bottom: 1px solid var(--secondary-color);
        padding-bottom: 4rem;
    }

    h2, h3 {
        text-align: center;
    }

    h3 {
        margin-top: 4rem;
    }

    dl {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        margin-left: 3rem;
        margin-right: 3rem;
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

    dl div.option {

        dt {
            font-size: 1.4rem;
        }

        dd {
            font-size: 1.2rem;
        }
    }

    dd {
        font-size: 1.4rem;
        margin: 0;
    }
</style>