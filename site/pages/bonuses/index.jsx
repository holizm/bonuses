import { component$ } from '@builder.io/qwik'
import {
    Bonuses,
    loadBonuses,
} from 'bonuses'

export default component$(() => {
    const data = loadBonuses().value
    return <Bonuses {...data} />
})

export { loadBonuses }
