import './polyfills'
import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import EdataRouter from 'edata-router'
import router from './router'

// actions
import actionMindMap from './actions/mindmap'
import actionLogin from './actions/login'

export const app = new EdataRouter({
    ajaxConfig: {
        afterResponse: res => {
            const { pathname } = new URL(res.url)
            if (!res.ok) {
                // 错误处理
            }
        }
    },
    routeMode: 'path'
})
app.model(actionMindMap)
app.model(actionLogin)
app.route(router)
const App = app.run()

const rootEl = document.getElementById('root')

render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
)

// Hot Module Replacement API
declare let module: { hot: any }

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const NewApp = require('./components/app').default

        render(
            <AppContainer>
                <NewApp />
            </AppContainer>,
            rootEl
        )
    })
}
