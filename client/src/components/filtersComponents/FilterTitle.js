import React from 'react'

export const FilterTitle = ({ onChangeTitle, titles }) => {
    return (
        <div>
            <select onChange={(e) => onChangeTitle(e.target.value)} >
                <option value=''> Название </option>
                {titles.map((n, i) => <option key={i}>{n}</option>)}
            </select>
        </div>
    )
}