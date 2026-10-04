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
        placeholder='employee'
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
        placeholder='type'
        property='bonusType'
        required
    />
    <DateTime
        placeholder='earnedDate'
        property='earnedDate'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <LongText
        placeholder='reason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
