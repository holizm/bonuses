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
        placeholder='code'
        property='code'
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
        placeholder='startDate'
        property='startDate'
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
