import { routeLoader$ } from '@builder.io/qwik-city'
import useAsync from 'useAsync'
import globalizationGetGlobalization from 'globalizationGetGlobalization'
import bonusesGetBonuses from 'bonusesGetBonuses'

export default routeLoader$(async props => {
    const [
        bonuses,
        globalization,
    ] = await useAsync([
        bonusesGetBonuses(props),
        globalizationGetGlobalization(props),
    ])
    const result = {
        bonuses,
        ...globalization,
    }
    return result
})
