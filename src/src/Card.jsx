import React from 'react';

function Card(params) {
    return (
        <>
            <div className="card">
                <img src={params.url} alt="nobita" className="image" />
                <p className="name">{params.name}</p>
                <button>Play Now ▶</button>
            </div>

        </>
    )
}

export default Card;