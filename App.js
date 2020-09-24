import React, { Component } from "react";
import { FlatList, Image, View } from "react-native";
import {
  Header,
  H1,
  GistsRow,
  GistsImage,
  GistsFile,
  Main,
  Separator,
  OpenImgComponent,
  ModalContainer,
  Mask,
  ModalInside,
  ModalItem,
} from "./styles";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeUri: "",
      visible: false,
    };
  }

  componentDidMount() {
    this._getGists();
  }

  onRefresh() {
    this._getGists();
  }

  _getGists() {
    fetch("https://api.github.com/gists/public")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      })

      .catch((error) => console.error(error));
  }

  pressHandler = (id, imgUri) => {
    this.setState({
      activeUri: imgUri,
      visible: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        activeUri: "",
      });
    }, 1000);
  };

  render() {
    const { data, visible } = this.state;

    const Item = ({ file, imgUri, id }) => (
      <GistsRow onPress={() => this.pressHandler(id, imgUri)}>
        <GistsImage
          source={{
            uri: imgUri,
          }}
        />
        <GistsFile>{file}</GistsFile>
      </GistsRow>
    );

    const ImageComponent = (props) => (
      <View>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: props.uri,
          }}
        />
      </View>
    );

    const renderItem = ({ item }) => (
      <Item
        id={item.id}
        imgUri={item.owner.avatar_url}
        file={Object.getOwnPropertyNames(item.files)
          .toString()
          .substring(0, 100)}
      />
    );

    return (
      <Main>
        <Header>
          <H1>Gists</H1>
        </Header>
        <FlatList
          style={{ height: "100%" }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
          initialNumToRender={10}
          onEndReachedThreshold={0}
          maxToRenderPerBatch={1}
          windowSize={10}
        />
        <ModalContainer
          visible={visible}
          animationType="fade"
          transparent={true}
        >
          <Mask />
          <ModalInside>
            <ModalItem
              onPress={() =>
                this.setState({
                  visible: false,
                  activeUri: "",
                })
              }
            >
              <ImageComponent uri={this.state.activeUri} />
            </ModalItem>
          </ModalInside>
        </ModalContainer>
      </Main>
    );
  }
}
