import { Layout, Typography, Input, Breadcrumb } from 'antd'
import styled from 'styled-components'

export const Cart = styled.div`
  display: flex;
`
export const Breadcrumbs = styled(Breadcrumb)`
  margin: 16px 20px;
`
export const StyledLayoutHeaders = styled(Layout.Header)`
  position: fixed;
  z-index: 3000;
  width: 100%;
  background: yellow;
  height: auto;
  padding: 0 0;
  box-shadow: 0px 1px 3px #0000001a;
  padding: 0;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 10px 50px !important;
  }
`
export const StyledLayoutHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1000;
  width: 100%;
  background: #101820;
  height: auto;
  padding: 0 0;
  box-shadow: 0px 1px 3px #0000001a;
  padding: 0;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 10px 50px !important;
  }
`

export const StyledTitle = styled(Typography.Title)`
  font-size: 20px !important;
  color: #fff !important;
  width: 200px;
  text-align: center;

  @media only screen and (min-width: 992px) {
    margin-bottom: 0 !important;
    text-align: left;
  }
`

export const StyledLayoutContent = styled(Layout.Content)`
  min-height: 100vh;
  padding: 10px 10px !important;
  background: #ffffff;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    padding: 90px 60px !important;
  }
`
export const Search = styled(Input.Search)`
  border-radius: 8px;
  width: 230px;
`
export const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  padding-top: 15px;
`

export const WrapperSearch = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
  @media only screen and (min-width: 992px) {
    margin-left: 30px;
  }
  .anticon {
    font-size: 15px;
    color: black;
  }

  .ant-input {
    height: 40px;
    border-radius: 5px;
    text-align: left;
    letter-spacing: 0.28px;
    background: #ffffff 0% 0% no-repeat padding-box;
  }
  .ant-btn {
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 5px !important;
    height: 40px !important;
    padding: 1px !important;
    background-color: grey;
  }
  @media only screen and (min-width: 992px) {
    margin-top: 0;
  }
`
