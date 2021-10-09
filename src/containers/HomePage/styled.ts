import { Card, Layout } from 'antd'
import styled from 'styled-components'

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

export const StyledLayoutContents = styled(Layout.Content)`
  min-height: 100vh;
  padding: 10px 10px !important;
  background: green;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 90px 60px !important;
  }
`
export const StyledLayoutContentss = styled(Layout.Content)`
  min-height: 20vh;
  padding: 10px 10px !important;
  background: #101820;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 90px 60px !important;
  }
`
export const StyledCard = styled(Card)`
  height: 90x;
  border-radius: 15px;
  border: 3px solid #7ccc6c;
  overflow: hidden;
  width: 280px;

  .ant-card-meta-title {
    font-size: 12px;
    font-weight: bold;
  }

  .ant-card-meta-description {
    font-size: 18px;
    margin-bottom: 0px !important;
    font-weight: bold;
    color: #820000;
  }

  .ant-card-meta-detail {
    margin-top: 0px;
  }
  .custom-meta {
    margin-top: -16px !important;
    font-size: 13px;
  }
`

export const Cards = styled.div`
  padding-bottom: 48px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;

  .ant-card {
    border: 1px solid #7ccc6c;
  }
`
export const Wrapper = styled.div`
  font-size: 30px;
  font-weight: 600px;
  color: white;
  padding-left: 20px;
  padding-bottom: 30px;
`
