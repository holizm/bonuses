import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>bonusesEmployee</th>
    <th>bonusesType</th>
    <th>bonusesEarnedDate</th>
    <th>bonusesAmount</th>
    <th>bonusesState</th>
</>

const row = item => <>
    <td>{item.employee?.title}</td>
    <td>{item.bonusType}</td>
    <DateTime value={item.earnedDate} />
    <td>{item.amount}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
