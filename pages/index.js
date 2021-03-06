import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Component } from 'react';
import axios from 'axios'

export default class Index extends React.Component {

  componentDidMount() {
    // console.log('enter componentDidMount ',this.props.param);
    
  }

  render() {
    return (
      <Layout>
        <h1>基金</h1> 
        <ul>
          {this.props.shows.map((show) => (
            <li key={show.id} >
              <div className="flex-container">
                <div className="flex-item">{show.id}</div>
                <div className="flex-item-2">{show.name}</div>
                <div className="flex-item">{show.currentPrice}</div>
                <div className={show.upperPercent > 0 ? "flex-item text-red": show.upperPercent < 0 ? "flex-item text-green" : "flex-item" }>{show.upperPercent}{ typeof(show.upperPercent)=="number" ? "%" : ""}</div>
                <div className="flex-item">{show.changeAmount}</div>
                <div className="flex-item">{show.buy}</div>
                <div className="flex-item">{show.sell}</div>
                <div className="flex-item">{show.AcurrentPrice}{typeof(show.AcurrentPrice)=="number" ? "%" : ""}</div>
                <div className="flex-item">{show.ABuy}</div>
                <div className="flex-item">{show.ASell}</div>
                <div className="flex-item">{show.AChangeAmount}{ typeof(show.AChangeAmount)=="number" ? "万" : ""}</div>
                <div className={show.AUpperPercent > 0 ? "flex-item text-red": show.AUpperPercent < 0 ? "flex-item text-green" : "flex-item"}>{show.AUpperPercent}{typeof(show.AUpperPercent)=="number" ? "%" : ""}</div>
                <div className="flex-item">{show.yesterdayPrice}</div>
                <div className={show.zhishuUpperPrice > 0 ? "flex-item text-red": show.zhishuUpperPrice < 0 ? "flex-item text-green" : "flex-item"}>{show.zhishuUpperPrice}{typeof(show.zhishuUpperPrice)=="number" ? "%" : ""}</div>
                <div className={show.zheyiPrice > 0 ? "flex-item text-red": show.zheyiPrice < 0 ? "flex-item text-green" : "flex-item" }>{show.zheyiPrice}{typeof(show.zheyiPrice)=="number" ? "%" : ""}</div>
                <div className="flex-item">{show.abPercent}</div>
              </div>
            </li>
          ))}
        </ul>
        <style jsx>{`
          h1 {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
            
          }

          .flex-container {
            width:100%;
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content:space-between;
          } 
     
          .flex-item {
            flex:1
          }
          .flex-item-2 {
            flex:3
          }
          .text-red {
            color:red;
          }
          .text-green {
            color:green;
          }

        `}</style>
      </Layout>)
  }
}

const { httpsOverHttp } = require('tunnel');

const instance = axios.create({
    baseURL: 'http://fund.eastmoney.com/',
    // httpsAgent: agent,
    // proxy: {
    //   host: '192.168.3.65',
    //   port: 8888,
    //   secure:false
    // },
});


async function getList() {
  let ret = await axios.get('http://fund.eastmoney.com/Data/Fund_JJJZ_Data.aspx?t=1&lx=9&letter=&gsid=0&text=&sort=zdf,desc&page=1,10000000&dt=1425897162484&atfc=')
  return ret;
}

async function getUser() {
  const res = await instance.get('/Data/Fund_JJJZ_Data.aspx?t=1&lx=9&letter=&gsid=0&text=&sort=zdf,desc&page=1,10000000&dt=1425897162484&atfc=');
  return res.data;
}
 const codes = {
                '150262'  : { a : '150261', z : '162412', ab : 5, code : 'sz399989'},
                '502058'  : { a : '502057', z : '502056', ab : 5, code : 'sz399989'},
                '150258'  : { a : '150257', z : '161122', ab : 5, code : 'sz399993'},
                '150131'  : { a : '150130', z : '160219', ab : 5, code : 'sz399394'},
                '150272'  : { a : '150271', z : '161726', ab : 5, code : 'sz399441'},
                '150284'  : { a : '150283', z : '163118', ab : 5, code : 'sh000808'},
                '150149'  : { a : '150148', z : '165519', ab : 5, code : 'sh000841'},
                '150304'  : { a : '150303', z : '160420', ab : 5, code : 'sz399673'},
                '150270'  : { a : '150269', z : '161725', ab : 5, code : 'sz399997'},
                '150153'  : { a : '150152', z : '161022', ab : 5, code : 'sz399006'},
                '150214'  : { a : '150213', z : '161223', ab : 5, code : 'sz399958'},
                '150244'  : { a : '150243', z : '160637', ab : 5, code : 'sz399006'},
                '150246'  : { a : '150245', z : '160636', ab : 5, code : 'sz399970'},
                '150195'  : { a : '150194', z : '161025', ab : 5, code : 'sz399970'},
                '150230'  : { a : '150229', z : '160632', ab : 5, code : 'sz399987'},
                '150029'  : { a : '150028', z : '165511', ab : 4, code : 'sz399905'},
                '150185'  : { a : '150184', z : '163114', ab : 5, code : 'sh000827'},
                '150238'  : { a : '150237', z : '160634', ab : 5, code : 'sh000827'},
                '150324'  : { a : '150323', z : '164819', ab : 5, code : 'sh000827'},
                '150264'  : { a : '150263', z : '162413', ab : 5, code : 'sh000852'},
                '150191'  : { a : '150190', z : '164304', ab : 5, code : 'sh000827'},
                '502002'  : { a : '502001', z : '502000', ab : 5, code : 'sz399982'},
                '150023'  : { a : '150022', z : '163109', ab : 5, code : 'sz399001'},
                '150093'  : { a : '150092', z : '165707', ab : 5, code : 'sz399007'},
                '150084'  : { a : '150083', z : '162714', ab : 5, code : 'sz399330'},
                '150208'  : { a : '150207', z : '161721', ab : 5, code : 'sz399983'},
                '150216'  : { a : '150215', z : '160224', ab : 5, code : 'sz399610'},
                '150312'  : { a : '150311', z : '165524', ab : 5, code : 'sz399996'},
                '150308'  : { a : '150307', z : '161030', ab : 5, code : 'sz399804'},
                '150280'  : { a : '150279', z : '160640', ab : 5, code : 'sz399808'},
                '150260'  : { a : '150259', z : '161123', ab : 5, code : 'sz399992'},
                '150232'  : { a : '150231', z : '163116', ab : 5, code : 'sz399811'},
                '150056'  : { a : '150055', z : '164809', ab : 4, code : 'sz399905'},
                '150107'  : { a : '150106', z : '161118', ab : 5, code : 'sz399005'},
                '150328'  : { a : '150327', z : '164821', ab : 5, code : 'sz399808'},
                '502025'  : { a : '502024', z : '502023', ab : 5, code : 'sz399440'},
                '150124'  : { a : '150123', z : '165312', ab : 5, code : 'sz399550'},
                // '150165'  : { a : '150164', z : '165809', ab : 7, code : 'sh000832'},
                '150288'  : { a : '150287', z : '168203', ab : 5, code : 'sz399440'},
                // '150144'  : { a : '150143', z : '161826', ab : 7, code : 'sh000832'},
                // '150033'  : { a : '150032', z : '160718', ab : 8, code : 'sh000923'},
                '150067'  : { a : '150066', z : '160217', ab : 7, code : 'sz399481'},
                '150274'  : { a : '150273', z : '160638', ab : 5, code : 'sz399991'},
                '150276'  : { a : '150275', z : '167503', ab : 5, code : 'sz399991'},
                '150180'  : { a : '150179', z : '160626', ab : 5, code : 'sz399935'},
                '150178'  : { a : '150177', z : '160625', ab : 5, code : 'sz399966'},
                '150218'  : { a : '150217', z : '164905', ab : 5, code : 'sz399412'},
                '150101'  : { a : '150100', z : '160620', ab : 5, code : 'sh000805'},
                '150266'  : { a : '150265', z : '168201', ab : 5, code : 'sz399991'},
                // '150189'  : { a : '150188', z : '161719', ab : 7, code : 'sh000832'},
                '150316'  : { a : '150315', z : '161031', ab : 5, code : 'sz399803'},
                '150204'  : { a : '150203', z : '160629', ab : 5, code : 'sz399971'},
                '150168'  : { a : '150167', z : '161811', ab : 5, code : 'sz399300'},
                '150248'  : { a : '150247', z : '164818', ab : 5, code : 'sz399971'},
                '150298'  : { a : '150297', z : '160137', ab : 5, code : 'sz399970'},
                '502042'  : { a : '502041', z : '502040', ab : 5, code : 'sh000016'},
                '502005'  : { a : '502004', z : '502003', ab : 5, code : 'sz399967'},
                '150212'  : { a : '150211', z : '161028', ab : 5, code : 'sz399976'},
                '150136'  : { a : '150135', z : '164508', ab : 5, code : 'sz399903'},
                '150187'  : { a : '150186', z : '163115', ab : 5, code : 'sz399967'},
                '502022'  : { a : '502021', z : '502020', ab : 5, code : 'sh000016'},
                '502008'  : { a : '502007', z : '502006', ab : 5, code : 'sz399974'},
                '502050'  : { a : '502049', z : '502048', ab : 5, code : 'sh000016'},
                '150105'  : { a : '150104', z : '160417', ab : 5, code : 'sz399300'},
                '150151'  : { a : '150150', z : '165520', ab : 5, code : 'sh000823'},
                '150013'  : { a : '150012', z : '162509', ab : 4, code : 'sz399903'},
                '150065'  : { a : '150064', z : '160808', ab : 4, code : 'sz399904'},
                '150336'  : { a : '150335', z : '161628', ab : 5, code : 'sz399967'},
                '150052'  : { a : '150051', z : '165515', ab : 5, code : 'sz399300'},
                '150210'  : { a : '150209', z : '161026', ab : 5, code : 'sz399974'},
                '150310'  : { a : '150309', z : '165523', ab : 5, code : 'sz399994'},
                '150193'  : { a : '150192', z : '160628', ab : 5, code : 'sz399965'},
                '150292'  : { a : '150291', z : '168205', ab : 5, code : 'sz399986'},
                '502015'  : { a : '502014', z : '502013', ab : 5, code : 'sh000853'},
                '150294'  : { a : '150293', z : '160135', ab : 5, code : 'sz399807'},
                '150326'  : { a : '150325', z : '164820', ab : 5, code : 'sz399807'},
                '150118'  : { a : '150117', z : '160218', ab : 5, code : 'sz399393'},
                '150242'  : { a : '150241', z : '161029', ab : 5, code : 'sz399986'},
                '150206'  : { a : '150205', z : '160630', ab : 5, code : 'sz399973'},
                '150256'  : { a : '150255', z : '161121', ab : 5, code : 'sz399986'},
                '150268'  : { a : '150267', z : '160517', ab : 5, code : 'sz399986'},
                '150300'  : { a : '150299', z : '160418', ab : 5, code : 'sz399986'},
                '150250'  : { a : '150249', z : '161723', ab : 5, code : 'sz399986'},
                '150228'  : { a : '150227', z : '160631', ab : 5, code : 'sz399986'},
                '150322'  : { a : '150321', z : '161032', ab : 5, code : 'sz399998'},
                '150278'  : { a : '150277', z : '160639', ab : 5, code : 'sz399807'},
                '150182'  : { a : '150181', z : '161024', ab : 5, code : 'sz399967'},
                '150222'  : { a : '150221', z : '164402', ab : 5, code : 'sz399959'},
                '150252'  : { a : '150251', z : '161724', ab : 5, code : 'sz399990'},
                '150174'  : { a : '150173', z : '165522', ab : 5, code : 'sh000998'},
                '150290'  : { a : '150289', z : '168204', ab : 5, code : 'sz399998'},
                '502038'  : { a : '502037', z : '502036', ab : 5, code : 'sz399805'},
                '150318'  : { a : '150317', z : '164907', ab : 5, code : 'sz399805'},
                '150282'  : { a : '150281', z : '160814', ab : 5, code : 'sz399934'},
                '150158'  : { a : '150157', z : '165521', ab : 5, code : 'sh000974'},
                '150330'  : { a : '150329', z : '167301', ab : 5, code : 'sz399809'},
                '150226'  : { a : '150225', z : '160516', ab : 5, code : 'sz399966'},
                '150344'  : { a : '150343', z : '161629', ab : 5, code : 'sz399975'},
                '502055'  : { a : '502054', z : '502053', ab : 5, code : 'sz399975'},
                '150172'  : { a : '150171', z : '163113', ab : 5, code : 'sz399707'},
                '502012'  : { a : '502011', z : '502010', ab : 5, code : 'sz399975'},
                '150236'  : { a : '150235', z : '160633', ab : 5, code : 'sz399975'}
              }
Index.getInitialProps = async function() {
  // const res = await fetch('http://fund.eastmoney.com/Data/Fund_JJJZ_Data.aspx?t=1&lx=9&letter=&gsid=0&text=&sort=zdf,desc&page=1,10000000&dt=1425897162484&atfc=')
  // const data = await res.text()
  const data = await getUser();

  const d = data.replace("var db=", "")

  let realStock = [];

  function strToJson(str){ 
    var json = (new Function("return " + str))(); 
    return json; 
  } 
  
  const mujiDic = {}
  const ADic = {}
  const zhishuDic = {}

  for (let code in codes) {
    mujiDic[codes[code].z] = code;
    ADic[codes[code].a] = code;
    if (zhishuDic[codes[code].code] === undefined) {
      zhishuDic[codes[code].code] = [];
    }
    zhishuDic[codes[code].code].push(code);
    realStock.push(parseInt(code) > 200000 ? 'sh' + code : 'sz' + code);
    realStock.push(parseInt(codes[code].a) > 200000 ? 'sh' + codes[code].a : 'sz' + codes[code].a);
    realStock.push(codes[code].code);
  }

  const c = strToJson(d);
  const ret = {}
  ret[0] = ({id:"代码", name:"名称", currentPrice:"现价", buy:"买一", sell:"卖一", changeAmount:"成交金额", upperPercent:"涨幅", AcurrentPrice:"A类现价", ABuy:"A类买一", ASell:"A类卖一", AChangeAmount:"A交易额", AUpperPercent:"A类涨幅",  culPrice:"母鸡估值",yesterdayPrice:"昨天净值",zhishuUpperPrice:"指数涨幅", zheyiPrice:"折溢价",abPercent:"ab份额比"})
  c['datas'].map((show) => {
    if (show[0] in codes) {
      const dic = {};
      dic.id = show[0];   
      ret[show[0]] = dic 
    }
  });

  c['datas'].map((show) => {
    if (show[0] in mujiDic) {
      let yes = show[5];
      if (show[5] === "") {
        if (global && global.stock) {
          yes = global.stock[show[0]]
        }
      } else {
        if (global) {
          if (global.stock === undefined) {
            global.stock = {}
          }
          global.stock[show[0]] = yes;
        }
      }
      ret[mujiDic[show[0]]].yesterdayPrice = yes;
      ret[mujiDic[show[0]]].name = show[1];
    }
  });


 

  const stockPrice = await fetch("http://hq.sinajs.cn/list=" + realStock.join(","))
  const priceRes = await stockPrice.text();


  // console.log('sina -->', priceRes);

  for (let code in codes) {
    let key = parseInt(code) > 200000 ? 'sh' + code : 'sz' + code;
    let regex = new RegExp(key + "=\"(.*?)\";");
    let match = regex.exec(priceRes);
    let stockInfoArray = match[1].split(",")
    let yesterday = stockInfoArray[2];
    ret[code].currentPrice = stockInfoArray[3] < 0.00001 ? stockInfoArray[2] : stockInfoArray[3];
    ret[code].buy = stockInfoArray[11]
    ret[code].sell = stockInfoArray[21]
    ret[code].changeAmount = parseFloat(parseInt(stockInfoArray[9] / 100) * 100 / 10000)
    ret[code].upperPercent = parseInt((ret[code].currentPrice - yesterday)/yesterday  * 10000) / 100 
    ret[code].abPercent = codes[code].ab + ":" + (10 - codes[code].ab )

  }

  for (let code in ADic) {
    let key = parseInt(code) > 200000 ? 'sh' + code : 'sz' + code;
    let regex = new RegExp(key + "=\"(.*?)\";");
    let match = regex.exec(priceRes);
    let stockInfoArray = match[1].split(",");

    ret[ADic[code]].AcurrentPrice = stockInfoArray[3] < 0.00001 ? stockInfoArray[2] : stockInfoArray[3];
    ret[ADic[code]].ABuy = stockInfoArray[11]
    ret[ADic[code]].ASell = stockInfoArray[21]
    ret[ADic[code]].AChangeAmount = parseFloat(parseInt(stockInfoArray[9] / 100) * 100 / 10000)
    ret[ADic[code]].AUpperPercent = parseInt((stockInfoArray[3]- stockInfoArray[2])/stockInfoArray[3] * 10000) / 100 
  }

  for (let code in zhishuDic) {
    let regex = new RegExp(code + "=\"(.*?)\";");
    let match = regex.exec(priceRes);
    let stockInfoArray = match[1].split(",");

    zhishuDic[code].map( bCode => {
      ret[bCode].zhishuUpperPrice = parseInt((stockInfoArray[3]- stockInfoArray[2])/stockInfoArray[3] * 10000) / 100
      let jingzhi = ret[bCode].yesterdayPrice * (stockInfoArray[3] / stockInfoArray[2] * 0.995);
      let price = (ret[bCode].AcurrentPrice * codes[bCode].ab + ret[bCode].currentPrice * (10 - codes[bCode].ab)) / 10
      ret[bCode].zheyiPrice = parseInt((price - jingzhi)/ jingzhi * 10000) / 100
      ret[bCode].culPrice = jingzhi;
      console.log('昨日', ret[bCode].yesterdayPrice)
      console.log('指数今日', stockInfoArray[3])
      console.log('指数昨日', stockInfoArray[2])
      console.log('a类', ret[bCode].AcurrentPrice )
      console.log('b类', ret[bCode].currentPrice )
      console.log('比例', codes[bCode].ab )
      console.log('代码', bCode)
      
    });


  }

  let stocks = []
  for(let code in ret) {
    stocks.push(ret[code])
  }



  function _strMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }

  // stocks = stocks.sort((x,y) => x.zheyiPrice-y.zheyiPrice);
  stocks = stocks.filter(x => {
    if (typeof(x.changeAmount) !== "number") return true;
    if (x.changeAmount > 10) return true;
    return false;
  }).sort((x,y) => y.zheyiPrice-x.zheyiPrice);
  return {
    shows: stocks,
    // group:_strMapToObj(group), 
    realStock:realStock,
    param:priceRes
  }
}
