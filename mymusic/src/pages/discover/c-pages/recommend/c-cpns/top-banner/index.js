import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

export default memo(function HZZTopBanner() {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 在轮播图翻页前调用此函数，获取currentIndex，从而设置每张轮播图的背景
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  // 其他业务逻辑
  // topBanners[currentIndex]存在的时候再取里面的东西，防止第一次从空数组中取值报错
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
