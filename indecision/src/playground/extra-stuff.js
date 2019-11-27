const user = {
    name: 'Liam',
    age: 23,
    location: 'skool'
    
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
};

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp = () => {

    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
    
        </div>
    );

    ReactDOM.render(template2 , appRoot);

};

renderCounterApp();


{
    numbers.map((number) => {
        return <p key={number}>Number: {number}</p>
    })
}