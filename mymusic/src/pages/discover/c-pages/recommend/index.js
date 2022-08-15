import React, { memo } from 'react';

import HZZTopBanner from './c-cpns/top-banner';
import HZZHotRecommend from './c-cpns/hot-recommend';
import HZZNewAlbum from './c-cpns/new-album';
import HZZRecommendRanking from './c-cpns/recommend-ranking';
import HZZUserLogin from './c-cpns/user-login';
import HZZSettleSinger from './c-cpns/settle-singer';
import HZZHotAnchor from './c-cpns/hot-anchor';

import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
//利用redux中的useDispatch和useSelector
const HZZRecommend = memo(() => {

  return (
    <RecommendWrapper>
      <HZZTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HZZHotRecommend/>
          <HZZNewAlbum/>
          <HZZRecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <HZZUserLogin/>
          <HZZSettleSinger/>
          <HZZHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default HZZRecommend;

// 下面代码是利用react-redux中的connect函数，获取数据
// const HZZRecommend = memo((props) => {
//   const {getBanners, topBanners} = props
//   useEffect(() => {
//     getBanners()
//   },[getBanners])
//   return (
//     <div>HZZRecommend:{topBanners.length}</div>
//   )
// })

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(HZZRecommend)