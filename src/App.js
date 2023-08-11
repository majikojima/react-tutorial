import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component{
    state = {
        characters: [],
        // characters: [
        //     {
        //         name: 'Jonathan',
        //         job: 'actress'
        //     }
        // ],
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (characters) => {
        this.setState({ characters: [...this.state.characters, characters] })
    }

    render(){
        const { characters } = this.state

        return (
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

// class App extends Component{
//     render(){
//         const characters = [
//             {
//                 name: 'jonathan',
//                 job: 'actress',
//             },
//         ]

//         return(
//             <div className="container">
//                 <Table characterData={characters}/>
//             </div>
//         )
//     }
// }

export default App