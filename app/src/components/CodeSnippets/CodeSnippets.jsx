import React from 'react'
import Highlight from '../../../node_modules/react-highlight'

const CodeSnippets = ({ data }) => {
    
    const [code, lang] = data;

    return (
        <Highlight className={lang}>
            {code}
        </Highlight>
    )
}
export default CodeSnippets;