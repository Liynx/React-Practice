console.log('App.js is running');

// JSX -JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Computer is Lyfe',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const appRoot = document.getElementById('app');

const numbers = [55, 101, 5000];


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options == 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {app.options.map((option) => {
                   return <li key={option}>{option}</li>; 
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
