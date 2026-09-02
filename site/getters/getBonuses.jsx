import { getWithAuthentication } from 'core'

export default props => getWithAuthentication('/bonuses/bonus/list', props)
