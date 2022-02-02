// import htmlString functions from .js
import { facilityMineralList } from "./facilities/FacilityMinerals.js";
import { displayCart } from "./Orders.js";

// export function that returns a string of html
export const MiningMarketplace = () => {
    return `
        <header class="header">
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>
        <article class="choices">
            <section class="choices__governor">
                Governor Dropdown
            </section>
            <section class="choices__facility">
                Facility Dropdown
            </section>
        </article>

        <article class="colonyMinerals">
            Colony Minerals
        </article>

        <article class="facilityMinerals">
            ${facilityMineralList()}
        </article>

        <article class="purchasedMinerals">
            <h3>Space Cart</h3>
            <section class="spaceCart">
            ${displayCart()}
            </section>
            <button id="orderButton">Purchase Mineral</button>
        </article>

    `
}