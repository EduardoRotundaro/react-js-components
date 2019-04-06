import React from 'react'

import './component.css'

export default props => (
    <a className={ `link-hover link-hover-${ props.color }` }>
        <span className="circle"></span>
        <span className="text">{ props.text }</span>
    </a>
)