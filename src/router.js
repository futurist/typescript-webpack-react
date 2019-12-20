import App from './components/app'
import { prefix } from './const'

export default [
    {
        path: `${prefix}/`,
        component: App,
        api: ['mindmap', 'login'],
        onChange: e => {
            // console.log('  --------------onChange', e)
        }
    },
]
