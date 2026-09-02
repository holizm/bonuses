import { BonusSummary } from 'bonuses'

export default ({
    bonuses,
    translations,
}) => <main class='bonuses'>
    <h1 class='title'>{translations?.bonusesBonuses}</h1>
    <div class='items'>
        {
            bonuses?.data?.map(bonus => <BonusSummary
                bonus={bonus}
                key={bonus.id}
            />)
        }
    </div>
</main>
