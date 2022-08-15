import React, { memo } from 'react';
// import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import HZZThemeHeaderRCM from '@/components/theme-header-rcm';
// import HZZTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';
// import { getTopListAction } from '../../store/actionCreators';

export default memo(function HZZRecomendRanking() {
  // redux hooks
  // const { upRanking, newRanking, originRanking } = useSelector(state => ({
  //   upRanking: state.getIn(["recommend", "upRanking"]),
  //   newRanking: state.getIn(["recommend", "newRanking"]),
  //   originRanking: state.getIn(["recommend", "originRanking"]),
  // }), shallowEqual);
  // const dispatch = useDispatch();

  // other hooks
  // useEffect(() => {
  //   dispatch(getTopListAction(0));
  //   dispatch(getTopListAction(2));
  //   dispatch(getTopListAction(3));
  // }, [dispatch]);

  return (
    <RankingWrapper>
      <HZZThemeHeaderRCM title="榜单" />
      <div className="tops">
        {/* <HZZTopRanking info={upRanking}/>
        <HZZTopRanking info={newRanking}/>
        <HZZTopRanking info={originRanking}/> */}
      </div>
    </RankingWrapper>
  )
})
