import { Card, Carousel } from 'antd'

import styled from 'styled-components'

export interface CarouselProps {
  readonly $dataLength?: number
}

export const BannerContainers = styled.a`
  position: relative;

  & > p {
    position: absolute;
    bottom: 0px;
    left: 20px;
    text-align: left;
    font: normal normal bold 28px/34px Raleway;
    letter-spacing: 0.45px;
    color: white;
    max-lines: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .img {
    border-radius: 15px;
    position: relative;
    opacity: 1;
    -webkit-filter: brightness(70%);
    filter: brightness(70%);
    &:hover {
      opacity: 0.7;
    }
  }
  @media only screen and (min-width: 992px) {
    img {
      width: 100%;
      border-radius: 15px;
    }
  }
`
export const StyledAntdCarousel = styled(Carousel)<CarouselProps>`
  .slick-dots li {
    width: 6.05px;
    height: 6.05px;
    margin: 0 12px;
    button {
      width: 6.05px;
      height: 6.05px;
      border-radius: 6.05px;
      background: #000000;
      opacity: 0.3;
    }
    &.slick-active {
      width: 6.05px;
      button {
        background: #000000;
        opacity: 1;
      }
    }
  }

  .slick-dots.slick-dots-bottom {
    bottom: -50px !important;
  }

  .slick-slide > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-left: 10px;
    padding-right: 10px;
  }

  .slick-dots li button {
    opacity: 1 !important;
    width: 8px !important;
    height: 8px !important;
    border: 1px solid #000;
    background-color: #fff;
  }

  .slick-dots.slick-active li button {
    opacity: 1 !important;
    width: 8px !important;
    height: 8px !important;
    border: 1px solid #000;
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 0px;
  }

  .slick-prev {
    margin-left: 20px;
    @media only screen and (min-width: 992px) {
      margin-left: 0;
      transform: translateY(-50%);
    }
  }

  .slick-next {
    margin-right: 20px;
    @media only screen and (min-width: 992px) {
      margin-right: 0;
      transform: translateY(-50%);
    }
  }
`

export const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 15px;
  border: 1px solid #00000080;
  overflow: hidden;

  .ant-card-meta-title {
    font-size: 18px;
    margin-bottom: 0px !important;
    font-weight: bold;
  }

  .ant-card-meta-description {
    font-size: 14px;
    font-weight: bold;
  }

  .ant-card-meta-detail {
    margin-top: 5px;
  }

  @media only screen and (min-width: 992px) {
    width: 346px;
    height: 430px;
  }

  &:hover {
    border: 1px solid #00000080;

    .porto {
      transform: scale(1.15);
    }
  }
`
