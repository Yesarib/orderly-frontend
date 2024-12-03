import React from 'react'

interface DividerProp {
    height: string,
    color: string
}

const Divider: React.FC<DividerProp> = ({ height, color }) => {
    return (
        <div>
            <hr className={`h-${height} bg-${color}`} />
        </div>
    )
}

export default Divider