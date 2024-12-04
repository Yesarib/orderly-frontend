import React from 'react'

interface DividerProp {
    height: number,
    color: string
}

const Divider: React.FC<DividerProp> = ({ height, color }) => {
    return (
        <div style={{
            height: height,
            backgroundColor: color,
        }}>
        </div>
    )
}

export default Divider