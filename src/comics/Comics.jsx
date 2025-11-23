import { useRef, useState } from 'react'
import Card from '../components/card';
import bgImage from "../assets/marvel-characters.jpg";
import Loading from '../assets/loading';
import promiseResult from '../components/promiseFnc';
import { Link } from 'react-router-dom';

function Comics() {
    const nameRef = useRef(null);
    const [allComics, setAllComics] = useState([]);
    const [loader, setLoader] = useState(false);

    let timeoutId = null;

    function handleName() {
        const name = nameRef.current.value;
        setLoader(false);
        if (timeoutId)
            clearTimeout(timeoutId);
        // doChange = false;

        timeoutId = setTimeout(async () => {
            console.log("submitted");
            setLoader(true);
            // doChange = true;

            const type = 'comics';
            const x = await promiseResult(name, type);

            if (name === nameRef.current.value) {
                console.log("name ", name);
                setLoader(false);
                setAllComics(x);
            }
            // else {
            //   setAllComics([]);
            //   console.log("name not same", nameRef.current.value);
            // }
        }, 2000)
    }

    function removeCard(ind) {
        const newComics = allComics.filter((element) => element.id !== ind);
        setAllComics(newComics);
    }


    console.log(allComics);//array

    return (
        <>

            <div className='container'>

                <img src={bgImage} className='background' alt="" />

                <h1>
                    Explore the Marvel <span style={{color: 'blue'}}>comics</span>!!!
                    <Link to='/'>
                        <button className='chng-sxn-btn'>
                            Go to Characters section
                        </button>
                    </Link>
                </h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className='search-box'
                        type="text"
                        placeholder='Enter your title...'
                        onChange={handleName}
                        ref={nameRef}
                    />
                </form>

                {loader && <Loading />}

                <div className='hero'>
                    {allComics?.map((element) => <Card key={element.id} props={element} type='comics' removeCard={removeCard} />)}
                </div>
            </div>
        </>
    )
}

export default Comics