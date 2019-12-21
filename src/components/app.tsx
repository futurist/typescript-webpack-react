import React, { useEffect, useState, useCallback, useRef } from 'react'

function App (props: any){
    useEffect(()=>{
        props.mindmap.getMindMapList().then(data=>{
            console.log('fetch data:', data)
            return data
        })
    }, [])
    return <div>Hello 首页</div>
}

export default App
