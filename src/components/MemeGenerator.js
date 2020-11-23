import React, { Component } from 'react'
import {Form,Container,Row,Col} from'react-bootstrap'
import './Meme.css'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[],

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response=>{
                const {memes} = response.data
                // console.warn(memes[0])
                this.setState ({ allMemeImgs: memes}) 
            })
    }

    handleChange(event){
        const{name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
          console.log(randNum);
        const randMemeImg = this.state.allMemeImgs[randNum].url
        console.log(randNum)
        this.setState({randomImg:randMemeImg})

    }
    render() {
    
        return (
          <div>
            <Container>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="pt-5 mt-5 d-flex">
                      <Form.Control
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Top text"
                        onChange={this.handleChange}
                      />
                      <br />
                      <Form.Control
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <input type="submit" className="btn btn-info" value="Gen"/>
                  </Form>
                  <br />
                  <div className="container">
                    <img src={this.state.randomImg} className="img-fluid" alt="" />
                    <h1 className="top">{this.state.topText}</h1>
                    <h1 className="bottom">{this.state.bottomText}</h1>
                  </div>
                </Col>
                <Col md="3"></Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default MemeGenerator
