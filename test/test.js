const axios = require('axios')




// let aaa = async function() {
  //   const data = [["150270","招商中证白酒指数分级B","ZSZZBJZSFJB","1.1333","2.0866","1.0906","2.0439","0.0427","3.92","1.1630","-2.62","","0","1","","","","","",""],["150300","华安中证银行指数分级B","HAZZYHZSFJB","0.7090","0.7090","0.6836","0.6836","0.0254","3.72","0.7320","-3.24","","0","2","","","","","",""],["150292","中融中证银行指数分级B","ZRZZYHZSFJB","0.7410","0.7410","0.7160","0.7160","0.0250","3.49","0.7520","-1.48","","0","3","","","","","",""],["150228","鹏华银行分级B","PHYHFJB","0.8650","0.8650","0.8370","0.8370","0.0280","3.35","0.9350","-8.09","","0","4","","","","","",""],["150242","富国中证银行指数分级B","FGZZYHZSFJB","1.0730","1.0730","1.0390","1.0390","0.0340","3.27","1.1060","-3.08","","0","5","","","","","",""],["150256","易方达银行分级B","YFDYHFJB","0.9082","","0.8795","","0.0287","3.26","0.9590","-5.59","","0","6","","","","","",""],["150268","博时中证银行指数分级B","BSZZYHZSFJB","1.01","1.01","0.9798","0.9798","0.0302","3.08","1.03","-1.98","","0","7","","","","","",""],["150250","招商中证银行指数分级B","ZSZZYHZSFJB","1.0229","1.0229","0.9926","0.9926","0.0303","3.05","1.0010","2.14","","0","8","","","","","",""],
  //             ["150230","鹏华酒分级B","PHJFJB","1.5690","1.3910","1.5250","1.3780","0.0440","2.89","1.6780","-6.95","","0","9","","","","","",""],["150336","融通军工分级B","RTJGFJB","0.6770","0.1780","0.6590","0.1730","0.0180","2.73","0.6970","-2.95","","0","10","","","","","",""],["150208","招商沪深300地产等权重分级B","ZSHS300DCDQZFJB","1.3601","1.3295","1.3272","1.3220","0.0329","2.48","1.3150","3.32","","0","11","","","","","",""],["150193","鹏华地产分级B","PHDCFJB","1.0010","2.2970","0.9790","2.2920","0.0220","2.25","1.0210","-2.00","","0","12","","","","","",""],
  //             ["150193","鹏华地产分级B","PHDCFJB","1.0010","2.2970","0.9790","2.2920","0.0220","2.25","1.0210","-2.00","","0","12","","","","","",""],["150187","申万菱信中证军工指数分级B","SWLXZZJGZSFJB","1.0596","","1.0378","","0.0218","2.10","1.0810","-2.02","","0","13","","","","","",""],["161725","招商中证白酒指数分级","ZSZZBJZSFJ","1.0711","1.63","1.0497","1.6086","0.0214","2.04","","","1","0","14","","1","0.10%","0.10%","1","1.00%"],["150199","国泰国证食品饮料行业指数B","GTGZSPYLHYZSB","1.4678","2.5767","1.4385","2.5474","0.0293","2.04","1.4650","0.19","","0","15","","","","","",""],["150182","富国中证军工指数分级B","FGZZJGZSFJB","1.3110","2.1540","1.2850","2.1530","0.0260","2.02","1.3840","-5.57","","0","16","","","","","",""],["150206","鹏华中证国防指数分级B","PHZZGFZSFJB","0.5270","1.1640","0.5170","1.1640","0.01","1.93","0.5830","-10.63","","0","17","","","","","",""],["502005","易方达军工分级B","YFDJGFJB","1.4044","","1.3786","","0.0258","1.87","1.4740","-4.96","","0","18","","","","","",""],["160632","鹏华酒分级","PHJFJ","1.2920","1.3860","1.27","1.3710","0.0220","1.73","","","1","0","19","","1","0.12%","0.12%","1","1.20%"],
  //             ["150118","国泰国证房地产行业指数分级B","GTGZFDCHYZSFJB","1.0348","2.3272","1.0179","2.3103","0.0169","1.66","1.1190","-8.14","","0","20","","","","","",""],["161029","富国中证银行指数分级","FGZZYHZSFJ","1.0410","1.1280","1.0240","1.1110","0.0170","1.66","","","1","0","21","","1","0.12%","0.12%","1","1.20%"],["150282","长盛中证金融地产指数分级B","CSZZJRDCZSFJB","0.6240","","0.6140","","0.01","1.63","0.6160","1.28","","0","22","","","","","",""],["150222","前海开源中航军工B","QHKYZHJGB","1.0040","0.1730","0.9880","0.1710","0.0160","1.62","0.9720","3.19","","0","23","","","","","",""],["160517","博时中证银行指数分级","BSZZYHZSFJ","1.0109","1.1115","0.9957","1.0948","0.0152","1.53","","","1","0","24","","1","0.10%","0.10%","1","1.00%"],
  //             ["161723","招商中证银行指数分级","ZSZZYHZSFJ","1.0159","1.0987","1.0007","1.0835","0.0152","1.52","","","1","0","25","","1","0.10%","0.10%","1","1.00%"],["160631","鹏华银行分级","PHYHFJ","0.94","1.0220","0.9260","1.0080","0.0140","1.51","","","1","0","26","","1","0.12%","0.12%","1","1.20%"],["160418","华安中证银行指数分级","HAZZYHZSFJ","0.8601","0.9590","0.8473","0.9462","0.0128","1.51","","","1","0","27","","1","0.12%","0.12%","1","1.20%"],["168205","中融中证银行指数分级","ZRZZYHZSFJ","0.8760","0.9750","0.8630","0.9620","0.0130","1.51","","","1","0","28","","0","0.00%","","",""],["161121","易方达银行分级","YFDYHFJ","0.9708","","0.9564","","0.0144","1.51","","","1","0","29","","1","0.10%","0.10%","1","1.00%"],["161721","招商沪深300地产等权重分级","ZSHS300DCDQZFJ","1.1845","1.3335","1.1680","1.3232","0.0165","1.41","","","1","0","30","","1","0.10%","0.10%","1","1.00%"],
  //             ["502050","易方达上证50指数分级B","YFDSZ50ZSFJB","0.7886","","0.7783","","0.0103","1.32","0.8180","-3.73","","0","31","","","","","",""],["160222","国泰国证食品饮料行业指数分级","GTGZSPYLHYZSFJ","1.2381","1.9143","1.2234","1.8996","0.0147","1.20","","","1","0","32","","0","0.00%","","",""],["502022","国金上证50分级B","GJSZ50FJB","0.8720","","0.8620","","0.01","1.16","0.8180","6.19","","0","33","","","","","",""],["150158","信诚中证800金融指数分级B","XCZZ800JRZSFJB","1.0480","2.1960","1.0360","2.1840","0.0120","1.16","1.11","-5.92","","0","34","","","","","",""],["161024","富国中证军工指数分级","FGZZJGZSFJ","1.16","1.5840","1.1470","1.5780","0.0130","1.13","","","1","0","35","","1","0.12%","0.12%","1","1.20%"],["160628","鹏华地产分级","PHDCFJ","1.0040","1.7260","0.9930","1.7190","0.0110","1.11","","","1","0","36","","1","0.12%","0.12%","1","1.20%"],["502003","易方达军工分级","YFDJGFJ","1.2103","","1.1973","","0.0130","1.09","1.2290","-1.55","1","0","37","","1","0.10%","0.10%","1","1.00%"],["161628","融通军工分级","RTJGFJ","0.8440","0.6150","0.8350","0.6090","0.0090","1.08","","","1","0","38","","1","0.12%","0.12%","1","1.20%"],["163115","申万菱信中证军工指数分级","SWLXZZJGZSFJ","1.0432","1.4075","1.0322","1.3965","0.0110","1.07","","","1","0","39","","1","0.10%","0.10%","1","1.00%"],
  //             ["502042","长盛上证50指数分级B","CSSZ50ZSFJB","1.2290","","1.2170","","0.0120","0.99","1.20","2.36","","0","40","","","","","",""],["160218","国泰国证房地产行业指数分级","GTGZFDCHYZSFJ","1.0216","1.8498","1.0131","1.8413","0.0085","0.84","","","1","0","41","","1","0.10%","0.10%","1","1.00%"],["164402","前海开源中航军工","QHKYZHJG","1.0070","0.7040","0.9990","0.70","0.0080","0.80","","","1","0","42","","1","0.12%","0.12%","1","1.20%"],["160630","鹏华国防","PHGF","0.7690","1.1210","0.7640","1.1190","0.0050","0.65","","","1","0","43","","1","0.12%","0.12%","1","1.20%"],["502040","长盛上证50指数分级","CSSZ50ZSFJ","1.1210","","1.1140","","0.0070","0.63","1.0960","2.23","1","0","44","","1","0.12%","0.12%","1","1.20%"],["160814","长盛中证金融地产指数分级","CSZZJRDCZSFJ","0.8180","","0.8130","","0.0050","0.62","","","1","0","45","","1","0.12%","0.12%","1","1.20%"],["165521","信诚中证800金融指数分级","XCZZ800JRZSFJ","1.0290","1.7330","1.0230","1.7270","0.0060","0.59","","","4","0","46","","1","0.12%","0.12%","1","1.20%"],["502048","易方达上证50指数分级","YFDSZ50ZSFJ","0.9194","","0.9142","","0.0052","0.57","0.9120","0.80","1","0","47","","1","0.12%","0.12%","1","1.20%"],
  //             ["150330","方正富邦保险主题指数分级B","FZFBBXZTZSFJB","1.4830","1.4830","1.4750","1.4750","0.0080","0.54","1.54","-3.84","","0","48","","","","","",""],["502020","国金上证50分级","GJSZ50FJ","0.9410","","0.9360","","0.0050","0.53","0.9270","1.49","1","0","49","","1","0.10%","0.10%","1","1.00%"],["150260","易方达重组分级B","YFDCZFJB","0.8278","","0.8239","","0.0039","0.47","0.9380","-13.31","","0","50","","","","","",""],["150136","国富中证100指数增强分级B","GFZZ100ZSZQFJB","0.9260","0.9260","0.9220","0.9220","0.0040","0.43","0.93","-0.43","","0","51","","","","","",""],["150050","南方消费进取","NFXFJQ","0.5430","2.1510","0.5410","2.1430","0.0020","0.37","0.61","-12.34","","0","52","","","","","",""],["167301","方正富邦保险主题指数分级","FZFBBXZTZSFJ","1.2460","1.3330","1.2420","1.3290","0.0040","0.32","","","1","0","53","","1","0.08%","0.08%","1","0.80%"],["150013","国联安双禧中证100B","GLASXZZ100B","1.3820","1.19","1.3780","1.1870","0.0040","0.29","1.3980","-1.16","","0","54","","","","","",""],["150278","鹏华高铁分级B","PHGTFJB","0.8360","0.0380","0.8340","0.0380","0.0020","0.24","0.9250","-10.65","","0","55","","","","","",""],["162509","国联安双禧中证100","GLASXZZ100","1.2870","1.28","1.2840","1.2780","0.0030","0.23","","","1","0","56","","1","0.12%","0.12%","1","1.20%"],
  //             ["161123","易方达重组分级","YFDCZFJ","0.9290","","0.9270","","0.0020","0.22","","","1","0","57","","1","0.10%","0.10%","1","1.00%"],["164508","国富中证100指数增强分级","GFZZ100ZSZQFJ","0.9670","1.0650","0.9650","1.0630","0.0020","0.21","","","1","0","58","","1","0.12%","0.12%","1","1.20%"],["150294","南方中证高铁产业指数分级B","NFZZGTCYZSFJB","0.6072","","0.6064","","0.0008","0.13","0.6030","0.69","","0","59","","","","","",""],["160127","南方新兴消费增长分级","NFXXXFZZFJ","0.7940","2.0350","0.7930","2.0320","0.0010","0.13","","","1","0","60","","1","0.15%","0.15%","1","1.50%"],["150326","工银中证高铁产业指数分级B","GYZZGTCYZSFJB","1.3117","0.0654","1.3102","0.0653","0.0015","0.11","1.3010","0.82","","0","61","","","","","",""],["160639","鹏华高铁分级","PHGTFJ","0.9290","0.3860","0.9280","0.3860","0.0010","0.11","","","1","0","62","","1","0.12%","0.12%","1","1.20%"],["150190","新华中证环保产业指数分级A","XHZZHBCYZSFJA","1.0090","1.29","1.0080","1.2890","0.0010","0.10","0.9790","2.97","","0","63","","","","","",""],["150047","银华消费A","YHXFA","1.0090","1.4760","1.0080","1.4750","0.0010","0.10","0.9810","2.78","","0","64","","","","","",""],["150219","前海开源健康分级A","QHKYJKFJA","1.01","1.24","1.0090","1.2390","0.0010","0.10","1.02","-0.99","","0","65","","","","","",""],
  //             ["150012","国联安双禧中证100A","GLASXZZ100A","1.1440","1.4150","1.1430","1.4140","0.0010","0.09","1.1070","3.23","","0","66","","","","","",""],["164820","工银中证高铁产业指数分级","GYZZGTCYZSFJ","1.1601","0.4992","1.1592","0.4989","0.0009","0.08","","","1","0","67","","1","0.10%","0.10%","1","1.00%"],["160135","南方中证高铁产业指数分级","NFZZGTCYZSFJ","0.8101","0.5077","0.8096","0.5074","0.0005","0.06","","","1","0","68","","1","0.06%","0.06%","1","0.60%"],["150175","银华恒生国企指数分级A","YHHSGQZSFJA","1.0120","","1.0118","","0.0002","0.02","","","","0","69","","","","","",""],["150295","南方中证国有企业改革分级A","NFZZGYQYGGFJA","1.0118","","1.0116","","0.0002","0.02","0.9770","3.44","","0","70","","","","","",""],["150225","博时中证800证券保险分级A","BSZZ800ZQBXFJA","1.0118","1.2068","1.0116","1.2066","0.0002","0.02","","","","0","71","","","","","",""],["150267","博时中证银行指数分级A","BSZZYHZSFJA","1.0118","1.2042","1.0116","1.2040","0.0002","0.02","0.9820","2.95","","0","72","","","","","",""],["150303","华安创业板50指数分级A","HACYB50ZSFJA","1.0112","1.2269","1.0110","1.2267","0.0002","0.02","0.9850","2.59","","0","73","","","","","",""],["150301","华安中证全指证券公司分级A","HAZZQZZQGSFJA","1.0112","1.2270","1.0110","1.2268","0.0002","0.02","0.9840","2.69","","0","74","","","","","",""],
  //             ["150299","华安中证银行指数分级A","HAZZYHZSFJA","1.0112","1.2089","1.0110","1.2087","0.0002","0.02","0.9860","2.49","","0","75","","","","","",""],["150130","国泰国证医药卫生指数分级A","GTGZYYWSHYZSFJA","1.0104","1.3337","1.0102","1.3335","0.0002","0.02","0.9840","2.61","","0","76","","","","","",""],["150145","招商沪深300高贝塔分级A","ZSHS300GBTFJA","1.0099","1.3122","1.0097","1.3120","0.0002","0.02","1.0050","0.49","","0","77","","","","","",""],["502001","西部利得中证500等权重分级A","XBLDZZ500DQZFJA","1.0078","1.2008","1.0076","1.2006","0.0002","0.02","0.9770","3.06","","0","78","","","","","",""],["150053","泰达稳健","TDWJ","1.0078","1.4208","1.0076","1.4206","0.0002","0.02","0.9710","3.65","","0","79","","","","","",""],["150055","工银中证500分级A","GYZZ500FJA","1.0078","1.4144","1.0076","1.4142","0.0002","0.02","0.9780","2.96","","0","80","","","","","",""],["502004","易方达军工分级A","YFDJGFJA","1.0162","","1.0160","","0.0002","0.02","0.9720","4.35","","0","81","","","","","",""],["150293","南方中证高铁产业指数分级A","NFZZGTCYZSFJA","1.0130","","1.0128","","0.0002","0.02","0.9880","2.47","","0","82","","","","","",""],["150186","申万菱信中证军工指数分级A","SWLXZZJGZSFJA","1.0268","","1.0266","","0.0002","0.02","0.9810","4.46","","0","83","","","","","",""],
  //             ["150283","申万菱信申万医药生物分级A","SWLXSWYYSWFJA","1.0311","","1.0309","","0.0002","0.02","0.9890","4.08","","0","84","","","","","",""],["150106","易方达中小板指数分级A","YFDZXBZSFJA","1.0303","","1.0301","","0.0002","0.02","1.03","0.03","","0","85","","","","","",""],["150032","嘉实多利分级债券优先","JSDLFJZQYX","1.0462","1.3972","1.0460","1.3970","0.0002","0.02","1.0280","1.74","","0","86","","","","","",""],["000317","中海惠利分级债券A","ZHHLFJZQA","1.0030","1.2121","1.0029","1.2120","0.0001","0.01","","","6","0","87","","0","0.00%","0.00%","0","0.00%"],["000429","易方达聚盈分级债券发起式A","YFDJYFJZQFQSA","1.0014","","1.0013","","0.0001","0.01","","","6","0","88","","0","0.00%","","",""],["000675","中海惠祥分级债券A","ZHHXFJZQA","1.0117","1.1738","1.0116","1.1737","0.0001","0.01","","","6","0","89","","0","0.00%","","",""],["150263","华宝中证1000指数分级A","HBZZ1000ZSFJA","1.0113","1.2084","1.0112","1.2083","0.0001","0.01","0.9950","1.61","","0","90","","","","","",""],["150261","华宝中证医疗指数分级A","HBZZYLZSFJA","1.0113","1.2108","1.0112","1.2107","0.0001","0.01","0.9860","2.50","","0","91","","","","","",""],["502037","大成中证互联网金融指数分级A","DCZZHLWJRZSFJA","1.0108","","1.0107","","0.0001","0.01","0.9830","2.75","","0","92","","","","","",""],
  //             ["502057","广发医疗指数分级A","GFYLZSFJA","1.0108","1.2003","1.0107","1.2002","0.0001","0.01","1.0110","-0.02","","0","93","","","","","",""],["150123","建信央视50A","JXYS50A","1.0095","","1.0094","","0.0001","0.01","1.01","-0.05","","0","94","","","","","",""],["150271","招商国证生物医药指数分级A","ZSGZSWYYZSFJA","1.0089","1.1735","1.0088","1.1734","0.0001","0.01","0.9570","5.14","","0","95","","","","","",""],["150269","招商中证白酒指数分级A","ZSZZBJZSFJA","1.0089","1.1735","1.0088","1.1734","0.0001","0.01","0.9650","4.35","","0","96","","","","","",""],["150251","招商中证煤炭等权指数分级A","ZSZZMTDQZSFJA","1.0089","1.1745","1.0088","1.1744","0.0001","0.01","0.9650","4.35","","0","97","","","","","",""],["150207","招商沪深300地产等权重分级A","ZSHS300DCDQZFJA","1.0089","1.2048","1.0088","1.2047","0.0001","0.01","1.01","-0.11","","0","98","","","","","",""],["150200","招商中证全指证券公司分级A","ZSZZQZZQGSFJA","1.0089","1.2097","1.0088","1.2096","0.0001","0.01","0.9670","4.15","","0","99","","","","","",""],["150249","招商中证银行指数分级A","ZSZZYHZSFJA","1.0089","1.1745","1.0088","1.1744","0.0001","0.01","0.97","3.86","","0","100","","","","","",""],["150198","国泰国证食品饮料行业指数A","GTGZSPYLHYZSA","1.0084","1.2518","1.0083","1.2517","0.0001","0.01","1.0250","-1.65","","0","101","","","","","",""],
  //             ["150247","工银中证传媒指数分级A","GYZZCMZSFJA","1.0084","1.2123","1.0083","1.2122","0.0001","0.01","0.9810","2.72","","0","102","","","","","",""],["150117","国泰国证房地产行业指数分级A","GTGZFDCHYZSFJA","1.0084","1.3724","1.0083","1.3723","0.0001","0.01","0.9830","2.52","","0","103","","","","","",""],["150323","工银中证环保产业指数分级A","GYZZHBCYZSFJA","1.0084","1.2026","1.0083","1.2025","0.0001","0.01","0.9810","2.72","","0","104","","","","","",""],["150196","国泰国证有色金属行业分级A","GTGZYSJSHYFJA","1.0084","1.2208","1.0083","1.2207","0.0001","0.01","0.9820","2.62","","0","105","","","","","",""],["150327","工银中证新能源指数分级A","GYZZXNYZSFJA","1.0084","1.2027","1.0083","1.2026","0.0001","0.01","0.9810","2.72","","0","106","","","1.00%","","",""],["150325","工银中证高铁产业指数分级A","GYZZGTCYZSFJA","1.0084","1.2004","1.0083","1.2003","0.0001","0.01","0.9740","3.41","","0","107","","","","","",""],["150083","广发深证100指数分级A","GFSZ100ZSFJA","1.0079","1.3961","1.0078","1.3960","0.0001","0.01","1.0580","-4.97","","0","108","","","","","",""],["150104","华安沪深300指数分级A","HAHS300ZSFJA","1.0079","1.3869","1.0078","1.3868","0.0001","0.01","0.9670","4.06","","0","109","","","","","",""],["150215","国泰深证TMT50指数分级A","GTSZTMT50ZSFJA","1.0069","1.1825","1.0068","1.1824","0.0001","0.01","0.9670","3.96","","0","110","","","","","",""],
  //             ["150184","申万中证环保产业指数分级A","SWZZHBCYZSFJA","1.0213","","1.0212","","0.0001","0.01","0.98","4.04","","0","111","","","","","",""],["150171","申万菱信申万证券分级A","SWLXSWZQFJA","1.0165","","1.0164","","0.0001","0.01","0.9740","4.18","","0","112","","","","","",""],["150231","申万菱信申万电子分级A","SWLXSWDZFJA","1.0355","","1.0354","","0.0001","0.01","0.9920","4.20","","0","113","","","","","",""],["150255","易方达银行分级A","YFDYHFJA","1.0334","","1.0333","","0.0001","0.01","0.9950","3.72","","0","114","","","","","",""],["150257","易方达生物分级A","YFDSWFJA","1.0334","","1.0333","","0.0001","0.01","0.9910","4.10","","0","115","","","","","",""],["502007","易方达国企改革指数分级A","YFDGQGGZSFJA","1.0318","","1.0317","","0.0001","0.01","0.9880","4.25","","0","116","","","","","",""],["150297","南方中证互联网指数分级A","NFZZHLWZSFJA","1.0307","","1.0306","","0.0001","0.01","1.0010","2.88","","0","117","","","","","",""],["150259","易方达重组分级A","YFDCZFJA","1.0302","","1.0301","","0.0001","0.01","0.9890","4.00","","0","118","","","","","",""],["502011","易方达证券公司分级A","YFDZQGSFJA","1.0291","","1.0290","","0.0001","0.01","0.9870","4.09","","0","119","","","","","",""],["502049","易方达上证50指数分级A","YFDSZ50ZSFJA","1.0502","","1.0501","","0.0001","0.01","1.0070","4.11","","0","120","","","","","",""],
  //             ["150049","南方消费收益","NFXFSY","1.0450","1.43","1.0450","1.43","0","0.00","1.0050","3.83","","0","121","","","","","",""],["150273","鹏华一带一路分级A","PHYDYLFJA","1.03","1.1770","1.03","1.1770","0","0.00","0.9860","4.27","","0","122","","","","","",""],["150235","鹏华证券分级A","PHZQFJA","1.0260","1.1770","1.0260","1.1770","0","0.00","0.9810","4.39","","0","123","","","","","",""],["150279","鹏华新能源分级A","PHXNYFJA","1.0250","1.1750","1.0250","1.1750","0","0.00","0.9020","12.00","","0","124","","","","","",""],["502024","鹏华钢铁分级A","PHGTFJA","1.0220","1.1650","1.0220","1.1650","0","0.00","0.9770","4.40","","0","125","","","","","",""],["150277","鹏华高铁分级A","PHGTFJA","1.0220","1.1760","1.0220","1.1760","0","0.00","0.9770","4.40","","0","126","","","","","",""],["150229","鹏华酒分级A","PHJFJA","1.0150","1.1790","1.0150","1.1780","0","0.00","0.9710","4.33","","0","127","","","","","",""],["150227","鹏华银行分级A","PHYHFJA","1.0150","1.18","1.0150","1.18","0","0.00","0.9730","4.14","","0","128","","","","","",""],["150237","鹏华环保分级A","PHHBFJA","1.0150","1.1710","1.0150","1.1710","0","0.00","0.9650","4.93","","0","129","","","","","",""],["150245","鹏华互联网分级A","PHHLWFJA","1.0150","1.1710","1.0150","1.1710","0","0.00","1.0350","-1.97","","0","130","","","","","",""],["150321","富国中证煤炭指数分级A","FGZZMTZSFJA","1.0150","1.2420","1.0150","1.2420","0","0.00","","","","0","131","","","","","",""],
  //             ["502014","长盛中证申万一带一路分级A","CSZZSWYDYLFJA","1.0120","","1.0120","","0","0.00","0.9750","3.66","","0","132","","","","","",""],["150281","长盛中证金融地产指数分级A","CSZZJRDCZSFJA","1.0120","","1.0120","","0","0.00","0.98","3.16","","0","133","","","","","",""],["150167","银华沪深300指数分级A","YHHS300ZSFJA","1.0120","","1.0120","","0","0.00","","","","0","134","","","","","",""],["502054","长盛中证证券公司分级A","CSZZZQGSFJA","1.0120","","1.0120","","0","0.00","0.9740","3.75","","0","135","","","","","",""],["150138","银华800A","YH800A","1.0120","","1.0120","","0","0.00","","","","0","136","","","","","",""],["502041","长盛上证50指数分级A","CSSZ50ZSFJA","1.0120","","1.0120","","0","0.00","1.0160","-0.40","","0","137","","","","","",""],["150203","鹏华传媒分级A ","PHCMFJA","1.0110","1.2030","1.0110","1.2030","0","0.00","0.9690","4.15","","0","138","","","","","",""],["150289","中融中证煤炭指数分级A","ZRZZMTZSFJA","1.0110","1.2060","1.0110","1.2060","0","0.00","0.9850","2.57","","0","139","","","","","",""],["150335","融通军工分级A","RTJGFJA","1.0110","1.2160","1.0110","1.2160","0","0.00","0.9880","2.27","","0","140","","","","","",""],["150143","银华中证转债指数增强分级A","YHZZZZZSZQFJA","1.0110","","1.0110","","0","0.00","0.9690","4.15","","0","141","","","","","",""],["150164","东吴转债A","DWZZA","1.0110","1.1889","1.0110","","0","0.00","","","","0","142","","","","","",""],
  //             ["150291","中融中证银行指数分级A","ZRZZYHZSFJA","1.0110","1.2090","1.0110","1.2090","0","0.00","0.9870","2.37","","0","143","","","","","",""],["150343","融通证券分级A","RTZQFJA","1.0110","1.2150","1.0110","1.2150","0","0.00","0.9820","2.87","","0","144","","","","","",""],["150287","中融国证钢铁行业指数分级A","ZRGZGTHYZSFJA","1.0110","1.2070","1.0110","1.2070","0","0.00","0.9840","2.67","","0","145","","","","","",""],["150243","鹏华创业板分级A","PHCYBFJA","1.0110","1.1710","1.0110","1.1710","0","0.00","0.9690","4.15","","0","146","","","","","",""],["150265","中融一带一路分级A","ZRYDYLFJA","1.0110","1.2130","1.0110","1.2130","0","0.00","0.9860","2.47","","0","147","","","","","",""],["150205","鹏华中证国防指数分级A","PHZZGFZSFJA","1.0110","1.2080","1.0110","1.2080","0","0.00","","","","0","148","","","","","",""],["150311","信诚中证智能家居指数分级A","XCZZZNJJZSFJA","1.01","","1.01","","0","0.00","0.9550","5.45","","0","149","","","","","",""],["150307","富国中证体育产业指数分级A","FGZZTYCYZSFJA","1.01","1.1670","1.01","1.1670","0","0.00","0.9660","4.36","","0","150","","","","","",""],["150211","富国中证新能源汽车指数分级A","FGZZXNYQCZSFJA","1.01","1.2030","1.01","1.2030","0","0.00","0.9750","3.47","","0","151","","","","","",""],["150309","信诚中证信息安全指数分级A","XCZZXXAQZSFJA","1.01","","1.01","","0","0.00","1.0630","-5.25","","0","152","","","","","",""],["150148","信诚中证800医药指数分级A","XCZZ800YYZSFJA","1.01","1.2930","1.01","1.2930","0","0.00","1.0450","-3.47","","0","153","","","","","",""],
  //             ["150157","信诚中证800金融指数分级A","XCZZ800JRZSFJA","1.01","1.2730","1.01","1.2730","0","0.00","0.97","3.96","","0","154","","","","","",""],["150221","前海开源中航军工A","QHKYZHJGA","1.01","1.2620","1.01","1.2620","0","0.00","1.0290","-1.88","","0","155","","","","","",""],["150315","富国中证工业4.0指数分级A","FGZZGY40ZSFJA","1.01","1.1690","1.01","1.1690","0","0.00","0.9560","5.35","","0","156","","","","","",""],["502021","国金上证50分级A","GJSZ50FJA","1.01","","1.01","","0","0.00","0.9770","3.27","","0","157","","","","","",""],["150150","信诚中证800有色指数分级A","XCZZ800YSZSFJA","1.01","1.29","1.01","1.29","0","0.00","0.9690","4.06","","0","158","","","","","",""],["150209","富国中证国企改革指数分级A","FGZZGQGGZSFJA","1.0090","1.2010","1.0090","1.2010","0","0.00","0.9670","4.16","","0","159","","","","","",""],["150194","富国中证移动互联网指数分级A","FGZZYDHLWZSFJA","1.0090","1.2180","1.0090","1.2180","0","0.00","0.9670","4.16","","0","160","","","","","",""],["150181","富国中证军工指数分级A","FGZZJGZSFJA","1.0090","1.2420","1.0090","1.2420","0","0.00","0.9660","4.26","","0","161","","","","","",""],["150051","信诚沪深300指数分级A","XCHS300ZSFJA","1.0090","1.3780","1.0090","1.3780","0","0.00","0.9660","4.26","","0","162","","","","","",""],["150241","富国中证银行指数分级A","FGZZYHZSFJA","1.0090","1.1780","1.0090","1.1780","0","0.00","0.9690","3.96","","0","163","","","","","",""],["150329","方正富邦保险主题指数分级A","FZFBBXZTZSFJA","1.0090","1.1710","1.0090","1.1710","0","0.00","0.9650","4.36","","0","164","","","","","",""],["150275","安信一带一路分级A","AXYDYLFJA","1.0090","1.1750","1.0090","1.1750","0","0.00","0.9650","4.36","","0","165","","","","","",""],["150305","国寿安保中证养老产业分级A","GSABZZYLCYFJA","1.0090","1.1810","1.0090","1.1810","0","0.00","0.9830","2.58","","0","166","","","","","",""],["150173","信诚中证TMT产业指数分级A","XCZZTMTCYZSFJA","1.0090","1.2050","1.0090","1.2050","0","0.00","0.9990","0.99","","0","167","","","","","",""],["150188","招商可转债分级债券A","ZSKZZFJZQA","1.0090","1.23","1.0090","1.23","0","0.00","0.9950","1.39","","0","168","","","","","",""],["150213","国投瑞银中证创业指数分级A","GTRYZZCYZSFJA","1.0080","1.2260","1.0080","1.2260","0","0.00","0.9740","3.37","","0","169","","","","","",""],
  //             ["150152","富国创业板指数分级A","FGCYBZSFJA","1.0080","1.3040","1.0080","1.3040","0","0.00","0.9840","2.38","6","0","170","","0","0.00%","0.00%","0","0.00%"],["150135","国富中证100指数增强分级A","GFZZ100ZSZQFJA","1.0080","1.2030","1.0080","1.2030","0","0.00","0.9920","1.59","","0","171","","","","","",""],["150036","建信稳健","JXWJ","1.0080","","1.0080","","0","0.00","0.9740","3.37","","0","172","","","","","",""],["150073","诺安稳健","NAWJ","1.0080","1.4020","1.0080","1.4020","0","0.00","0.9790","2.88","","0","173","","","","","",""],["150094","泰信基本面400A","TXJBM400A","1.0080","1.3750","1.0080","1.3750","0","0.00","0.9770","3.08","","0","174","","","","","",""],["150317","交银中证互联网金融指数分级A","JYZZHLWJRZSFJA","1.0080","1.2050","1.0080","1.2050","0","0.00","0.9510","5.65","","0","175","","","","","",""],["150030","银华中证等权90金利","YHZZDQ90JL","1.0080","1.4690","1.0080","1.4690","0","0.00","1.0380","-2.98","","0","176","","","","","",""],["150064","长盛同瑞200分级A","CSTR200FJA","1.0080","1.4250","1.0080","1.4250","0","0.00","0.9720","3.57","","0","177","","","","","",""],["150059","银华金瑞","YHJR","1.0080","1.4250","1.0080","1.4250","0","0.00","0.9790","2.88","","0","178","","","","","",""],["150177","鹏华证券保险分级A","PHZQBXFJA","1.0070","1.2390","1.0070","1.2390","0","0.00","0.9670","3.97","","0","179","","","","","",""],["150179","鹏华信息分级A","PHXXFJA","1.0070","1.2390","1.0070","1.2390","0","0.00","0.9630","4.37","","0","180","","","","","",""],["150018","银华稳进","YHWJ","1.0070","1.4770","1.0070","1.4770","0","0.00","0.9660","4.07","","0","181","","","","","",""],["150092","诺德深证300指数分级A","NDSZ300ZSFJA","1.0070","1.3590","1.0070","1.3590","0","0.00","0.97","3.67","","0","182","","","","","",""],["150169","汇添富恒生指数分级A","HTFHSZSFJA","1.0070","","1.0070","","0","0.00","0.9680","3.87","","0","183","","","","","",""],["150100","鹏华资源分级A","PHZYFJA","1.0070","1.3350","1.0070","1.3350","0","0.00","1.0150","-0.79","","0","184","","","","","",""],["150192","鹏华地产分级A","PHDCFJA","1.0070","1.2180","1.0070","1.2180","0","0.00","0.9190","8.74","","0","185","","","","","",""],["150217","交银国证新能源指数分级A","JYGZXNYZSFJA","1.0070","1.1940","1.0070","1.1930","0","0.00","0.9620","4.47","","0","186","","","","","",""],["150066","国泰互利分级债券A","GTHLFJZQA","1.0050","1.2690","1.0050","1.2690","0","0.00","0.96","4.48","","0","187","","","","","",""],["000092","信诚新双盈分级债券A","XCXSYFJZQA","1.0050","1.2310","1.0050","1.2310","0","0.00","","","6","0","188","","0","0.00%","0.00%","0","0.00%"],["150028","信诚中证500指数分级A","XCZZ500ZSFJA","1.0030","1.4560","1.0030","1.4560","0","0.00","0.9640","3.89","","0","189","","","","","",""],
  //             ["150223","富国中证全指证券公司分级A","FGZZQZZQGSFJA","1","1.2330","1","1.2330","0","0.00","1.0180","-1.80","","0","190","","","","","",""],["000091","信诚新双盈分级债券","XCXSYFJZQ","0.9970","","0.9970","","0","0.00","","","","0","191","","","","","",""],["000674","中海惠祥分级债券","ZHHXFJZQ","0.9838","1.0945","0.9838","1.0945","0","0.00","","","","0","192","","","","","",""],["000676","中海惠祥分级债券B","ZHHXFJZQB","0.9758","1.1798","0.9758","1.1798","0","0.00","","","6","0","193","","1","0.08%","0.08%","1","0.80%"],["161032","富国中证煤炭指数分级","FGZZMTZSFJ","0.9320","0.6080","0.9320","0.6080","0","0.00","","","1","0","194","","0","0.00%","","",""],["150322","富国中证煤炭指数分级B","FGZZMTZSFJB","0.8490","0.1430","0.8490","0.1430","0","0.00","0.8450","0.47","","0","195","","","","","",""],["165515","信诚沪深300指数分级","XCHS300ZSFJ","0.8390","1.5280","0.8390","1.5280","0","0.00","","","4","0","196","","1","0.12%","0.12%","1","1.20%"],["150052","信诚沪深300指数分级B","XCHS300ZSFJB","0.6690","1.4610","0.6690","1.4610","0","0.00","0.7470","-11.66","","0","197","","","","","",""],["000316","中海惠利分级债券","ZHHLFJZQ","0.9995","1.2703","0.9997","1.2705","-0.0002","-0.02","","","","0","198","","","","","",""],["000428","易方达聚盈分级债券发起式","YFDJYFJZQFQS","1.0153","","1.0156","","-0.0003","-0.03","","","","0","199","","","","","",""],["000318","中海惠利分级债券B","ZHHLFJZQB","0.9982","1.2572","0.9986","1.2576","-0.0004","-0.04","","","6","0","200","","1","0.08%","0.08%","1","0.80%"],["000430","易方达聚盈分级债券发起式B","YFDJYFJZQFQSB","1.0258","","1.0264","","-0.0006","-0.06","","","","0","201","","","0.00%","","",""],["150008","国投瑞银瑞和小康","GTRYRHXK","1.1820","1.2480","1.1830","1.2490","-0.0010","-0.08","1.2050","-1.95","","0","202","","","","","",""],["161207","国投瑞银沪深300","GTRYHS300","1.1560","1.2910","1.1570","1.2920","-0.0010","-0.09","","","1","0","203","","1","0.12%","0.12%","1","1.20%"],["150009","国投瑞银瑞和远见","GTRYRHYJ","1.13","1.3240","1.1310","1.3250","-0.0010","-0.09","1.1240","0.53","","0","204","","","","","",""],["165312","建信央视50","JXYS50","0.8401","2.0297","0.8409","2.0305","-0.0008","-0.10","","","1","0","205","","1","0.12%","0.12%","1","1.20%"],["160136","南方中证国有企业改革指数分级","NFZZGYQYGGZSFJ","0.8930","0.6582","0.8939","0.6589","-0.0009","-0.10","","","1","0","206","","1","0.06%","0.06%","1","0.60%"],["000093","信诚新双盈分级债券B","XCXSYFJZQB","0.9810","1.3920","0.9820","1.3930","-0.0010","-0.10","","","6","0","207","","1","0.06%","0.06%","1","0.60%"],["161816","银华中证等权90分级","YHZZDQ90FJ","0.98","1.1820","0.9810","1.1820","-0.0010","-0.10","","","1","0","208","","1","0.12%","0.12%","1","1.20%"],["502006","易方达国企改革指数分级","YFDGQGGZSFJ","0.9685","","0.9695","","-0.0010","-0.10","0.9580","1.08","1","0","209","","1","0.10%","0.10%","1","1.00%"],["161719","招商可转债分级债券","ZSKZZFJZQ","0.89","1.3730","0.8910","1.3740","-0.0010","-0.11","","","1","0","210","","1","0.07%","0.07%","1","0.70%"],["161811","银华沪深300指数分级","YHHS300ZSFJ","0.8610","","0.8620","","-0.0010","-0.12","","","1","0","211","","1","0.12%","0.12%","1","1.20%"],["161026","富国中证国企改革指数分级","FGZZGQGGZSFJ","0.8260","1.1740","0.8270","1.1740","-0.0010","-0.12","","","1","0","212","","1","0.12%","0.12%","1","1.20%"],["161724","招商中证煤炭等权指数分级","ZSZZMTDQZSFJ","0.9045","0.6543","0.9058","0.6551","-0.0013","-0.14","","","1","0","213","","1","0.10%","0.10%","1","1.00%"],["162413","华宝中证1000指数分级","HBZZ1000ZSFJ","0.7925","0.3326","0.7937","0.3330","-0.0012","-0.15","","","1","0","214","","1","0.12%","0.12%","1","1.20%"],["160417","华安沪深300指数分级","HAHS300ZSFJ","1.2864","1.4754","1.2885","1.4775","-0.0021","-0.16","","","1","0","215","","1","0.12%","0.12%","1","1.20%"],["160419","华安中证全指证券公司指数分级","HAZZQZZQGSZSFJ","1.0089","0.6447","1.0110","0.6460","-0.0021","-0.21","","","1","0","216","","1","0.12%","0.12%","1","1.20%"],["150031","银华中证等权90鑫利","YHZZDQ90XL","0.9520","0.5620","0.9540","0.5620","-0.0020","-0.21","0.9290","2.42","","0","217","","","","","",""],["168204","中融中证煤炭指数分级","ZRZZMTZSFJ","0.9440","0.68","0.9460","0.6810","-0.0020","-0.21","","","1","0","218","","0","0.00%","","",""],
  //             ["160718","嘉实多利分级债券","JSDLFJZQ","0.9875","1.3270","0.9896","1.3291","-0.0021","-0.21","","","1","0","219","","1","0.08%","0.08%","1","0.80%"],["162216","泰达宏利500指数分级","TDHL500ZSFJ","0.8639","2.0422","0.8658","2.0441","-0.0019","-0.22","","","1","0","220","","1","0.12%","0.12%","1","1.20%"],["502008","易方达国企改革指数分级B","YFDGQGGZSFJB","0.9052","","0.9073","","-0.0021","-0.23","0.96","-6.05","","0","221","","","","","",""],["164705","汇添富恒生指数分级","HTFHSZSFJ","1.1850","1.3080","1.1880","1.3110","-0.0030","-0.25","","","1","0","222","","1","0.12%","0.12%","1","1.20%"],["150124","建信央视50B","JXYS50B","0.6707","","0.6724","","-0.0017","-0.25","0.6750","-0.64","","0","223","","","","","",""],["150296","南方中证国有企业改革分级B","NFZZGYQYGGFJB","0.7742","","0.7762","","-0.0020","-0.26","0.7460","3.64","","0","224","","","","","",""],
  //             ["161030","富国中证体育产业指数分级","FGZZTYCYZSFJ","1.1030","0.48","1.1060","0.4810","-0.0030","-0.27","","","1","0","225","","1","0.12%","0.12%","1","1.20%"],["150105","华安沪深300指数分级B","HAHS300ZSFJB","1.5649","1.5649","1.5692","1.5692","-0.0043","-0.27","1.5390","1.66","","0","226","","","","","",""],["164818","工银中证传媒指数分级","GYZZCMZSFJ","0.9939","0.2822","0.9967","0.2829","-0.0028","-0.28","","","1","0","227","","0","0.00%","","",""],["150168","银华沪深300指数分级B","YHHS300ZSFJB","0.71","","0.7120","","-0.0020","-0.28","0.7810","-10.00","","0","228","","","","","",""],["168001","国寿安保中证养老产业指数分级","GSABZZYLCYZSFJ","1.0250","0.7040","1.0280","0.7060","-0.0030","-0.29","","","4","0","229","","1","0.10%","0.10%","1","1.00%"],["150210","富国中证国企改革指数分级B ","FGZZGQGGZSFJB","0.6430","1.3290","0.6450","1.33","-0.0020","-0.31","0.6730","-4.67","","0","230","","","","","",""]]
  
    
    
  // let realStock = [];

  // function strToJson(str){ 
  //   var json = (new Function("return " + str))(); 
  //   return json; 
  // } 
  
  // const c = strToJson(d);
  // const ret = []
  // data.map((show) => {
  //   const dic = {};
  //   dic.id = show[0];   
  //   dic.name = show[1];
  //   dic.yesterdayPrice = show[3];
  //   ret.push(dic);  
  // });
  // const group = new Map();
  // const stocks = new Map();
  // ret.map((item) => {
  //   let eachgroup = [];
  //   let key = "";
  //   let target = item.name.substring(0,item.name.length);

  //   ret.map((item)=> {
  //     stocks.set(item.id, item);
  //     let matched = true;
  //     target.split("").map((char) => {
  //       if (item.name.indexOf(char) === -1) {
  //         matched = false;
  //       }
  //     });
  //     if (matched) {
  //       eachgroup.push(item.id);
  //       eachgroup = eachgroup.sort((x,y) => x > y)
  //       key = eachgroup[0];
  //     }
  //   })
  //   if (eachgroup.length > 1) {
  //     group.set(key, {group:eachgroup, item: stocks.get(key)})
  //     eachgroup.map((each) => {
  //       realStock.push("sz" + each);
  //       realStock.push("sh" + each);
  //     })
  //   }
  // })


  // function _strMapToObj(strMap){
  //   let obj= Object.create(null);
  //   for (let[k,v] of strMap) {
  //     obj[k] = v;
  //   }
  //   return obj;
  // }

  // const stockPrice = await fetch("http://hq.sinajs.cn/list=" + realStock.join(","))
  // const priceRes = await stockPrice.text();

  // const priceRes = 'var hq_str_sz150019="银华锐进,0.794,0.796,0.795,0.809,0.784,0.794,0.795,210438793,167319867.872,723700,0.794,320500,0.793,362100,0.792,178700,0.791,578500,0.790,600064,0.795,1085337,0.796,306700,0.797,914800,0.798,1674200,0.799,2019-02-28,13:33:39,00";var hq_str_sh150018="";'
  //   key = "150019";
  //   var regex = new RegExp(key + "=\"(.*?)\";");
  //   var match = regex.exec(priceRes);
  //   console.log("value ", match[1]); // abc
  // }

  // const pp = aaa();
  // console.log("call", pp)

  let target = [ '150262', '162412', '150261' ]
  let sorted = target.sort((x,y) => x-y);
  console.log(sorted);

// var arr = new Array(6)
// arr[0] = "10"
// arr[1] = "5"
// arr[2] = "40"
// arr[3] = "25"
// arr[4] = "1000"
// arr[5] = "1"

// arr = [ '150262', '162412', '150261' ]
// function sortNumber(a,b)
// {
// return a - b
// }

// console.log(arr.sort(sortNumber))