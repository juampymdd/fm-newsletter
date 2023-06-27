
import Image from 'next/image'
import desktopIMG from '@/public/images/illustration-sign-up-desktop.svg'
import mobileIMG from '@/public/images/illustration-sign-up-mobile.svg'
export const ImageSignup = () => {
  return (
    <div className='card-image'>
        <picture>
          <source srcSet={desktopIMG.src} media="(min-width: 641px)" type="image/svg+xml" />
          <source srcSet={mobileIMG.src} media="(max-width: 640px)" type="image/svg+xml" />
          <Image src={desktopIMG} alt="" />
        </picture>
      </div>
  )
}
