// 国家列表动态添加国家
// 亚洲
var asia = [
    ['阿富汗', 'Afghanistan'],
    ['阿联酋', 'United' + '&nbsp;' + 'Arab' + '&nbsp;' + 'Emirates'],
    ['阿曼', 'Oman'],
    ['巴基斯坦', 'Pakistan'],
    ['巴勒斯坦', 'Palestine'],
    ['巴林', 'Bahrain'],
    ['不丹', 'Bhutan'],
    ['朝鲜', 'North' + '&nbsp;' + 'Korea'],
    ['东帝汶', 'East' + '&nbsp;' + 'Timor'],
    ['菲律宾', 'Philippines'],
    ['韩国', 'South' + '&nbsp;' + 'Korea'],
    ['哈萨克斯坦', ' Kazakhstan'],
    ['柬埔寨', 'Cambodia '],
    ['吉尔吉斯斯坦', 'Kyrgyzstan'],
    ['卡塔尔', 'Qatar'],
    ['科威特', 'Kuwait'],
    ['老挝', 'Laos'],
    ['黎巴嫩', 'Lebanon'],
    ['马尔代夫', 'Maldives'],
    ['马来西亚', ' Malaysia'],
    ['蒙古', 'Mongolia'],
    ['孟加拉国', 'Bangladesh'],
    ['缅甸 ', 'Myanmar'],
    ['尼泊尔', 'Nepal'],
    ['日本', 'Japan'],
    ['沙特阿拉伯', 'Saudi' + '&nbsp;' + 'Arabia'],
    ['斯里兰卡', 'Sri ' + '&nbsp;' + 'Lanka'],
    ['泰国 ', 'Thailand'],
    ['塔吉克斯坦', 'Tajikistan'],
    ['土库曼斯坦', 'Turkmenistan'],
    ['文莱 ', 'Brunei'],
    ['乌兹别克斯坦', 'Uzbekistan'],
    ['新加坡', 'Singapore'],
    ['叙利亚', 'Syria'],
    ['也门', 'Yemen'],
    ['伊拉克', 'Iraq'],
    ['伊朗', 'Iran'],
    ['印度,India'],
    ['印度尼西亚', 'Indonesia'],
    ['英属印度洋领地', ' British' + '&nbsp;' + 'Indian' + '&nbsp;' + 'Ocean' + '&nbsp;' + 'Territory'],
    ['以色列', 'Israel'],
    ['约旦', 'Jordan'],
    ['越南', 'Vietnam '],
    ['中国', 'China ']
];
// 遍历这个数组，把数据添加到ul国家列表中
for (var i = 0, len = asia.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + asia[i][0] + '</span><span class="english">' + asia[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(1)').append(newLi);
};
// 欧洲
var europe = [
    ['阿尔巴尼亚 ', ' Albania'],
    ['爱尔兰', 'Ireland'],
    ['爱沙尼亚', 'Estonia'],
    ['安道尔 ', 'Andorra'],
    ['奥地利', 'Austria'],
    ['阿塞拜疆', 'Azerbaijan'],
    [' 白俄罗斯', 'Belarus'],
    ['保加利亚', 'Bulgaria'],
    ['比利时', 'Belgium'],
    ['冰岛 ', 'Iceland'],
    ['波黑 ', 'Bosnia ' + '& ' + 'Herzegovina'],
    ['波兰', 'Poland'],
    ['丹麦', 'Denmark'],
    ['德国 ', 'Germany'],
    ['俄罗斯', 'Russia'],
    ['法国', 'France'],
    ['法罗群岛 ', 'Faroe ' + '&nbsp;' + 'Islands'],
    ['梵蒂冈 ', 'Vatican'],
    ['芬兰 ', 'Finland'],
    ['格陵兰 ', 'Greenland'],
    ['格鲁吉亚', 'Georgia'],
    ['黑山 ', 'Montenegro'],
    ['荷兰 ', 'Netherlands'],
    ['捷克 ', 'Czech ' + '&nbsp;' + 'Republic'],
    ['克罗地亚 ', 'Croatia'],
    ['科索沃', 'Kosovo'],
    ['拉脱维亚', 'Latvia'],
    ['列支敦士登', 'Liechtenstein'],
    ['立陶宛 ', 'Lithuania'],
    ['罗马尼亚 ', 'Romania'],
    ['卢森堡', 'Luxembourg'],
    ['马耳他', 'Malta'],
    ['马其顿', 'Macedonia'],
    ['摩尔多瓦', 'Moldova'],
    ['摩纳哥', 'Monaco'],
    ['挪威', 'Norway'],
    ['葡萄牙 ', 'Portugal'],
    ['瑞典', 'Sweden'],
    ['瑞士', 'Switzerland'],
    ['塞尔维亚', 'Serbia'],
    ['塞浦路斯', 'Cyprus'],
    ['圣马力诺', 'San ' + '&nbsp;' + 'Marino'],
    ['斯洛伐克', 'Slovakia'],
    ['斯洛文尼亚 ', 'Slovenia'],
    ['土耳其', 'Turkey'],
    ['乌克兰', ' Ukraine'],
    ['西班牙', 'Spain'],
    ['希腊', 'Greece'],
    ['西兰公国', 'Principality' + '&nbsp;' + +'of' + +'&nbsp;' + ' Sealand'],
    ['匈牙利', 'Hungary'],
    ['亚美尼亚', 'Armenia'],
    ['意大利', 'Italy'],
    ['英国 ', 'UK'],
    ['直布罗陀', 'Gibraltar']
];
// 遍历这个数组，把数据添加到ul国家列表中
for (var i = 0, len = europe.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + europe[i][0] + '</span><span class="english">' + europe[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(2)').append(newLi);
};

// 非洲部分
var Africa = [
    ['阿尔及利亚', 'Algeria'],
    ['埃及', 'Egypt'],
    ['埃塞俄比亚', 'Ethiopia'],
    ['安哥拉 ', 'Angola'],
    ['阿森松 ', 'Ascension'],
    ['贝宁', 'Benin'],
    ['北苏丹王国', 'Kingdom of North Sudan'],
    ['博茨瓦纳', ' Botswana'],
    ['布基纳法索', 'Burkina Faso'],
    ['布隆迪', 'Burundi'],
    ['赤道几内亚', 'Equatorial Guinea'],
    ['佛得角', 'Cape Verde'],
    ['多哥', 'Togo'],
    ['厄立特里亚', 'Eritrea'],
    ['冈比亚', 'Gambia'],
    ['刚果', 'Congo - Brazzaville'],
    ['刚果民主共和国', 'Congo - Kinshasa'],
    ['加纳', 'Ghana'],
    ['加蓬', 'Gabon'],
    ['吉布提', 'Djibouti'],
    ['津巴布韦', 'Zimbabwe'],
    ['几内亚', 'Guinea'],
    ['几内亚比绍 ', 'Guinea Bissau'],
    ['喀麦隆', 'Cameroon'],
    ['科摩罗', 'Comoros'],
    ['肯尼亚', 'Kenya'],
    ['科特迪瓦', 'Cote Divoire'],
    ['莱索托', 'Lesotho'],
    ['利比里亚', 'Liberia'],
    ['利比亚', 'Libya'],
    ['留尼汪', 'Reunion'],
    ['卢旺达', 'Rwanda'],
    ['马达加斯加 ', 'Madagascar'],
    ['马拉维', 'Malawi'],
    ['马里', 'Mali'],
    ['毛里求斯', 'Mauritius'],
    ['毛里塔尼亚', 'Mauritania'],
    ['马约特', 'Mayotte'],
    ['摩洛哥', 'Morocco'],
    ['莫桑比克', 'Mozambique'],
    ['纳米比亚', 'Namibia'],
    ['南非', 'South Africa'],
    ['南苏丹', 'South Sudan'],
    ['尼日尔', 'Niger'],
    ['尼日利亚', 'Nigeria'],
    ['塞拉利昂', 'Sierra Leone'],
    ['塞内加尔', 'Senegal'],
    ['塞舌尔 ', 'Seychelles'],
    ['圣多美和普林西比 ', 'Sao Tome & Principe'],
    ['圣赫勒拿', 'Saint Helena'],
    ['艾史瓦帝尼王国（ 斯威士兰）', 'Kingdom of eSwatini(Swaziland)'],
    ['苏丹 ', 'Sudan'],
    ['索马里', 'Somalia'],
    ['坦桑尼亚', 'Tanzania'],
    ['特里斯坦 - 达库尼亚群岛', 'Tristan da Cunha'],
    ['突尼斯', ' Tunisia'],
    ['乌干达 ', 'Uganda'],
    ['西撒哈拉', 'Western Sahara'],
    ['赞比亚', 'Zambia'],
    ['乍得', 'Chad'],
    ['中非共和国 ', 'Central African Republic']
];
// 遍历这个数组，把数据添加到ul国家列表中
for (var i = 0, len = Africa.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + Africa[i][0] + '</span><span class="english">' + Africa[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(3)').append(newLi);
};

// 北美
var North = [
    ['安圭拉', 'Anguilla'],
    ['安提瓜和巴布达', 'Antigua & Barbuda'],
    ['巴巴多斯 ', 'Barbados'],
    ['巴哈马', 'The Bahamas'],
    ['百慕大', 'Bermuda'],
    ['巴拿马', 'Panama'],
    ['波多黎各', 'Puerto Rico'],
    ['伯利兹', 'Belize'],
    ['阿鲁巴 ', 'Aruba'],
    ['波内赫', 'Bonaire'],
    ['多米尼加共和国 ', 'Dominican Republic'],
    ['多米尼克', 'Dominica'],
    ['法属圣马丁', 'Saint Martin'],
    ['格林纳达', 'Grenada'],
    ['哥斯达黎加', 'Costa Rica'],
    ['瓜德罗普', 'Guadeloupe'],
    ['古巴', 'Cuba'],
    ['海地', 'Haiti'],
    ['荷属圣马丁', 'Sint Maarten'],
    ['洪都拉斯', 'Honduras'],
    ['加拿大', 'Canada'],
    ['开曼群岛', 'Cayman Islands'],
    ['库拉索', 'Curacao'],
    ['马提尼克', 'Martinique'],
    ['美国', 'USA'],
    ['美属维尔京群岛', 'US Virgin Islands'],
    ['蒙塞拉特岛', 'Montserrat'],
    ['墨西哥', 'Mexico'],
    ['尼加拉瓜', 'Nicaragua'],
    ['萨巴岛', 'Saba'],
    ['萨尔瓦多', 'El Salvador'],
    ['圣巴泰勒米岛', 'Saint - Barthelemy'],
    ['圣基茨和尼维斯', 'Saint Kitts and Nevis'],
    ['圣卢西亚', ' St Lucia'],
    ['圣皮埃尔和密克隆群岛', ' Saint Pierre et Miquelon'],
    ['圣文森特和格林纳丁斯 ', 'St Vincent & The Grenadines'],
    ['圣尤斯特歇斯', 'Sint Eustatius'],
    ['特克斯和凯科斯群岛', 'Turks & Caicos Islands'],
    ['特立尼达和多巴哥', 'Trinidad & Tobago'],
    ['危地马拉', 'Guatemala'],
    ['牙买加', 'Jamaica'],
    ['英属维尔京群岛', 'British Virgin Islands']
];
for (var i = 0, len = North.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + North[i][0] + '</span><span class="english">' + North[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(4)').append(newLi);
};


// 南美部分
var southAmerica = [
    ['阿根廷', 'Argentina'],
    ['巴拉圭', 'Paraguay'],
    ['巴西', 'Brazil'],
    ['秘鲁', 'Peru'],
    ['玻利维亚', 'Bolivia'],
    ['厄瓜多尔', 'Ecuador'],
    ['法属圭亚那', ' French Guiana'],
    ['福克兰群岛（ 马尔维纳斯群岛）', 'Falkland Islands'],
    ['哥伦比亚', 'Colombia'],
    ['圭亚那', 'Guyana'],
    ['苏里南', 'Suriname'],
    ['委内瑞拉', 'Venezuela'],
    ['乌拉圭', ' Uruguay'],
    ['智利', 'Chile']
];
for (var i = 0, len = southAmerica.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + southAmerica[i][0] + '</span><span class="english">' + southAmerica[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(5)').append(newLi);
};
// 大洋洲
var oceanica = [
    ['艾普罗菲尔', ' Apolofirl'],
    ['澳大利亚', 'Australia'],
    ['巴布亚新几内亚', 'Papua New Guinea'],
    ['北马里亚纳群岛', 'Northern Mariana Islands'],
    ['法属波利尼西亚', 'French Polynesia'],
    ['斐济', 'Fiji'],
    ['关岛', 'Guam'],
    ['基里巴斯', 'Kiribati'],
    ['库克群岛', 'The Cook Islands'],
    ['马绍尔群岛', 'Marshall Islands'],
    ['美属萨摩亚', ' American Samoa'],
    ['密克罗尼西亚联邦', 'Federated States Of Micronesia'],
    ['瑙鲁', 'Nauru'],
    ['纽埃', 'Niue'],
    ['帕劳', 'Palau'],
    ['皮特凯恩群岛', ' Pitcairn Islands'],
    ['萨摩亚', 'Samoa'],
    ['所罗门群岛', 'Solomon Islands'],
    ['汤加', ' Tonga'],
    ['托克劳', 'Tokelau'],
    ['图瓦卢', 'Tuvalu'],
    ['瓦利斯群岛和富图纳群岛', ' Wallis & Futuna'],
    ['瓦努阿图', 'Vanuatu'],
    ['新喀里多尼亚', 'New Caledonia'],
    ['新西兰', 'New Zealand']
];
for (var i = 0, len = oceanica.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + oceanica[i][0] + '</span><span class="english">' + oceanica[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(6)').append(newLi);
};


// 南极洲部分
var Antarctica = [
    ['布韦岛', 'Bouvet Island'],
    ['法属南部领土', 'French Southern Territories'],
    ['南极', 'Antarctica'],
    ['南乔治亚岛和南桑威奇群岛', 'SGSSI'],
    ['太空', 'Outer Space']
];
for (var i = 0, len = Antarctica.length; i < len; i++) {
    var newLi = $(' <li><a href="javascript:"><span class="chinese">' + Antarctica[i][0] + '</span><span class="english">' + Antarctica[i][1] + '</span></a></li>')
    $('.city-order ul:nth-child(7)').append(newLi);
};