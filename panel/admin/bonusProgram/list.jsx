import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>bonusesProgram</th>
    <th>bonusesCode</th>
    <th>bonusesType</th>
    <th>bonusesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.bonusType}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
