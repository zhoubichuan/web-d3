import * as api from '@/api/index.js'
import * as _ from 'lodash'
import axios from 'axios'
import service from '@/util/request.js'
import * as china from 'echarts/map/json/china.json'
import * as world from 'echarts/map/json/world.json'
import chart from '@/util/chart.js'
import cardinalSpline from '@/util/cardinalSpline.js'
// import * as topojson  from 'topojson'
import * as d3Sankey  from 'd3-sankey'
let d3 = require('d3')

export default {
  install (Vue) {
    Vue.prototype.$chart = chart
    Vue.prototype.cardinalSpline=cardinalSpline
    // Vue.prototype.topojson= topojson
    Vue.prototype.d3Sankey= d3Sankey
    Vue.prototype.$d3 = d3
    Vue.prototype.$china = china.default
    Vue.prototype.$world = world.default
    Vue.prototype._ = _
    Vue.prototype.$service = service
    Vue.prototype.$api = api
    Vue.prototype.$awaitWarp = function (promise) {
      return promise.then(res => ({ res }), rej => ({ rej })).catch(err => ({ err }))
    }
    Vue.prototype.$ajax = axios

    Vue.config.productionTip = false
    Vue.prototype.$log = console.log
  }
}
