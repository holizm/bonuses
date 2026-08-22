import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='bonusesEmployee'
        property='employee'
        required
    />
    <Select
        options={[
            'tip',
            'performance',
            'holiday',
            'discretionary',
            'retention',
            'other',
        ]}
        placeholder='bonusesType'
        property='bonusType'
        required
    />
    <DateTime
        placeholder='bonusesEarnedDate'
        property='earnedDate'
        required
    />
    <Numeric
        placeholder='bonusesAmount'
        property='amount'
        required
    />
    <Text
        placeholder='bonusesCurrency'
        property='currency'
        required
    />
    <LongText
        placeholder='bonusesReason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
