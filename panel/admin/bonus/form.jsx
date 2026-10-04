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
        employee
        required
    />
    <Select
        bonusType
        options={[
            'tip',
            'performance',
            'holiday',
            'discretionary',
            'retention',
            'other',
        ]}
        placeholder='type'
        required
    />
    <DateTime
        earnedDate
        required
    />
    <Numeric
        amount
        required
    />
    <Text
        currency
        required
    />
    <LongText reason />
</>

export default <DialogForm inputs={inputs} />
