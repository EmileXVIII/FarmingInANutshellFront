class Calculator{
    position ;
    constructor(){

    }
    init(DomElement){
        DomElement.setState({pan: new Animated.ValueXY()})
        
  componentWillMount() {    // Add a listener for the delta value change
    DomElement._val = { x:0, y:0 }
    DomElement.pan.addListener((value) => this._val = value);    // Initialize PanResponder with move handling
    DomElement.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null, { dx: DomElement.state.pan.x, dy: DomElement.state.pan.y }
      ])
      // adjusting delta value
      DomElement.state.pan.setValue({ x:0, y:0})
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    return (
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
    );
  }
}
        while(true){

        }
    }
}