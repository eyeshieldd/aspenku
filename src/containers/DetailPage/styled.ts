import styled from 'styled-components'
import { Typography } from 'antd'

export const Image = styled.img`
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  &:hover,
  &:focus {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
`

export const DetailContainer = styled.div`
  background-color: #fff;
  padding: 10px;
`
export const StyledParagraph = styled(Typography.Paragraph)`
  font-size: 14px;
  line-height: 22px;
  color: #707070;
  margin: 0;
  white-space: pre-wrap;
  @media only screen and (min-width: 992px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const StyledContainerIcon = styled.div`
  margin: 11.5px 0;
  display: flex;

  .icon {
    margin-right: 13px;
    margin-top: 3px;
    font-size: 15px;
    width: 15px;
    height: 15px;
    @media only screen and (min-width: 992px) {
      font-size: 18px;
      margin-right: 16px;
      width: 18px;
      height: 18px;
    }
  }

  .text {
    font-size: 14px;
    color: #707070;
    white-space: pre-wrap;
    @media only screen and (min-width: 992px) {
      font-size: 16px;
    }
  }
`
