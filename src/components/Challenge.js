const Challenge = () => {

    const challenge = {
    num_1: 2,
    num_2: 3};

    console.log(challenge.num_1, challenge.num_2);
    return (

        <div><button onClick={()=>{console.log((challenge.num_1 + challenge.num_2));}}>CLique em mim</button></div>

    );
};
export default Challenge;