import React from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtCard } from "taro-ui";
import { connect } from "react-redux";
import dva from "../../utils/dva";
import "./index.less";

interface counterStateType {
  counter: { count: number };
}
interface propsType {
  counterCount: { count: number };
}

function mapStateToProps(state: counterStateType) {
  const counterCount = state.counter;
  return { counterCount };
}

const Count: React.FC<propsType> = (props) => {
  const dispatch = dva.useDispatch();
  // const cou=useSelector(state=>{console.log('state',state);state.counter.count});
  return (
    <View className='counter'>
      <AtCard title='计数器'>
        <Text>Count:{props.counterCount.count}</Text>
        <AtButton
          size='small'
          type='primary'
          className='counter-btn'
          onClick={() => {
            dispatch({ type: "counter/increment" });
          }}
        >
          {` + `}
        </AtButton>
        <AtButton
          size='small'
          type='primary'
          className='counter-btn'
          onClick={() => {
            dispatch({ type: "counter/decrement" });
          }}
        >
          {` - `}
        </AtButton>
      </AtCard>
    </View>
  );
};

// export default Count;
export default connect(mapStateToProps)(Count);
