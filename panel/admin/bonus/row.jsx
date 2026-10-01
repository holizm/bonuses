import { DateTime } from 'list'

export default item => <>
    <td>{item.employee?.title}</td>
    <td>{item.bonusType}</td>
    <DateTime value={item.earnedDate} />
    <td>{item.amount}</td>
    <td>{item.state?.title}</td>
</>
