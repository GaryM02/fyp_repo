import React, {useState} from 'react'
import { FaCog } from 'react-icons/fa';

function Home() {
    const [score, setScore] = useState<number>(85); // Initial trustworthiness score
    const [explanation, setExplanation] = useState<string>('');

    const handleExplanationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setExplanation(e.target.value);
    };
    
    return (
        <div>
            <header className="header">
                <h1>Trustworthiness Score</h1>
            </header>

            <div className="score-box">
                <h2>{score}%</h2>
            </div>

            <div className="explanation-box">
                <label htmlFor="explanation">Explanation</label>
                <textarea
                    id="explanation"
                    value={explanation}
                    readOnly
                    placeholder="Explanation not available."
                />
            </div>
        </div>
    )
}

export default Home