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
        placeholder='bonusesCode'
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
        placeholder='bonusesType'
        property='bonusType'
        required
    />
    <DateTime
        placeholder='bonusesStartDate'
        property='startDate'
    />
    <DateTime
        placeholder='bonusesEndDate'
        property='endDate'
    />
    <LongText
        placeholder='bonusesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
