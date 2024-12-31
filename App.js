const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{id:"h1"},"I'm h1 tag"),
                React.createElement("h2",{id:"h2"},"I'm h2 tag")
            ]
        )
        ,
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{id:"h3"},"I'm h1 tag"),
                React.createElement("h2",{id:"h4"},"I'm h2 tag")
            ]
        )
        
    ]
)

const root  = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent);
