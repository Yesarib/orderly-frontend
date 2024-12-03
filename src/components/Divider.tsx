import React from 'react'

interface DividerProp {
    height: string,
    color: string
}

const Divider: React.FC<DividerProp> = ({ height, color }) => {
    return (
        <div>
            <div className={`w-full h-${height} bg-${color}`}>
            </div>
        </div>
    )
}

export default Divider