import React, { memo, useEffect, useState, useRef } from "react";
import { Carousel, Radio, message } from "antd";
import { CarouselWrap, BtnsWrap } from "./style";
import {
  addBanner,
  deleteBanner,
  getBannerInfo,
  uploadBanner,
} from "../../../services/fetch";
const CarouselCpn = memo((props) => {
  const [bannerList, setBannerList] = useState([]);
  const [current, setCurrent] = useState(null); // 当前轮播图索引
  const [updateList, setUpdateList] = useState(false);
  const [clickType, setClickType] = useState('add');
  // 创建 ref
  const inputRef = useRef();
  useEffect(() => {
    getBannerInfo().then((res) => {
      setBannerList(res.list);
      setCurrent(0);
    }).catch((err) => {})
  }, [updateList]);

  function updateImg() {
    if (current === null) {
      message.warning('当前图片为空');
      return;
    }
    setClickType('update');
    inputRef.current.click();
  }

  // 当前轮播索引
  function getCurrent(current) {
    setCurrent(current);
  }

  function handleUpload(event) {
    const files = event.target.files;
    if (clickType === 'update') {
      uploadBanner(files, bannerList[current].id).then((res) => {
        setUpdateList(!updateList);
      });
    } else if (clickType === 'add') {
      addBanner(files).then((res) => {
        setUpdateList(!updateList);
      });
    }

  }

  function deleteImg() {
    if (current === null) {
      message.warning('当前图片为空');
      return;
    }
    deleteBanner(bannerList[current].id).then((res) => {
      setUpdateList(!updateList);
    });
  }

  function addImg() {
    setClickType('add');
    inputRef.current.click();
  }

  return (
    <CarouselWrap>
    {bannerList && <Carousel effect="fade" arrows afterChange={getCurrent}>
        {bannerList.map((item) => {
          return (
            <img
              key={item.id}
              className="banner-item"
              src={item.bannerUrl}
              alt=""
            />
          );
        })}
      </Carousel>}
      <BtnsWrap>
        <Radio.Group>
          <Radio.Button value="large" onClick={updateImg}>
            更换此图片
          </Radio.Button>
          <Radio.Button value="default" onClick={deleteImg}>
            删除此图片
          </Radio.Button>
          <Radio.Button value="small" onClick={addImg}>新增图片</Radio.Button>
        </Radio.Group>
        <input ref={inputRef} type="file" onChange={handleUpload} />
      </BtnsWrap>
    </CarouselWrap>
  );
});

export default CarouselCpn;
