import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
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
    <DateTime startDate />
    <DateTime endDate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
