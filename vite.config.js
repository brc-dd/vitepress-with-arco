import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    Components({
      dirs: ['components'],
      include: [/\.vue$/, /\.md$/],
      resolvers: [ArcoResolver({ sideEffect: true })]
    })
  ],
  ssr: { noExternal: ['@arco-design/web-vue'] }
}
