import { FC, useMemo } from 'react'
import { StyledAntdCarousel, BannerContainers } from './styled'
import type { Settings } from '@ant-design/react-slick'

const Corousel: FC = () => {
  const setting: Settings = useMemo(
    () => ({
      dots: true,
      arrows: true,
      autoplay: true,
      draggable: true,
      slidesToScroll: 1,
      infinite: true,
    }),
    []
  )

  return (
    <>
      <StyledAntdCarousel {...setting}>
        <BannerContainers>
          <img
            alt={`img`}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/7/30/74d32a7f-6a2d-49a3-b325-114de4b055c5.jpg.webp?ect=3g"
          />
        </BannerContainers>
        <BannerContainers>
          <img
            alt={`img`}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/10/6/746f0c35-8684-4e2c-a87e-6e0daf978854.jpg.webp?ect=3g"
          />
        </BannerContainers>
        <BannerContainers>
          <img
            alt={`img`}
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/10/8/1e4a30db-327a-45e2-b5e4-9fd5a3f90088.jpg.webp?ect=3g"
          />
        </BannerContainers>
      </StyledAntdCarousel>
    </>
  )
}

export default Corousel
