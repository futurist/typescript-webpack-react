import App from './components/app'
import App2 from './components/app2'
import { prefix } from './const'

export default [
    {
        path: `${prefix}/app2`,
        component: App2,
        api: ['mindmap', 'login'],
        onEnter: e=>{
            console.log('Enter app2')
        },
        onChange: e => {
            // console.log('  --------------onChange', e)
        }
    },
    {
        path: `${prefix}/`,
        component: App,
        api: ['mindmap', 'login'],
        onChange: e => {
            // console.log('  --------------onChange', e)
        }
    },
]
