import { getWithAuthentication } from 'getWithAuthentication'

export default props => getWithAuthentication('/bonuses/bonus/list', props)
