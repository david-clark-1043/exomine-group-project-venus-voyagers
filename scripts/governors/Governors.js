// import getGovernor, setGovernor, getTransientState
import { getGovernor, setGovernor, getTransientState } from "./scripts/database.js"
// export string containing dropdown menu containing only active governers

const governors = getGovernor()


export const SelectGovernor = () => {
    let HTMLSting = `<div class="governorDropdown">
    <label for="gov-names">Choose a dog name:</label>
    <select name="gov-names" id="gov-names">
    <option value="" disabled selected hidden>Choose Governor...</option>`

    for (const governor of governors) {
        if (governor.active) {
            HTMLSting += `<option value ="${governor.name}">${governor.name}</option>`
        }
    }

    HTMLSting += `</select></div>`
}

// add an eventListener that invokes setGovernor

