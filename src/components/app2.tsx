import React, { useEffect, useState, useCallback, useRef } from 'react'

function App (props: any){
    return <div>
        Hello app2
        <button onClick={e=>{props.history.push('/')}} >跳转到首页</button>
    </div>
}

export default App
