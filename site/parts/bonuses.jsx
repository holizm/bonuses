import Item from 'item'
import List from 'list'
import { BonusSummary } from 'bonuses'

export default ({
    bonuses,
    translations,
}) => <main class='bonuses'>
    <h1 class='title'>{translations?.bonusesBonuses}</h1>
    <List class='items bonuses'>
        {
            bonuses?.data?.map(bonus => <Item
                inList
                key={bonus.id}
            >
                <BonusSummary
                    bonus={bonus}
                    key={bonus.id}
                />
            </Item>)
        }
    </List>
</main>
