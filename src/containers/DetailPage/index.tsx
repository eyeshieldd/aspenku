import {
  Col,
  Typography,
  Modal,
  notification,
  Row,
  Spin,
  Descriptions,
  Button,
} from 'antd'
import Container, { Crumb } from 'components/Container'
import { FC, useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { DetailContainer, StyledContainerIcon, Image } from './styled'
import { useInjectSaga } from 'utils/injectSaga'
import saga from './saga'
import reducer from './reducer'
import { useInjectReducer } from 'utils/injectReducer'
import useDispatch from './useDispatch'
import { useSelector } from './useSelector'
import {
  PieChartOutlined,
  DollarCircleOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,
  ShareAltOutlined,
} from '@ant-design/icons'

interface Params {
  readonly id: string
}

const DetailPage: FC = () => {
  useInjectReducer({ key: 'detailPage', reducer })
  useInjectSaga({ key: 'detailPage', saga })
  const { load, reset } = useDispatch()
  const { data, error, loading } = useSelector()
  const { id }: Params = useParams()
  const [modal, setModal] = useState<boolean>(false)
  const history = useHistory()

  const crumbs: ReadonlyArray<Crumb> = useMemo(() => {
    return [
      { to: '/', label: 'Home' },
      { to: '/', label: 'List' },
      { label: data?.name || id },
    ]
  }, [data?.name, id])

  useEffect(() => load(id), [load, id])

  useEffect(() => {
    if (error) {
      notification.error({ message: error.Error, onClose: reset })
    }
  }, [error, reset])

  return (
    <Container crumbs={crumbs} onSearch={(v) => history.push(`/?search=${v}`)}>
      <Spin spinning={loading}>
        <Row gutter={[24, 24]}>
          <Col sm={24} md={10}>
            <Image
              style={{ cursor: 'pointer', borderRadius: 9, marginTop: 30 }}
              onClick={() => setModal(true)}
              width="80%"
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg"
              alt={`'movie'}-img`}
            />
          </Col>
          <Col sm={24} md={14}>
            <DetailContainer>
              <Descriptions
                column={{ xs: 1, sm: 1, md: 1, lg: 2 }}
                bordered
                title={data?.name}
                layout="vertical"
              >
                <Descriptions.Item label="Harga Produk">
                  <StyledContainerIcon>
                    <DollarCircleOutlined className="icon" />
                    <Typography.Text className="text">
                      Rp {data?.sell_price}
                    </Typography.Text>
                  </StyledContainerIcon>
                </Descriptions.Item>

                <Descriptions.Item label="Stok Produk">
                  <StyledContainerIcon>
                    <FundProjectionScreenOutlined className="icon" />
                    <Typography.Text className="text">
                      {data?.stock_on_hand} Peaces
                    </Typography.Text>
                  </StyledContainerIcon>
                </Descriptions.Item>
                <Descriptions.Item label="Minimum Order">
                  <StyledContainerIcon>
                    <PieChartOutlined className="icon" />
                    <Typography.Text className="text">
                      {data?.min_qty_order}
                    </Typography.Text>
                  </StyledContainerIcon>
                </Descriptions.Item>
                <Descriptions.Item label="Berat">
                  <StyledContainerIcon>
                    <FundProjectionScreenOutlined className="icon" />
                    <Typography.Text className="text">
                      {data?.weight}
                    </Typography.Text>
                  </StyledContainerIcon>
                </Descriptions.Item>
                <Descriptions.Item label="Deskripsi Produk">
                  <StyledContainerIcon>
                    <FileDoneOutlined className="icon" />
                    <Typography.Text className="text">
                      {data?.description}
                    </Typography.Text>
                  </StyledContainerIcon>
                </Descriptions.Item>
              </Descriptions>
            </DetailContainer>
            <DetailContainer>
              <Button type="primary" icon={<ShareAltOutlined />} size="large">
                Share Produk
              </Button>
            </DetailContainer>
          </Col>
        </Row>
        <Modal
          visible={modal}
          onCancel={() => setModal(false)}
          onOk={() => setModal(false)}
          footer={false}
          closable={false}
          title={false}
        >
          <img
            width="100%"
            src="https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/21/55893110-8f4d-42cb-97cf-a3e446e5d2c8.jpg"
            alt={`img`}
          />
        </Modal>
      </Spin>
    </Container>
  )
}

export default DetailPage
