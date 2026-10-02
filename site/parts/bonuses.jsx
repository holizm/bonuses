import { List } from 'core'
import { BonusSummary } from 'bonuses'

export default ({
    bonuses,
    translations,
}) => <main class='bonuses'>
    <h1 class='title'>{translations?.bonusesBonuses}</h1>
    <List class='items bonuses'>
        {
            bonuses?.data?.map(bonus => <BonusSummary
                bonus={bonus}
                key={bonus.id}
            />)
        }
    </List>
</main>
