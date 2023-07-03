import React from 'react'
import "../../css/button.css"

export default function index({ label, onClick, width = '80px', height = "32px", shape = "3px", bgColor = "#1677ff" }) {
    return <button className='qui-btn' onClick={() => onClick?.()} style={{
        borderRadius: shape,
        backgroundColor: bgColor,
        width: width,
        height: height,
        lineHeight: height
    }}>
        {label}
    </button>;
}
