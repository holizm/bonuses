import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'core'
import { getGlobalization } from 'globalization'
import { getBonuses } from 'bonuses'

export default routeLoader$(async props => {
    const [
        bonuses,
        globalization,
    ] = await useAsync([
        getBonuses(props),
        getGlobalization(props),
    ])
    const result = {
        bonuses,
        ...globalization,
    }
    return result
})
