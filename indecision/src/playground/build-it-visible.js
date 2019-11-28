class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleVisiblity(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisiblity}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                 <div>
                     <p>Hey these are some details.</p>
                 </div>
                )}
             
            </div>
        );
    }
};

ReactDOM.render(<Visibility />, document.getElementById('app'));




// let visibility = false;


// const toggleVisiblity = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisiblity}>
//                 {visibility ? 'Hide Details': 'Show Details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey these are some details.</p>
//                 </div>
//             )}
//         </div>

//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();