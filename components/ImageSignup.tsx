
import Image from 'next/image'
import desktopIMG from '@/public/images/illustration-sign-up-desktop.svg'
import mobileIMG from '@/public/images/illustration-sign-up-mobile.svg'
export const ImageSignup = () => {
  return (
    <div className='card-image'>
        <picture>
          <source src={desktopIMG.src} media="min(641px)" type="" />
          <source src={mobileIMG.src} media="max(640px)" type="" />
          <Image src={desktopIMG} alt="" />
        </picture>
      </div>
  )
}
