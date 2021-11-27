import React, { Children } from 'react'

const layout = ({Children}) => {
    return (
        <div className = "Layout">
            {Children}
        </div>
    )
}

export default layout
