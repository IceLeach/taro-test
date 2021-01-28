export default{
    namespace:'counter',
    state:{
        count:0,
    },

    effects:{
        *increment(_: any,{put}: any){
            yield put({type: 'INCREMENT'});
        },
        *decrement(_: any,{put}: any){
            yield put({type: 'DECREMENT'});
        }
    },

    reducers:{
        INCREMENT(state,{payload}){
            return {...state,count:state.count+1};
        },
        DECREMENT(state){
            return {...state,count:state.count-1};
        }
    }
}