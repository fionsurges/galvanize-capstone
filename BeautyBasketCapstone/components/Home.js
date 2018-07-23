import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Modal, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Title, Content, Card, CardItem, Footer, FooterTab, Button, Icon , Thumbnail} from 'native-base';
// import Camera from 'react-native-camera'



export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            basket: [],
            loadBasket: false,
            showCamera: false
        }
    }

    componentDidMount() {
        console.log('hello')
        this.getBasket()
    }
    
    getBasket = () => {
        fetch('https://beautybasket.herokuapp.com/basket')
            .then(response => response.json())
            .then(basket => {
                this.setState({
                    basket: basket,
                    loadBasket: true
                })
            }).catch(err => console.error(err))
    }
    uet

    render() {
        const basket = this.state.basket
        const basketLoaded = this.state.loadBasket
        console.log(basketLoaded);
        return (
            <View style={{flex: 1, width:'100%'}}>
            <Container style={{flex: 1, width:'100%'}}>
                <Header>
                <Body>
                    <Title style={{width: '100%'}}>Beauty Basket</Title>
                </Body>
                </Header>
                <Title style={{width: '100%', textAlign: 'left'}}>Basket Items:</Title>
                <Container style={{flex: 1, flexDirection: 'row'}}>
                    <Card style={{width: '50%'}}>
                        <CardItem>
                        <Left>
                            <Body>
                            <Text>KIELS Ultra Facial Cream SPF 30</Text>
                            <Text note>Moisturizer</Text>
                            </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={require('../assets/Kiehls-Ultra-Facial-Cream-SPF-30.png')} style={{height: 200, width: null, flex: 1,}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                            <Button transparent>
                            <Icon active name="expand" />
                            <Text>Details</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Text>Added: 7/15/2018</Text>
                        </Right>
                        </CardItem>
                    </Card>
                    </Container>
                <Footer>
                    <FooterTab>
                        <Button vertical active>
                        <Icon name="md-basket" />
                        <Text>My Basket</Text>
                        </Button>
                        <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                                <Modal 
                                    visible={this.state.showCamera}
                                    onRequestClose={() => console.warn('this is a close request')}>
                                    <View style={styles.modalView}>
                                        <TouchableOpacity 
                                            onPress={() => {
                                                this.setState({
                                                    showCamera: false
                                                    }
                                                )}
                                            }>
                                            <Text style={styles.closeText}>Close Camera</Text>
                                        </TouchableOpacity>
                                    </View>  
                                </Modal>
                                <TouchableOpacity
                                    onPress={() => {
                                            this.setState({
                                                    showCamera: true
                                                    }
                                                )}
                                            }>
                                <Text style={styles.openText}>Open Camera</Text>
                                </TouchableOpacity>
                        </Button>
                        <Button vertical>
                        <Icon name="person" />
                        <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                    </Footer>
            </Container>
        </View>
        )
    }
}

const {width, height} = Dimensions.get('window') 

const styles = StyleSheet.create ({
    modalView: {
        backgroundColor: '#aaa', 
        height: 150, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    closeText: {
        backgroundColor: '#333',
        color: 'white',
        padding: 5,
        margin: 20
    },
    openText: {
        backgroundColor: '#333',
        color: 'white',
        padding: 5,
        margin: 20
    }
})