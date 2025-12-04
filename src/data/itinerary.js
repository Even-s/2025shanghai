export const itinerary = [
  {
    day: 1,
    date: "12/07",
    weekday: "Sun",
    city: "shanghai",
    titleKey: "day1_title_new",
    hotelKey: "day1_hotel_new",
    amapQuery: "上海新亞外灘郁錦香酒店",
    baiduQuery: "上海新亞外灘郁錦香酒店",
    gmapQuery: "SSAW Boutique Hotel Shanghai Bund",
    events: [
      { 
        time: "12:30", endTime: "13:30", type: "transport", titleKey: "day1_event_home_to_airport_title", 
        city: "taiwan",
        gmapQuery: "Kaohsiung International Airport",
        subEvents: [
          { time: "12:30", titleKey: "day1_sub_depart_home_title" },
          { time: "13:30", titleKey: "day1_sub_arrive_khh_title" }
        ]
      },
      { 
        time: "14:00", endTime: "16:00", type: "spot", titleKey: "day1_event_airport_lounge_title", descKey: "day1_event_airport_lounge_desc", 
        city: "taiwan",
        gmapQuery: "KHH South VIP Lounge",
        qrCodes: [{ path: "/qrcodes/dragonpass1207.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "16:35", endTime: "19:00", type: "flight", titleKey: "day1_event1_title_new",
        city: "shanghai",
        subEvents: [
          { time: "16:35", titleKey: "day1_sub_event1_title", descKey: "day1_sub_event1_desc" },
          { time: "19:00", titleKey: "day1_sub_event2_title" }
        ]
      },
      {
        time: "20:02", endTime: "20:45", type: "transport", titleKey: "day1_event2_combined_title",
        city: "shanghai",
        subEvents: [
          { 
            time: "20:02", titleKey: "day1_event2a_title", descKey: "day1_event2a_desc", amapQuery: "上海磁浮列车-浦东国际机场站", baiduQuery: "上海磁浮列车-浦东国际机场站",
            qrCodes: [{ path: "/qrcodes/Shanghai Maglev Train.jpg" }],
            recommendations: [
              { nameKey: "maglev_step1_name", descKey: "maglev_step1_desc" },
              { nameKey: "maglev_pickup2_name", descKey: "maglev_pickup2_desc", amapQuery: "上海浦东国际机场T1航站楼", baiduQuery: "上海浦东国际机场T1航站楼" },
              { nameKey: "maglev_usage_name", descKey: "maglev_usage_desc" }
            ], recommendationTitleKey: "maglev_info_title" },
          { time: "20:10", titleKey: "day1_event2b_title", descKey: "day1_event2b_desc", amapQuery: "磁浮龙阳路站", baiduQuery: "磁浮龙阳路站", appLink: "blacklane://" }
        ]
      },
      { time: "20:45", endTime: "21:15", type: "hotel", titleKey: "day1_event_checkin_title", city: "shanghai", descKey: "day1_event_checkin_desc", pdfLink: "/PDF/1207-1211 上海.pdf" },
      { time: "21:15", endTime: null, type: "food", titleKey: "day1_event3_title_new", city: "shanghai", descKey: "day1_event3_desc_new", recommendations: [
        { nameKey: "resto_xysj_name", descKey: "resto_xysj_desc", locationKey: "resto_xysj_location", amapQuery: "小杨生煎(吴江路店)", baiduQuery: "小杨生煎(吴江路店)" },
        { nameKey: "resto_anm_name", descKey: "resto_anm_desc", locationKey: "resto_anm_location", amapQuery: "阿娘面(思南路店)", baiduQuery: "阿娘面(思南路店)" },
        { nameKey: "resto_laohuzhao_name", descKey: "resto_laohuzhao_desc", locationKey: "resto_laohuzhao_location", amapQuery: "老虎灶餛飩", baiduQuery: "老虎灶餛飩" },
        { nameKey: "resto_dingtele_name", descKey: "resto_dingtele_desc", locationKey: "resto_dingtele_location", amapQuery: "顶特勒粥面馆(淮海中路店)", baiduQuery: "顶特勒粥面馆(淮海中路店)" },
        { nameKey: "resto_fuchun_name", descKey: "resto_fuchun_desc", locationKey: "resto_fuchun_location", amapQuery: "富春小笼(愚园路店)", baiduQuery: "富春小笼(愚园路店)" },
        { nameKey: "resto_erguang_name", descKey: "resto_erguang_desc", locationKey: "resto_erguang_location", amapQuery: "耳光馄饨(肇周路店)", baiduQuery: "耳光馄饨(肇周路店)" },
        { nameKey: "resto_honglin_name", descKey: "resto_honglin_desc", locationKey: "resto_honglin_location", amapQuery: "红临门", baiduQuery: "红临门" },
        { nameKey: "resto_haidilao_name", descKey: "resto_haidilao_desc", locationKey: "resto_haidilao_location", amapQuery: "海底捞火锅(上海广场店)", baiduQuery: "海底捞火锅(上海广场店)" },
        { nameKey: "resto_longmen_name", descKey: "resto_longmen_desc", locationKey: "resto_longmen_location", amapQuery: "龙门阵", baiduQuery: "龙门阵" },
        { nameKey: "resto_xiangmanlou_name", descKey: "resto_xiangmanlou_desc", locationKey: "resto_xiangmanlou_location", amapQuery: "祥满楼", baiduQuery: "祥满楼" },
        { nameKey: "resto_dahu_name", descKey: "resto_dahu_desc", locationKey: "resto_dahu_location", amapQuery: "大壶春(四川中路店)", baiduQuery: "大壶春(四川中路店)" },
        { nameKey: "resto_shukeman_name", descKey: "resto_shukeman_desc", locationKey: "resto_shukeman_location", amapQuery: "舒蔡记(云南中路店)", baiduQuery: "舒蔡记(云南中路店)" },
        { nameKey: "resto_wanghong_name", descKey: "resto_wanghong_desc", locationKey: "resto_wanghong_location", amapQuery: "网红油鸡饭", baiduQuery: "网红油鸡饭" },
        { nameKey: "resto_changjiao_name", descKey: "resto_changjiao_desc", locationKey: "resto_changjiao_location", amapQuery: "长脚汤面", baiduQuery: "长脚汤面" },
        { nameKey: "resto_barbarian_name", descKey: "resto_barbarian_desc", locationKey: "resto_barbarian_location", amapQuery: "Barbarian", baiduQuery: "Barbarian" },
        { nameKey: "resto_shaguowang_name", descKey: "resto_shaguowang_desc", locationKey: "resto_shaguowang_location", amapQuery: "小黑蚝情·潮汕砂锅粥(定西路店)", baiduQuery: "小黑蚝情·潮汕砂锅粥(定西路店)" },
        { nameKey: "resto_fengsheng_name", descKey: "resto_fengsheng_desc", locationKey: "resto_fengsheng_location", amapQuery: "丰盛里", baiduQuery: "丰盛里" },
        { nameKey: "resto_xiaoman_name", descKey: "resto_xiaoman_desc", locationKey: "resto_xiaoman_location", amapQuery: "小满手工粉(日月光中心店)", baiduQuery: "小满手工粉(日月光中心店)" },
        { nameKey: "resto_laowang_name", descKey: "resto_laowang_desc", locationKey: "resto_laowang_location", amapQuery: "捞王锅物料理(人民广场店)", baiduQuery: "捞王锅物料理(人民广场店)" },
        { nameKey: "resto_xibei_name", descKey: "resto_xibei_desc", locationKey: "resto_xibei_location", amapQuery: "西贝莜面村(人民广场店)", baiduQuery: "西贝莜面村(人民广场店)" }
      ]},
    ]
  },
  {
    day: 2,
    date: "12/08",
    weekday: "Mon",
    city: "shanghai",
    titleKey: "day2_title_new",
    hotelKey: "day1_hotel_new",
    amapQuery: "上海新亞外灘郁錦香酒店",
    baiduQuery: "上海新亞外灘郁錦香酒店",
    gmapQuery: "SSAW Boutique Hotel Shanghai Bund",
    events: [
      { 
        time: "09:00", endTime: "11:30", type: "spot", titleKey: "day2_event1_title_new", city: "shanghai", descKey: "day2_event1_desc_new", amapQuery: "上海豫園", baiduQuery: "上海豫園"
      },
      { 
        time: "12:00", endTime: "14:00", type: "food", titleKey: "day2_event2_title_new", city: "shanghai", descKey: "day2_event2_desc_new", 
        amapQuery: "TASTE OF CHINA 味", baiduQuery: "TASTE OF CHINA 味",
        qrCodeModalTitleKey: "qr_modal_title_taste_of_china",
        qrCodes: [{ path: "/qrcodes/1208 lunch.jpg", nameKey: "qr_modal_subtitle_taste_of_china" }]
      },
      { 
        time: "14:30", endTime: "17:30", type: "spot", titleKey: "day2_event3_title_new", city: "shanghai", descKey: "day2_event3_desc_new", amapQuery: "上海田子坊", baiduQuery: "上海田子坊"
      },
      { time: "17:30", endTime: "18:45", type: "food", titleKey: "day2_event4_title_new", city: "shanghai", descKey: "day2_event4_desc_new", recommendations: [
        { nameKey: "resto_yhz_name", descKey: "resto_yhz_desc", locationKey: "resto_yhz_location", amapQuery: "圆苑(静安寺店)", baiduQuery: "圆苑(静安寺店)" },
        { nameKey: "resto_xjb_name", descKey: "resto_xjb_desc", locationKey: "resto_xjb_location", amapQuery: "新吉士酒楼(新天地店)", baiduQuery: "新吉士酒楼(新天地店)" },
        { nameKey: "resto_jwb_name", descKey: "resto_jwb_desc", locationKey: "resto_jwb_location", amapQuery: "晶采轩(芮欧百货店)", baiduQuery: "晶采轩(芮欧百货店)" },
        { nameKey: "resto_hakkasan_name", descKey: "resto_hakkasan_desc", locationKey: "resto_hakkasan_location", amapQuery: "Hakkasan Shanghai", baiduQuery: "Hakkasan Shanghai" },
        { nameKey: "resto_uv_name", descKey: "resto_uv_desc", locationKey: "resto_uv_location", amapQuery: "Ultraviolet by Paul Pairet", baiduQuery: "Ultraviolet by Paul Pairet" },
        { nameKey: "resto_mr&mrsbund_name", descKey: "resto_mr&mrsbund_desc", locationKey: "resto_mr&mrsbund_location", amapQuery: "Mr & Mrs Bund", baiduQuery: "Mr & Mrs Bund" },
        { nameKey: "resto_yongfoo_name", descKey: "resto_yongfoo_desc", locationKey: "resto_yongfoo_location", amapQuery: "雍福会", baiduQuery: "雍福会" },
        { nameKey: "resto_sichuancitizen_name", descKey: "resto_sichuancitizen_desc", locationKey: "resto_sichuancitizen_location", amapQuery: "Sichuan Citizen", baiduQuery: "Sichuan Citizen" },
        { nameKey: "resto_lostheaven_name", descKey: "resto_lostheaven_desc", locationKey: "resto_lostheaven_location", amapQuery: "Lost Heaven on the Bund", baiduQuery: "Lost Heaven on the Bund" },
        { nameKey: "resto_commune_name", descKey: "resto_commune_desc", locationKey: "resto_commune_location", amapQuery: "Commune Social", baiduQuery: "Commune Social" },
        { nameKey: "resto_jean-georges_name", descKey: "resto_jean-georges_desc", locationKey: "resto_jean-georges_location", amapQuery: "Jean-Georges", baiduQuery: "Jean-Georges" },
        { nameKey: "resto_ottoemezzo_name", descKey: "resto_ottoemezzo_desc", locationKey: "resto_ottoemezzo_location", amapQuery: "8½ Otto e Mezzo Bombana", baiduQuery: "8½ Otto e Mezzo Bombana" },
        { nameKey: "resto_fuhehui_name", descKey: "resto_fuhehui_desc", locationKey: "resto_fuhehui_location", amapQuery: "福和慧", baiduQuery: "福和慧" },
        { nameKey: "resto_mercatobyjg_name", descKey: "resto_mercatobyjg_desc", locationKey: "resto_mercatobyjg_location", amapQuery: "Mercato by Jean-Georges", baiduQuery: "Mercato by Jean-Georges" },
        { nameKey: "resto_barrouge_name", descKey: "resto_barrouge_desc", locationKey: "resto_barrouge_location", amapQuery: "Bar Rouge", baiduQuery: "Bar Rouge" }
      ]},
      { 
        time: "18:45", endTime: "20:30", type: "cruise", titleKey: "day2_event_cruise_title", city: "shanghai", descKey: "day2_event_cruise_desc",
        amapQuery: "上海十六铺码头", baiduQuery: "上海十六铺码头",
        recommendationTitleKey: "cruise_info_title",
        recommendations: [
          { nameKey: "cruise_step1_name", descKey: "cruise_step1_desc" },
          { nameKey: "cruise_step2_name", descKey: "cruise_step2_desc", amapQuery: "十六铺码头, Shanghai", baiduQuery: "十六铺码头, Shanghai" },
          { nameKey: "cruise_step3_name", descKey: "cruise_step3_desc" }
        ],
        subEvents: [
          { time: "18:45", titleKey: "day2_event_get_tickets_title", descKey: "day2_event_get_tickets_desc" },
          { time: "19:30", titleKey: "day2_event_cruise_title" }
        ]
      },
      { 
        time: "20:30", endTime: "21:30", type: "spot", titleKey: "day2_event5_title_new", city: "shanghai", descKey: "day2_event5_desc_new", 
        amapQuery: "上海外灘", baiduQuery: "上海外灘"
      }
    ]
  },
  {
    day: 3,
    date: "12/09",
    weekday: "Tue",
    city: "shanghai",
    titleKey: "day3_title",
    hotelKey: "day1_hotel_new",
    amapQuery: "上海新亞外灘郁錦香酒店",
    baiduQuery: "上海新亞外灘郁錦香酒店",
    gmapQuery: "SSAW Boutique Hotel Shanghai Bund",
    events: [
      { time: "09:30", endTime: "10:30", type: "transport", titleKey: "day3_event_to_zhujiajiao_title", city: "shanghai", descKey: "day3_event_to_zhujiajiao_desc", amapQuery: "上海新亞外灘郁錦香酒店", baiduQuery: "上海新亞外灘郁錦香酒店", appLink: "blacklane://" },
      { 
        time: "10:30", endTime: "14:30", type: "spot", titleKey: "day3_event1_title", descKey: "day3_event1_desc",
        city: "shanghai", amapQuery: "朱家角古鎮", baiduQuery: "朱家角古鎮",
        subEvents: [
          { time: "10:30", titleKey: "day3_sub_event1_title", descKey: "day3_sub_event1_desc" },
          { time: "11:20", titleKey: "day3_event2_title", type: "cruise" },
          { time: "12:30", titleKey: "day3_event3_title" },
          { time: "13:30", titleKey: "day3_sub_event_kezhigarden_title", descKey: "day3_sub_event_kezhigarden_desc", amapQuery: "課植園", baiduQuery: "課植園" }
        ]
      },
      { time: "14:30", endTime: "15:30", type: "transport", titleKey: "day3_event4_title", city: "shanghai", descKey: "Blacklane 專車返回飯店", amapQuery: "朱家角古鎮", baiduQuery: "朱家角古鎮", appLink: "blacklane://" },
      { time: "15:30", endTime: "17:00", type: "hotel", titleKey: "day3_event_rest_title", city: "shanghai", descKey: "day3_event_rest_desc", amapQuery: "上海新亞外灘郁錦香酒店", baiduQuery: "上海新亞外灘郁錦香酒店" },
      { time: "17:00", endTime: "17:30", type: "train", titleKey: "day3_event5_title", city: "shanghai", descKey: null, amapQuery: "靜安寺地鐵站", baiduQuery: "靜安寺地鐵站" },
      { time: "17:30", endTime: "19:00", type: "food", titleKey: "day3_event6_title", city: "shanghai", descKey: "day3_event6_desc", recommendations: [
        { nameKey: "resto_nanlu_name", descKey: "resto_nanlu_desc", locationKey: "resto_nanlu_location", amapQuery: "南麓·浙里(静安寺店)", baiduQuery: "南麓·浙里(静安寺店)" },
        { nameKey: "resto_guimanlong_name", descKey: "resto_guimanlong_desc", locationKey: "resto_guimanlong_location", amapQuery: "桂满陇(静安寺店)", baiduQuery: "桂满陇(静安寺店)" },
        { nameKey: "resto_orange_name", descKey: "resto_orange_desc", locationKey: "resto_orange_location", amapQuery: "橘色涮涮屋(静安店)", baiduQuery: "橘色涮涮屋(静安店)" },
        { nameKey: "resto_cuixi_name", descKey: "resto_cuixi_desc", locationKey: "resto_cuixi_location", amapQuery: "翠玺(静安嘉里中心店)", baiduQuery: "翠玺(静安嘉里中心店)" },
        { nameKey: "resto_wagas_name", descKey: "resto_wagas_desc", locationKey: "resto_wagas_location", amapQuery: "Wagas(静安嘉里中心店)", baiduQuery: "Wagas(静安嘉里中心店)" },
        { nameKey: "resto_calix_name", descKey: "resto_calix_desc", locationKey: "resto_calix_location", amapQuery: "Calix(静安店)", baiduQuery: "Calix(静安店)" },
        { nameKey: "resto_elementfresh_name", descKey: "resto_elementfresh_desc", locationKey: "resto_elementfresh_location", amapQuery: "新元素(静安嘉里中心店)", baiduQuery: "新元素(静安嘉里中心店)" },
        { nameKey: "resto_baker&spice_name", descKey: "resto_baker&spice_desc", locationKey: "resto_baker&spice_location", amapQuery: "Baker & Spice(上海商城店)", baiduQuery: "Baker & Spice(上海商城店)" },
        { nameKey: "resto_din_name", descKey: "resto_din_desc", locationKey: "resto_din_location", amapQuery: "鼎泰丰(上海商城店)", baiduQuery: "鼎泰丰(上海商城店)" },
        { nameKey: "resto_charcoal_name", descKey: "resto_charcoal_desc", locationKey: "resto_charcoal_location", amapQuery: "CHARCOHOL", baiduQuery: "CHARCOHOL" },
        { nameKey: "resto_laojishi_name", descKey: "resto_laojishi_desc", locationKey: "resto_laojishi_location", amapQuery: "老吉士(静安店)", baiduQuery: "老吉士(静安店)" }
      ]},
      { time: "19:00", endTime: "21:00", type: "spot", titleKey: "day3_event7_title", city: "shanghai", descKey: "day3_event7_desc", amapQuery: "南京西路", baiduQuery: "南京西路" },
    ]
  },
  {
    day: 4,
    date: "12/10",
    weekday: "Wed",
    city: "shanghai",
    titleKey: "day4_title",
    hotelKey: "day1_hotel_new",
    amapQuery: "上海新亞外灘郁錦香酒店",
    baiduQuery: "上海新亞外灘郁錦香酒店",
    gmapQuery: "SSAW Boutique Hotel Shanghai Bund",
    events: [
      { 
        time: "10:15", endTime: "11:50", type: "spot", titleKey: "day4_event1_title", city: "shanghai", descKey: "day4_event1_desc", amapQuery: "武康大樓", baiduQuery: "武康大樓"
      },
      { time: "12:00", endTime: "13:00", type: "food", titleKey: "day4_event2_title", city: "shanghai", descKey: "day4_event2_desc", recommendations: [
        { nameKey: "resto_egg_name", descKey: "resto_egg_desc", locationKey: "resto_egg_location", amapQuery: "Egg", baiduQuery: "Egg" },
        { nameKey: "resto_rac_name", descKey: "resto_rac_desc", locationKey: "resto_rac_location", amapQuery: "RAC Coffee", baiduQuery: "RAC Coffee" },
        { nameKey: "resto_blaz_name", descKey: "resto_blaz_desc", locationKey: "resto_blaz_location", amapQuery: "Blaz", baiduQuery: "Blaz" },
        { nameKey: "resto_omer_name", descKey: "resto_omer_desc", locationKey: "resto_omer_location", amapQuery: "O'Mills", baiduQuery: "O'Mills" },
        { nameKey: "resto_sunflour_name", descKey: "resto_sunflour_desc", locationKey: "resto_sunflour_location", amapQuery: "Sunflour(安福路店)", baiduQuery: "Sunflour(安福路店)" }
      ], recommendationTitleKey: "餐廳推薦" },
      { time: "13:15", endTime: "17:00", type: "spot", titleKey: "day4_event3_title", city: "shanghai", descKey: "day4_event3_desc", recommendations: [
        { nameKey: "shop_jiuguang_name", descKey: "shop_jiuguang_desc", locationKey: "shop_jiuguang_location", amapQuery: "久光百货(上海店)", baiduQuery: "久光百货(上海店)" },
        { nameKey: "shop_loccitane_name", descKey: "shop_loccitane_desc", locationKey: "shop_loccitane_location", amapQuery: "L'OCCITANE(兴业太古汇店)", baiduQuery: "L'OCCITANE(兴业太古汇店)" },
        { nameKey: "shop_muji_name", descKey: "shop_muji_desc", locationKey: "shop_muji_location", amapQuery: "MUJI(上海环贸广场店)", baiduQuery: "MUJI(上海环贸广场店)" }
      ], recommendationTitleKey: "shop_list_title" },
      { time: "17:10", endTime: "19:00", type: "spot", titleKey: "day4_event4_title", city: "shanghai", descKey: "day4_event4_desc", recommendations: [
        { nameKey: "shop_zara_name", descKey: "shop_zara_desc", locationKey: "shop_zara_location", amapQuery: "ZARA(南京东路店)", baiduQuery: "ZARA(南京东路店)" },
        { nameKey: "shop_uniqlo_name", descKey: "shop_uniqlo_desc", locationKey: "shop_uniqlo_location", amapQuery: "优衣库(南京西路全球旗舰店)", baiduQuery: "优衣库(南京西路全球旗舰店)" }
      ], recommendationTitleKey: "shop_list_title" },
      { time: "19:00", endTime: null, type: "food", titleKey: "day4_event5_title", city: "shanghai", descKey: "day4_event5_desc", recommendations: [
        { nameKey: "resto_laolao_name", descKey: "resto_laolao_desc", locationKey: "resto_laolao_location", amapQuery: "上海姥姥家常饭馆(南京东路店)", baiduQuery: "上海姥姥家常饭馆(南京东路店)" },
        { nameKey: "resto_shen_name", descKey: "resto_shen_desc", locationKey: "resto_shen_location", amapQuery: "沈大成(南京东路店)", baiduQuery: "沈大成(南京东路店)" },
        { nameKey: "resto_yanyun_name", descKey: "resto_yanyun_desc", locationKey: "resto_yanyun_location", amapQuery: "燕云楼(南京东路店)", baiduQuery: "燕云楼(南京东路店)" }
      ]},
    ]
  },
  {
    day: 5,
    date: "12/11",
    weekday: "Thu",
    city: "hongkong",
    titleKey: "day5_title",
    hotelKey: "day5_hotel",
    gmapQuery: "Eco Tree Hotel Causeway Bay",
    events: [
      { 
        time: "09:30", endTime: "10:10", type: "transport", titleKey: "day5_event1_combined_title",
        city: "shanghai",
        subEvents: [
          { time: "09:30", titleKey: "day5_sub_event1_title", amapQuery: "上海新亞外灘郁錦香酒店", baiduQuery: "上海新亞外灘郁錦香酒店", appLink: "blacklane://" },
          { time: "10:02", titleKey: "day5_sub_maglev_title", amapQuery: "磁浮龙阳路站", baiduQuery: "磁浮龙阳路站" }
        ]
      },
      { 
        time: "10:30", endTime: "12:30", type: "spot", titleKey: "day5_event_lounge_title", descKey: "day5_event_lounge_desc", 
        city: "shanghai", amapQuery: "上海浦东国际机场T1-出发F岛", baiduQuery: "上海浦东国际机场T1-出发F岛",
        qrCodes: [{ path: "/qrcodes/dragonpass1211.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "12:50", endTime: "15:55", type: "flight", titleKey: "day5_event2_title",
        city: "hongkong",
        subEvents: [
          { time: "12:50", titleKey: "day5_sub_event2_title", descKey: "day5_sub_event2_desc" },
          { time: "15:55", titleKey: "day5_sub_event3_title" }
        ]
      },
      { 
        time: "16:30", endTime: "17:00", type: "train", titleKey: "day5_event3_title",
        city: "hongkong", gmapQuery: "Hong Kong International Airport",
        qrCodeModalTitleKey: "qr_modal_title_airport_express",
        qrCodes: [{ path: "/qrcodes/passenger1.jpg" }, { path: "/qrcodes/passenger2.jpg" }]
      },
      { 
        time: "17:00", endTime: "18:00", type: "hotel", titleKey: "day5_event_checkin_title", descKey: "day5_event_checkin_desc", 
        city: "hongkong", gmapQuery: "Eco Tree Hotel Causeway Bay",
        pdfLink: "/PDF/1211-1212 香港.pdf"
      },
      { time: "19:00", endTime: "20:00", type: "food", titleKey: "day5_event4_title", city: "hongkong", descKey: "day5_event4_desc", gmapQuery: "華嫂冰室 灣仔" },
      { time: "20:00", endTime: "20:30", type: "food", titleKey: "day5_event_bakehouse_title", city: "hongkong", descKey: "day5_event_bakehouse_desc", gmapQuery: "Bakehouse 灣仔" },
    ]
  },
  {
    day: 6,
    date: "12/12",
    weekday: "Fri",
    city: "hongkong",
    titleKey: "day6_title",
    hotelKey: null,
    events: [
      { time: "08:00", endTime: "08:45", type: "food", titleKey: "day6_event2_title", city: "hongkong", descKey: "day6_event2_desc", recommendations: [
        { nameKey: "resto_kamfung_name", descKey: "resto_kamfung_desc", locationKey: "resto_kamfung_location", gmapQuery: "金鳳茶餐廳" },
        { nameKey: "resto_tsuiwah_name", descKey: "resto_tsuiwah_desc", locationKey: "resto_tsuiwah_location", gmapQuery: "翠華餐廳(銅鑼灣店)" },
        { nameKey: "resto_joyhing_name", descKey: "resto_joyhing_desc", locationKey: "resto_joyhing_location", gmapQuery: "再興燒臘飯店" },
        { nameKey: "resto_australia_name", descKey: "resto_australia_desc", locationKey: "resto_australia_location", gmapQuery: "澳洲牛奶公司" },
        { nameKey: "resto_capital_name", descKey: "resto_capital_desc", locationKey: "resto_capital_location", gmapQuery: "華星冰室(灣仔店)" },
        { nameKey: "resto_lanfong_name", descKey: "resto_lanfong_desc", locationKey: "resto_lanfong_location", gmapQuery: "蘭芳園(中環總店)" },
        { nameKey: "resto_timhowan_name", descKey: "resto_timhowan_desc", locationKey: "resto_timhowan_location", gmapQuery: "添好運(中環店)" }
      ]},
      { time: "08:45", endTime: "09:15", type: "spot", titleKey: "day6_event1_title", city: "hongkong", descKey: null, gmapQuery: "Victoria Park, Hong Kong" },
      { time: "09:15", endTime: "09:45", type: "food", titleKey: "day5_event_bakehouse_title", city: "hongkong", descKey: "day5_event_bakehouse_desc", gmapQuery: "Bakehouse 銅鑼灣" },
      { time: "09:45", endTime: "10:45", type: "spot", titleKey: "day6_event_central_stroll_title", city: "hongkong", descKey: "day6_event_central_stroll_desc", recommendations: [
        { nameKey: "souv_jenny_bakery_name", descKey: "souv_jenny_bakery_desc", locationKey: "souv_jenny_bakery_location", gmapQuery: "珍妮曲奇 Jenny Bakery 中環" },
        { nameKey: "souv_marks_spencer_name", descKey: "souv_marks_spencer_desc", locationKey: "souv_marks_spencer_location", gmapQuery: "Marks & Spencer Food 中環" }
      ], recommendationTitleKey: "souvenir_list_title" },
      {
        time: "10:45", endTime: "11:15", type: "train", titleKey: "day6_sub_event4b_title",
        city: "hongkong", gmapQuery: "Hong Kong International Airport",
        qrCodeModalTitleKey: "qr_modal_title_airport_express",
        qrCodes: [{ path: "/qrcodes/passenger1_return.jpg" }, { path: "/qrcodes/passenger2_return.jpg" }]
      },
      { 
        time: "12:00", endTime: "13:30", type: "spot", titleKey: "day6_event_lounge_title", descKey: "day6_event_lounge_desc",
        city: "hongkong", gmapQuery: "Plaza Premium Lounge, Hong Kong International Airport",
        qrCodes: [{ path: "/qrcodes/dragonpass1212.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "14:00", endTime: "16:00", type: "flight", titleKey: "day6_event5_title",
        city: "taiwan",
        subEvents: [
          { time: "14:00", titleKey: "day6_sub_event1_title", descKey: "day6_sub_event1_desc" },
          { time: "16:00", titleKey: "day6_sub_event2_title" }
        ]
      },
    ]
  }
];