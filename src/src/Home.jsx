import React from 'react';
import Card from './Card';
import API from './Api';
import API2 from './Api2';
import API3 from './Api3';
import API4 from './Api4';
import API5 from './Api5';

function Home() {
    return (
        <>
            <div className="section">
                <h2>Top and Trending</h2>
                <div className="card_item">
                    {
                        API.map((item) => {
                            return <Card url={item.url} name={item.name}/>
                    })}
                </div>
            </div>
            <div className="section">
                <h2>Best of Kids</h2>
                <div className="card_item">
                {
                        API2.map((item) => {
                            return <Card url={item.url} name={item.name}/>
                    })}
                </div>
            </div>
            <div className="section">
                <h2>Top Comedy Videos</h2>
                <div className="card_item">
                {
                        API3.map((item) => {
                            return <Card url={item.url} name={item.name}/>
                    })}
                </div>
            </div>
            <div className="section">
                <h2>Top action😂Videos</h2>
                <div className="card_item">
                {
                        API4.map((item) => {
                            return <Card url={item.url} name={item.name}/>
                    })}
                </div>
            </div>
            <div className="section">
                <h2>Top Emotional Videos</h2>
                <div className="card_item">
                {
                        API5.map((item) => {
                            return <Card key={item.id} url={item.url} name={item.name}/>
                    })}
                </div>
            </div>
        </>

    )

}

export default Home;