import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image } from "react-native";
import { loadMore } from './android/app/src/loadMore';



const Item = ({ title, tinylogo }) => (
  <View style={styles.items}>
    {/* <View style={{flexDirection:"row"}}> */}

    <View >
      <Image style={styles.tinylogo} source={tinylogo} />
    </View>
    {/* <View>
    <Image style={styles.loading} source = {loading}/>
    </View> */}
    {/* </View> */}
    <View
      style={{
        width: "100%",
        // backgroundColor:'red'
      }}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  </View>
);

let stopFetchMore = true;

const ListFooterComponent = (e) =>{
  console.log("eeee==>",e);
return (
    <View>
  <Text
    style={{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 5,
      color: '#b22222'
    }}
    >
    Loading...
  </Text>
  </View>
);
}

const App = () => {
  
  const [refreshing, setRefrehing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [Data, setData] = useState([
    {
      title: "Add Account",
      tinylogo: require("./android/components/assets/icons8-add-male-user-64.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")
    },
    {
      title: "Biometric Registration",
      tinylogo: require("./android/components/assets/icons8-fingerprint-80.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Create Login Pin",
      tinylogo: require("./android/components/assets/icons8-enter-50.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Change Password",
      tinylogo: require("./android/components/assets/icons8-one-time-password-50.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Package",
      tinylogo: require("./android/components/assets/icons8-verified-account-64.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Fee Account",
      loading: require("./android/components/assets/icons8-ellipsis-50.png"),
      tinylogo: require("./android/components/assets/icons8-account-32.png")
    },
    {
      title: "Blocking",
      tinylogo: require("./android/components/assets/icons8-cancel-24.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "User Activity",
      tinylogo: require("./android/components/assets/icons8-change-user-80.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Update Profile",
      tinylogo: require("./android/components/assets/icons8-update-user-64.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "Change Login Pin",
      tinylogo: require("./android/components/assets/icons8-password-reset-80.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")

    },
    {
      title: "De-Activate Login Pin",
      tinylogo: require("./android/components/assets/icons8-wrong-pincode-50.png"),
      loading: require("./android/components/assets/icons8-ellipsis-50.png")
    },

  ]);

  console.log("initial==",Data);

  // const fetchData = async () => {
  //   const response = await loadMore(50);
  //   setData([...response]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderItem = ({ item }) => (

    <Item
      tinylogo={item.tinylogo}
      title={item.title}
      loading={item.loading}
    />

  );

  const handleOnEndReached = async () => {
    setLoadingMore(true);
    if (!stopFetchMore) {
      const response = await loadMore(50);
      if (response === 'done')
        return setLoadingMore(false);
      setData([...Data, ...response]);
      stopFetchMore = true;
    }
    setLoadingMore(false);
  };


  return (
    <SafeAreaView >
      <View style={{ flexDirection: "row", backgroundColor: '#b22222', justifyContent: 'space-between', height: 50 }}>
        <View>
          <Image
            style={{ width: 40, height: 40, marginLeft: 10, marginTop: 5 }}
            source={require("./android/components/assets/icons8-left-50.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 10 }}>
            My Alfa
          </Text>
        </View>
        <Image
          style={{ width: 30, height: 30, marginRight: 10, marginTop: 10 }}
          source={require("./android/components/assets/icons8-home-24.png")}

        />
      </View>
      <View style={styles.container}>
        <View style={{ padding: "2%" }}>
          <Text style={styles.text}>
            Please select to change your Alfa settings
          </Text>
        </View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          numColumns={3}
          onEndReached={handleOnEndReached}
          onEndReachedThreshold={0.5}
          onScrollBeginDrag={() => {
            stopFetchMore = false;
          }}
          // ListFooterComponent={(e) => <View style={{ height: 200, backgroundColor: "red" }} ><Text>fdsf</Text></View> }
          // ListFooterComponentStyle={{}}
          refreshing={refreshing}
          onRefresh={() => {
            setData([
              {
                title: "Add Account",
                tinylogo: require("./android/components/assets/icons8-add-male-user-64.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")
              },
              {
                title: "Biometric Registration",
                tinylogo: require("./android/components/assets/icons8-fingerprint-80.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Create Login Pin",
                tinylogo: require("./android/components/assets/icons8-enter-50.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Change Password",
                tinylogo: require("./android/components/assets/icons8-one-time-password-50.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Package",
                tinylogo: require("./android/components/assets/icons8-verified-account-64.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Fee Account",
                loading: require("./android/components/assets/icons8-ellipsis-50.png"),
                tinylogo: require("./android/components/assets/icons8-account-32.png")
              },
              {
                title: "Blocking",
                tinylogo: require("./android/components/assets/icons8-cancel-24.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "User Activity",
                tinylogo: require("./android/components/assets/icons8-change-user-80.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Update Profile",
                tinylogo: require("./android/components/assets/icons8-update-user-64.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "Change Login Pin",
                tinylogo: require("./android/components/assets/icons8-password-reset-80.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")

              },
              {
                title: "De-Activate Login Pin",
                tinylogo: require("./android/components/assets/icons8-wrong-pincode-50.png"),
                loading: require("./android/components/assets/icons8-ellipsis-50.png")
              },
             
            ]);
          }}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    // flex:1,
    paddingLeft: '2%'

  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black"
  },

  title: {
    width: '100%',
    marginTop: 10,
    fontSize: 11,
    textAlign: "center",
    color: 'black',
    fontWeight: 'bold'
    // backgroundColor:"yellow",
    // marginHorizontal:20
    // marginVertical:40

  },

  tinylogo: {
    width: 32,
    height: 32,
    // marginLeft: 10,
    tintColor: "#b22222",
    // backgroundColor: "red"
  },

  loading: {
    width: 20,
    height: 20,
    marginLeft: 4
    //  marginBottom:50
  },

  items: {
    alignItems: 'center',
    width: 130,
    // flexDirection:"column",
    padding: '3%',
    backgroundColor: 'white',
    marginVertical: 3,
    marginHorizontal: 3,
    // marginRight:"65%",
    borderRadius: 15,

    // borderWidth: 3,
    // borderColor: "#dcdcdc",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5, //android
  },


})
export default App;