import { Breadcrumb, Layout } from 'antd'
import { ChangeEvent, FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledLayoutContent,
  StyledLayoutHeader,
  WrapperSearch,
  Search,
  Cart,
  Wrapper,
  Breadcrumbs,
} from './styled'
import { ShoppingCartOutlined } from '@ant-design/icons'

export interface Crumb {
  readonly to?: string
  readonly label: string
}

export interface Props {
  readonly children: ReactNode
  readonly crumbs: ReadonlyArray<Crumb>
  readonly onSearch?: (value: string) => void
  readonly valueSearch?: string
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Container: FC<Props> = ({
  children,
  crumbs,
  onSearch,
  valueSearch,
  onChange,
}: Props) => {
  return (
    <Layout>
      <StyledLayoutHeader>
        <Cart>
          <img
            alt={`img`}
            src="https://www.aspenku.com/static/media/logo.29483d78.svg"
          />
          <Wrapper>
            <WrapperSearch>
              <Search
                value={valueSearch}
                onSearch={onSearch}
                autoComplete="search"
                onChange={onChange}
                placeholder="Search"
              />
            </WrapperSearch>
            <ShoppingCartOutlined
              style={{
                fontSize: 30,
                color: 'white',
                paddingLeft: 40,
              }}
            />
          </Wrapper>
        </Cart>
      </StyledLayoutHeader>
      <StyledLayoutContent>
        <Breadcrumbs>
          {crumbs.map(({ to, label }, index) => (
            <Breadcrumb.Item key={index}>
              {to ? <Link to={to}>{label}</Link> : label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumbs>

        {children}
      </StyledLayoutContent>
    </Layout>
  )
}

export default Container
