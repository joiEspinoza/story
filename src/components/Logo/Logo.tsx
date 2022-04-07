import React from 'react'

// import '../../scss/base.scss'
import '../../styles/base.css'

export interface LogoProps {
  /**
   * Color del texto
   */
  smileColor?: string
  /**
   * Color del circulo
   */
  circleColor?: string
  /*
  * Color del punto
  */
  eyeColor?: string
}

/**
 * Primary UI component for user interaction
 */
export function Logo({
  smileColor = '#60A5FA',
  circleColor = '#2563EB',
  eyeColor = '#F97316'
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 31 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3904_38805)">
        <path
          d="M27.5397 11.1156C29.4504 11.1156 30.9993 9.59659 30.9993 7.72282C30.9993 5.84906 29.4504 4.33008 27.5397 4.33008C25.629 4.33008 24.0801 5.84906 24.0801 7.72282C24.0801 9.59659 25.629 11.1156 27.5397 11.1156Z"
          fill={eyeColor}
        />
        <path
          d="M17.2757 34.4888V0.5C12.7566 0.61358 8.46144 2.4539 5.30607 5.62859C2.15071 8.80328 0.384766 13.0612 0.384766 17.4944C0.384766 21.9277 2.15071 26.1856 5.30607 29.3603C8.46144 32.5349 12.7566 34.3753 17.2757 34.4888Z"
          fill={circleColor}
        />
        <path
          d="M24.1745 17.748C23.8499 19.2805 22.9968 20.6564 21.7588 21.6442C20.5208 22.6319 18.9736 23.1712 17.3776 23.1712C15.7816 23.1712 14.2344 22.6319 12.9964 21.6442C11.7584 20.6564 10.9053 19.2805 10.5807 17.748H3.90332C4.25591 21.0126 5.82794 24.0338 8.31656 26.2295C10.8052 28.4251 14.0343 29.64 17.3819 29.64C20.7294 29.64 23.9586 28.4251 26.4472 26.2295C28.9358 24.0338 30.5079 21.0126 30.8605 17.748H24.1745Z"
          fill={smileColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_3904_38805">
          <rect
            width="31"
            height="34"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
