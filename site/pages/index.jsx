import { component$ } from '@builder.io/qwik'
import BonusesBonuses from 'bonusesBonuses'
import bonusesLoadBonuses from 'bonusesLoadBonuses'

export default component$(() => {
    const data = bonusesLoadBonuses().value
    return <BonusesBonuses {...data} />
})

export { bonusesLoadBonuses as loadBonuses }
