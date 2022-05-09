import Prism from 'prism-react-renderer/prism'
import 'nextra-theme-docs/style.css'

(typeof global !== "undefined" ? global : window).Prism = Prism

require("prismjs/components/prism-rego")

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
