/* eslint-disable no-console */
import { FC, useEffect, useMemo, useState } from 'react'
import Container, { Crumb } from 'components/Container'
import { Card, Col, notification, Row, Spin } from 'antd'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useInjectSaga } from 'utils/injectSaga'
import saga from './saga'
import reducer from './reducer'
import { useInjectReducer } from 'utils/injectReducer'
import useDispatch from './useDispatch'
import { useSelector } from './useSelector'
import {
  Cards,
  StyledCard,
  StyledLayoutContents,
  BannerContainers,
  Wrapper,
} from './styled'
import Corousel from './Corousel'
import { parse, ParsedQuery } from 'query-string'

const HomePage: FC = () => {
  useInjectReducer({ key: 'homePage', reducer })
  useInjectSaga({ key: 'homePage', saga })
  const { load, reset } = useDispatch()
  const { data, error, loading, s } = useSelector()
  const { search } = useLocation()
  const history = useHistory()
  const [defaultSearch, setDefaultSearch] = useState<string>('')
  const [value, setValue] = useState<string>('')

  const crumbs: ReadonlyArray<Crumb> = useMemo(() => {
    return [{ to: '/', label: 'Home' }, { label: 'List' }]
  }, [])
  const { Meta } = Card

  useEffect(
    () => (data.length === 0 ? load({ limit: 20, s: undefined }) : undefined),
    [data.length, defaultSearch, load]
  )

  useEffect(() => {
    if (error) {
      notification.error({ message: error.Error, onClose: reset })
    }
  }, [error, reset])

  useEffect(() => {
    if (defaultSearch !== s) {
      load({ limit: 20, s: defaultSearch, new: true })
    }
  }, [load, defaultSearch, s])

  useEffect(() => {
    const qs: ParsedQuery = parse(search)
    if (qs.search) {
      setDefaultSearch(qs.search as string)
      setValue(qs.search as string)
    }
  }, [search])

  return (
    <>
      <Container
        crumbs={crumbs}
        valueSearch={value}
        onSearch={(v) => history.push(`/?search=${v}`)}
        onChange={(e) => setValue(e.target.value)}
      >
        <Spin spinning={loading}>
          <Row justify="center">
            <Col sm={24}>
              <Corousel />
            </Col>
            <div style={{ marginTop: 80 }}>
              <Row gutter={[24, 24]}>
                <Col sm={8}>
                  <BannerContainers>
                    <img
                      alt={`img`}
                      src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/10/7/1788f6a0-cbde-42e2-9789-f6f082bed3e4.jpg.webp?ect=4g"
                    />
                  </BannerContainers>
                </Col>
                <Col sm={8}>
                  <BannerContainers>
                    <img
                      alt={`img`}
                      src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/10/7/93dc6ceb-907a-4714-8ae6-5063f21aa9d2.jpg.webp?ect=4g"
                    />
                  </BannerContainers>
                </Col>
                <Col sm={8}>
                  <BannerContainers>
                    <img
                      alt={`img`}
                      src="https://images.tokopedia.net/img/cache/400/wCVIqt/2021/10/3/295e376d-d8a0-47d9-8486-3c5fddc664f3.jpg.webp?ect=4g"
                    />
                  </BannerContainers>
                </Col>
              </Row>
            </div>
          </Row>
        </Spin>
      </Container>
      <StyledLayoutContents>
        <Row gutter={[24, 24]} justify="center">
          <Col sm={24}>
            <Wrapper>PRODUK TERBARU</Wrapper>
          </Col>
          {data.map(({ name, permalink, sell_price }, index) => (
            <Col sm={24} md={8} lg={6} key={index}>
              <Link to={`/${permalink}`}>
                <Cards>
                  <StyledCard
                    hoverable={true}
                    bordered={true}
                    cover={
                      <img
                        alt={`img`}
                        src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/8/9/b497adfe-bfa9-459a-905f-34acc4e99968.jpg.webp?ect=4g"
                      />
                    }
                  >
                    <Meta
                      className="custom-meta"
                      title={name}
                      description={`Rp ${sell_price}`}
                    />
                  </StyledCard>
                </Cards>
              </Link>
            </Col>
          ))}
        </Row>
      </StyledLayoutContents>
    </>
  )
}

export default HomePage
