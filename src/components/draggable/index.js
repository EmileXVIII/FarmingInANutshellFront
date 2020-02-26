import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  PanResponder,
  Animated
} from "react-native";
export default class Draggable extends Component {  
    constructor() {
        console.warn(Dimensions.get('window'));
        console.warn(Dimensions.get('screen'));
        super();
        this.state = {
            pan: new Animated.ValueXY(),
            init:{x:0,y:0},
            deltaY:0
        };
        //console.warn("init",JSON.stringify(this.state.pan.x))
        
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    
            onPanResponderGrant: (evt, gestureState) => {
                //console.warn("toto")
                let transformValue=this.state.pan.getTranslateTransform()
                //console.warn(JSON.stringify(transformValue))
                let dx=transformValue[0].translateX,dy=transformValue[1].translateY;
                let x=this.state.pan.x,y=this.state.pan.y
                //console.warn("y",y,y._value,typeof(y),typeof(y._value))
                //console.warn("dy",dy,dy._value,typeof(dy),typeof(dy._value))
                //this.state.pan.setValue({x: dx._value, y: dy._value});
            // The gesture has started. Show visual feedback so the user knows
            // what is happening!
            // gestureState.d{x,y} will be set to zero now
            },
            /*onPanResponderMove:  Animated.event([
                false, {dx: this.state.pan.x, dy: this.state.pan.y},
                this.state.pan.setValue({ x:this.state.pan.x._value, y:this.state.pan.y._value})]),*/
            onPanResponderMove: (event, gestureState) => {
                //console.warn(JSON.stringify(gestureState));
                let dx = gestureState.moveX//(gestureState.moveX/Math.abs(gestureState.moveX)) * (Math.abs(gestureState.moveX)-Math.abs(this.state.toMove.x));
                let dy = gestureState.moveY//(gestureState.moveY/Math.abs(gestureState.moveY)) * (Math.abs(gestureState.moveY)-Math.abs(this.state.toMove.y));
                //console.warn(this.state.pan.getTranslateTransform())
                deltaY=this.props.conteneurStyle.height
                //console.warn("deltaY",deltaY)
                //console.warn(this.state.init.y+dy)
                //console.warn(this.state.init.x+dx)
                this.state.pan.setValue({x: this.state.init.x+dx, y: this.state.init.y + dy-deltaY});
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                let dx =gestureState.moveX,dy=gestureState.moveY;
                console.warn("termReq", dx,dy)
                return true;
            },
            onPanResponderRelease: (evt, gestureState) => {
                let dx =gestureState.moveX,dy=gestureState.moveY;
                console.warn("release", dx,dy)
                /*this.setState((prev)=>{
                    prev.init={x:this.state.pan.x._value,y:this.state.pan.y._value}
                    prev.toMove={x:0,y:0}
                    gestureState.moveX=0
                    gestureState.moveY=0
                    return prev
                })*/

            },
            onPanResponderTerminate: (evt, gestureState) => {
                let dx =gestureState.moveX,dy=gestureState.moveY;
                console.warn("terminate", dx,dy)
            // Another component has become the responder, so this gesture
            // should be cancelled
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
            },
        });
    }
    /*componentWillMount() {

    }*/
    render() {
        console.warn("before render")
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        console.warn("after render")
        return (
            <Animated.View
            {...this._panResponder.panHandlers}
            style={[panStyle, styles.circle]}
            />
        );
    }
}

let CIRCLE_RADIUS = 30;
let styles = StyleSheet.create({
    circle: {
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});