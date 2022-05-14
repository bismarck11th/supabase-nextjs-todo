import '../styles/globals.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP': // TTFB
      console.log(`FCP ${Math.round(metric.value * 10) / 10}`)
      break

    case 'LCP': // FCP
      console.log(`LCP ${Math.round(metric.value * 10) / 10}`)
      break

    case 'TTFB': // Time To First Byte
      console.log(`TTFB ${Math.round(metric.value * 10) / 10}`)
      break

    case 'Next.js-hydration':
      console.log(
        `Hydration ${Math.round(metric.startTime * 10) / 10} -> ${
          Math.round((metric.startTime + metric.value) * 10) / 10
        }`
      )
      break

    default:
      break
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
