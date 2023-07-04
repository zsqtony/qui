import React from 'react'

export default function index({ label,
    type = "dark",
    shape = "3px",
    bgColor = "#1677ff" }) {
    return (
        <span
            style={{
                padding: "3px 6px",
                fontSize: "12px",
                backgroundColor: type == "dark" ? bgColor : "",
                color: type == "dark" ? "#fff" : bgColor,
                borderRadius: shape,
                border: `1px solid ${bgColor}`,
            }}
        >
            {label}
        </span>
    )
}
