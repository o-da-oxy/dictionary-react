import Navigation from "../navigation/Navigation";
import {useEffect, useState} from "react";
import s from "./Dictionary.module.css"

const Dictionary = () => {
    const [result, setResult] = useState([]);
    const [input, setInput] = useState(['']);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (input !== '') {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
                .then(res => res.json())
                .then(res => {
                    setResult(res);
                });
        } else {
            setResult([])
        }

    }, [search]);

    const clickHandler = () => {
        setSearch(search + 1);
    };

    const mapper = () => {
        return (
            result.map((x, i) => (
                <div className={s.result} key={i}>
                    <h2>
                        {x.word} ({x.meanings[0].partOfSpeech})
                    </h2>
                    <div>
                        {x.meanings[0].definitions[0].definition}
                    </div>
                </div>
            ))
        )
    };

    let searchHandler = () => {
        if (result.length === 0) {
            return <div className={s.errorResult}>Please, input a word ^.^</div>;
        }
        else if (result.length === undefined) {
            return <div className={s.errorResult}>Sorry, this word is not found :(</div>;
        }
        else if (result.length !== 0) {
            return mapper();
        }
    }

    return (
        <div className={s.dictionaryWrapper}>
            <div className={s.input}>
                <input className={s.inputField} value={input} onInput={e => setInput(e.target.value)}/>
                <button className={s.inputButton} onClick={clickHandler}>Search</button>
            </div>
            {searchHandler()}
            <Navigation text='Back'/>
        </div>
    );
}

export default Dictionary;