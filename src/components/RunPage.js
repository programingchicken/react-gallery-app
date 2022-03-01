import React, { Component } from "react";
import Cat from './Cat';
import Dog from './Dog';
import Bird from './Bird';


const RunPage = ({loading, data,navLinkSearch,text}) => {
console.log(data)
navLinkSearch(text)
        if (text === 'cats') {
            return (

                <Cat data={data} text='cats' />
            )
        } else if (text === 'dogs') {
            return (
                <Dog data={data} text='dogs' />
            )
        } else if (text === 'birds') {
            return (
                <Bird data={data} text='birds' />
            )
        } else {

        }
}

export default RunPage;