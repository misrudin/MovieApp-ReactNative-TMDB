import React, {createRef, Component} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import {Colors} from '../../config/Colors';
import {connect} from 'react-redux';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class BackgroundCarousel extends Component {
  scroolRef = createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  componentDidMount() {
    // console.warn(this.props.data);

    setInterval(() => {
      this.setState(
        (prevState) => ({
          selectedIndex:
            prevState.selectedIndex === this.props.data.results.length - 1
              ? 0
              : prevState.selectedIndex + 1,
        }),
        () => {
          this.scroolRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        },
      );
    }, 3000);
  }

  ShowDetail = (id) => {
    console.warn(id);
  };

  indexSelected = (event) => {
    // Dimension width
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // Get current position of images
    const contentOffset = event.nativeEvent.contentOffset.x;

    const imageIndex = Math.round(contentOffset / viewSize);

    this.setState({selectedIndex: imageIndex});
  };

  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView
          ref={this.scroolRef}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.indexSelected}
          showsHorizontalScrollIndicator={false}>
          {data.results.map((image, i) => (
            <Card key={i}>
              <Card.Cover
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${image.backdrop_path}`,
                }}
                style={styles.backgroundImg}
              />
              <Card.Title
                title={image.name || image.title}
                titleStyle={{color: 'white'}}
                style={styles.title}
              />
            </Card>
          ))}
        </ScrollView>
        <View style={styles.dotContainer}>
          {data.results.map((image, i) => (
            <View
              key={image.id}
              style={[
                styles.dotIndicator,
                {opacity: i === this.state.selectedIndex ? 1 : 0.4},
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({movies}) => {
  return {
    movies,
  };
};

export default connect(mapStateToProps)(BackgroundCarousel);

const styles = StyleSheet.create({
  backgroundImg: {
    height: DEVICE_HEIGHT / 3,
    width: DEVICE_WIDTH,
  },
  title: {
    position: 'absolute',
    bottom: -5,
  },
  dotContainer: {
    height: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    marginTop: 20,
    backgroundColor: Colors.white,
    zIndex: 1000,
  },
});
