import { View, Text } from "@tarojs/components";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AtButton, AtCard, AtList, AtListItem } from "taro-ui";
import dva from "../../utils/dva";
import "./index.less";

export interface personType {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase: string;
    bs: string;
  };
}
interface propsType {
  dataList: { list: personType[] };
}

function mapStateToProps(state) {
  const dataList = state.data;
  return { dataList };
}

const DataPage: React.FC<propsType> = (props) => {
  const dispatch = dva.useDispatch();
  const [card, setCard] = useState([false]);
  const { dataList } = props;
  useEffect(()=>{
    setCard(()=>{
      return [];
    })
    dataList.list.map(()=>{
      setCard(()=>{
        card.push(false);
        return [...card];
      })
    })
  },[dataList])
  return (
    <View className='data'>
      <AtCard title='发起请求'>
        <AtButton
          size='small'
          circle
          type='secondary'
          className='data-btn'
          onClick={() => {
            dispatch({ type: "data/getList" });
          }}
        >
          获取数据
        </AtButton>
        <AtButton
          size='small'
          circle
          type='primary'
          className='data-btn'
          onClick={() => {
            dispatch({ type: "data/initList" });
          }}
        >
          清空数据
        </AtButton>
        <View>
          {dataList.list.length > 0 ? (
            <AtList>
              {dataList.list.map((item) => (
                <View>
                  <AtListItem
                    title={item.username}
                    note={item.email}
                    arrow={card[item.id]?'down':'right'}
                    onClick={() => {
                      
                      setCard(()=>{
                        card[item.id]=!card[item.id];
                        return [...card];
                      });
                    }}
                  />
                  {card[item.id] ? (
                    <AtCard title={item.name} note={item.website}>
                      <View style={{float:'left',width:'150rpx'}}>street:</View><View>{item.address?.street}</View>
                      <View style={{float:'left',width:'150rpx'}}>suite:</View><View>{item.address?.suite}</View>
                      <View style={{float:'left',width:'150rpx'}}>city:</View><View>{item.address?.city}</View>
                      <View style={{float:'left',width:'150rpx'}}>zipcode:</View><View>{item.address?.zipcode}</View>
                    </AtCard>
                  ) : (
                    <View></View>
                  )}
                </View>
              ))}
            </AtList>
          ) : (
            <Text>无数据</Text>
          )}
        </View>
      </AtCard>
    </View>
  );
};

export default connect(mapStateToProps)(DataPage);
