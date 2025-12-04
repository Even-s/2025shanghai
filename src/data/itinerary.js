export const itinerary = [
  {
    day: 1,
    date: "12/07",
    weekday: "Sun",
    titleKey: "day1_title_new",
    hotelKey: "day1_hotel_new",
    hotelGmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8",
    hotelAmapQuery: "Renaissance Shanghai Yu Garden Hotel",
    events: [
      { 
        time: "12:30", endTime: "13:30", type: "transport", titleKey: "day1_event_home_to_airport_title", gmapQuery: "https://maps.app.goo.gl/vWhEJQSfkD7RkSKZ6", amapQuery: "https://maps.app.goo.gl/vWhEJQSfkD7RkSKZ6",
        subEvents: [
          { time: "12:30", titleKey: "day1_sub_depart_home_title" },
          { time: "13:30", titleKey: "day1_sub_arrive_khh_title" }
        ]
      },
      { 
        time: "14:00", endTime: "16:00", type: "spot", titleKey: "day1_event_airport_lounge_title", descKey: "day1_event_airport_lounge_desc", 
        gmapQuery: "https://maps.app.goo.gl/1oF6FjV4BAKCx1wA8",
        amapQuery: "https://maps.app.goo.gl/1oF6FjV4BAKCx1wA8",
        qrCodes: [{ path: "/qrcodes/dragonpass1207.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "16:35", endTime: "19:00", type: "flight", titleKey: "day1_event1_title_new",
        subEvents: [
          { time: "16:35", titleKey: "day1_sub_event1_title", descKey: "day1_sub_event1_desc" },
          { time: "19:00", titleKey: "day1_sub_event2_title" }
        ]
      },
      {
        time: "20:02", endTime: "20:45", type: "transport", titleKey: "day1_event2_combined_title",
        subEvents: [
          { 
            time: "20:02", titleKey: "day1_event2a_title", descKey: "day1_event2a_desc", gmapQuery: "https://maps.app.goo.gl/AAxw3k1HAmD72H7GA", amapQuery: "https://maps.app.goo.gl/AAxw3k1HAmD72H7GA",
            qrCodes: [{ path: "/qrcodes/Shanghai Maglev Train.jpg" }],
            recommendations: [
              { nameKey: "maglev_step1_name", descKey: "maglev_step1_desc" },
              { nameKey: "maglev_pickup2_name", descKey: "maglev_pickup2_desc", gmapQuery: "上海浦东国际机场T1航站楼", amapQuery: "上海浦东国际机场T1航站楼" },
              { nameKey: "maglev_usage_name", descKey: "maglev_usage_desc" }
            ], recommendationTitleKey: "maglev_info_title" },
          { time: "20:10", titleKey: "day1_event2b_title", descKey: "day1_event2b_desc", gmapQuery: "https://maps.app.goo.gl/8fn7sFr7gSRb8rkb8", amapQuery: "https://maps.app.goo.gl/8fn7sFr7gSRb8rkb8", appLink: "blacklane://" }
        ]
      },
      { time: "20:45", endTime: "21:15", type: "hotel", titleKey: "day1_event_checkin_title", descKey: "day1_event_checkin_desc", pdfLink: "/PDF/1207-1211 上海.pdf" },
      { time: "21:15", endTime: null, type: "food", titleKey: "day1_event3_title_new", descKey: "day1_event3_desc_new", recommendations: [
        { nameKey: "resto_xysj_name", descKey: "resto_xysj_desc", locationKey: "resto_xysj_location", gmapQuery: "小杨生煎(吴江路店)", amapQuery: "小杨生煎(吴江路店)" },
        { nameKey: "resto_anm_name", descKey: "resto_anm_desc", locationKey: "resto_anm_location", gmapQuery: "阿娘面(思南路店)", amapQuery: "阿娘面(思南路店)" },
        { nameKey: "resto_laohuzhao_name", descKey: "resto_laohuzhao_desc", locationKey: "resto_laohuzhao_location", gmapQuery: "老虎灶餛飩", amapQuery: "老虎灶餛飩" },
        { nameKey: "resto_dingtele_name", descKey: "resto_dingtele_desc", locationKey: "resto_dingtele_location", gmapQuery: "顶特勒粥面馆(淮海中路店)", amapQuery: "顶特勒粥面馆(淮海中路店)" },
        { nameKey: "resto_fuchun_name", descKey: "resto_fuchun_desc", locationKey: "resto_fuchun_location", gmapQuery: "富春小笼(愚园路店)", amapQuery: "富春小笼(愚园路店)" },
        { nameKey: "resto_erguang_name", descKey: "resto_erguang_desc", locationKey: "resto_erguang_location", gmapQuery: "耳光馄饨(肇周路店)", amapQuery: "耳光馄饨(肇周路店)" },
        { nameKey: "resto_honglin_name", descKey: "resto_honglin_desc", locationKey: "resto_honglin_location", gmapQuery: "红临门", amapQuery: "红临门" },
        { nameKey: "resto_haidilao_name", descKey: "resto_haidilao_desc", locationKey: "resto_haidilao_location", gmapQuery: "海底捞火锅(上海广场店)", amapQuery: "海底捞火锅(上海广场店)" },
        { nameKey: "resto_longmen_name", descKey: "resto_longmen_desc", locationKey: "resto_longmen_location", gmapQuery: "龙门阵", amapQuery: "龙门阵" },
        { nameKey: "resto_xiangmanlou_name", descKey: "resto_xiangmanlou_desc", locationKey: "resto_xiangmanlou_location", gmapQuery: "祥满楼", amapQuery: "祥满楼" },
        { nameKey: "resto_dahu_name", descKey: "resto_dahu_desc", locationKey: "resto_dahu_location", gmapQuery: "大壶春(四川中路店)", amapQuery: "大壶春(四川中路店)" },
        { nameKey: "resto_shukeman_name", descKey: "resto_shukeman_desc", locationKey: "resto_shukeman_location", gmapQuery: "舒蔡记(云南中路店)", amapQuery: "舒蔡记(云南中路店)" },
        { nameKey: "resto_wanghong_name", descKey: "resto_wanghong_desc", locationKey: "resto_wanghong_location", gmapQuery: "网红油鸡饭", amapQuery: "网红油鸡饭" },
        { nameKey: "resto_changjiao_name", descKey: "resto_changjiao_desc", locationKey: "resto_changjiao_location", gmapQuery: "长脚汤面", amapQuery: "长脚汤面" },
        { nameKey: "resto_barbarian_name", descKey: "resto_barbarian_desc", locationKey: "resto_barbarian_location", gmapQuery: "Barbarian", amapQuery: "Barbarian" },
        { nameKey: "resto_shaguowang_name", descKey: "resto_shaguowang_desc", locationKey: "resto_shaguowang_location", gmapQuery: "小黑蚝情·潮汕砂锅粥(定西路店)", amapQuery: "小黑蚝情·潮汕砂锅粥(定西路店)" },
        { nameKey: "resto_fengsheng_name", descKey: "resto_fengsheng_desc", locationKey: "resto_fengsheng_location", gmapQuery: "丰盛里", amapQuery: "丰盛里" },
        { nameKey: "resto_xiaoman_name", descKey: "resto_xiaoman_desc", locationKey: "resto_xiaoman_location", gmapQuery: "小满手工粉(日月光中心店)", amapQuery: "小满手工粉(日月光中心店)" },
        { nameKey: "resto_laowang_name", descKey: "resto_laowang_desc", locationKey: "resto_laowang_location", gmapQuery: "捞王锅物料理(人民广场店)", amapQuery: "捞王锅物料理(人民广场店)" },
        { nameKey: "resto_xibei_name", descKey: "resto_xibei_desc", locationKey: "resto_xibei_location", gmapQuery: "西贝莜面村(人民广场店)", amapQuery: "西贝莜面村(人民广场店)" },
        { nameKey: "resto_saizeriya_name", descKey: "resto_saizeriya_desc", locationKey: "resto_saizeriya_location", gmapQuery: "萨莉亚(人民广场店)", amapQuery: "萨莉亚(人民广场店)" },
        { nameKey: "resto_pizzamarzano_name", descKey: "resto_pizzamarzano_desc", locationKey: "resto_pizzamarzano_location", gmapQuery: "Pizza Marzano(上海广场店)", amapQuery: "Pizza Marzano(上海广场店)" },
        { nameKey: "resto_fatcow_name", descKey: "resto_fatcow_desc", locationKey: "resto_fatcow_location", gmapQuery: "Fat Cow(静安店)", amapQuery: "Fat Cow(静安店)" },
        { nameKey: "resto_bluefrog_name", descKey: "resto_bluefrog_desc", locationKey: "resto_bluefrog_location", gmapQuery: "蓝蛙(新天地店)", amapQuery: "蓝蛙(新天地店)" },
        { nameKey: "resto_tacobell_name", descKey: "resto_tacobell_desc", locationKey: "resto_tacobell_location", gmapQuery: "Taco Bell(人民广场店)", amapQuery: "Taco Bell(人民广场店)" },
        { nameKey: "resto_charlies_name", descKey: "resto_charlies_desc", locationKey: "resto_charlies_location", gmapQuery: "Charlie's(新天地店)", amapQuery: "Charlie's(新天地店)" },
        { nameKey: "resto_popeyes_name", descKey: "resto_popeyes_desc", locationKey: "resto_popeyes_location", gmapQuery: "Popeyes(淮海中路店)", amapQuery: "Popeyes(淮海中路店)" },
        { nameKey: "resto_kyochon_name", descKey: "resto_kyochon_desc", locationKey: "resto_kyochon_location", gmapQuery: "Kyochon 1991(人民广场店)", amapQuery: "Kyochon 1991(人民广场店)" }
      ]},
    ]
  },
  {
    day: 2,
    date: "12/08",
    weekday: "Mon",
    titleKey: "day2_title_new",
    hotelKey: "day1_hotel_new",
    hotelGmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8",
    hotelAmapQuery: "Renaissance Shanghai Yu Garden Hotel",
    events: [
      { 
        time: "09:00", endTime: "11:30", type: "spot", titleKey: "day2_event1_title_new", descKey: "day2_event1_desc_new", gmapQuery: "上海豫園", amapQuery: "上海豫園"
      },
      { 
        time: "12:00", endTime: "14:00", type: "food", titleKey: "day2_event2_title_new", descKey: "day2_event2_desc_new", 
        gmapQuery: "https://surl.amap.com/hBtwdEl24G4",
        amapQuery: "https://surl.amap.com/hBtwdEl24G4",
        qrCodeModalTitleKey: "qr_modal_title_taste_of_china",
        qrCodes: [{ path: "/qrcodes/1208 lunch.jpg", nameKey: "qr_modal_subtitle_taste_of_china" }]
      },
      { 
        time: "14:30", endTime: "17:30", type: "spot", titleKey: "day2_event3_title_new", descKey: "day2_event3_desc_new", gmapQuery: "上海田子坊", amapQuery: "上海田子坊"
      },
      { time: "17:30", endTime: "18:45", type: "food", titleKey: "day2_event4_title_new", descKey: "day2_event4_desc_new", recommendations: [
        { nameKey: "resto_yhz_name", descKey: "resto_yhz_desc", locationKey: "resto_yhz_location", gmapQuery: "圆苑(静安寺店)", amapQuery: "圆苑(静安寺店)" },
        { nameKey: "resto_xjb_name", descKey: "resto_xjb_desc", locationKey: "resto_xjb_location", gmapQuery: "新吉士酒楼(新天地店)", amapQuery: "新吉士酒楼(新天地店)" },
        { nameKey: "resto_jwb_name", descKey: "resto_jwb_desc", locationKey: "resto_jwb_location", gmapQuery: "晶采轩(芮欧百货店)", amapQuery: "晶采轩(芮欧百货店)" },
        { nameKey: "resto_hakkasan_name", descKey: "resto_hakkasan_desc", locationKey: "resto_hakkasan_location", gmapQuery: "Hakkasan Shanghai", amapQuery: "Hakkasan Shanghai" },
        { nameKey: "resto_uv_name", descKey: "resto_uv_desc", locationKey: "resto_uv_location", gmapQuery: "Ultraviolet by Paul Pairet", amapQuery: "Ultraviolet by Paul Pairet" },
        { nameKey: "resto_mr&mrsbund_name", descKey: "resto_mr&mrsbund_desc", locationKey: "resto_mr&mrsbund_location", gmapQuery: "Mr & Mrs Bund", amapQuery: "Mr & Mrs Bund" },
        { nameKey: "resto_yongfoo_name", descKey: "resto_yongfoo_desc", locationKey: "resto_yongfoo_location", gmapQuery: "雍福会", amapQuery: "雍福会" },
        { nameKey: "resto_sichuancitizen_name", descKey: "resto_sichuancitizen_desc", locationKey: "resto_sichuancitizen_location", gmapQuery: "Sichuan Citizen", amapQuery: "Sichuan Citizen" },
        { nameKey: "resto_colca_name", descKey: "resto_colca_desc", locationKey: "resto_colca_location", gmapQuery: "Colca", amapQuery: "Colca" },
        { nameKey: "resto_goodfellas_name", descKey: "resto_goodfellas_desc", locationKey: "resto_goodfellas_location", gmapQuery: "Goodfellas", amapQuery: "Goodfellas" },
        { nameKey: "resto_polux_name", descKey: "resto_polux_desc", locationKey: "resto_polux_location", gmapQuery: "Polux by Paul Pairet", amapQuery: "Polux by Paul Pairet" },
        { nameKey: "resto_daisytang_name", descKey: "resto_daisytang_desc", locationKey: "resto_daisytang_location", gmapQuery: "Daisy Tang", amapQuery: "Daisy Tang" },
        { nameKey: "resto_elbodegon_name", descKey: "resto_elbodegon_desc", locationKey: "resto_elbodegon_location", gmapQuery: "El Bodegon", amapQuery: "El Bodegon" },
        { nameKey: "resto_lostheaven_name", descKey: "resto_lostheaven_desc", locationKey: "resto_lostheaven_location", gmapQuery: "Lost Heaven on the Bund", amapQuery: "Lost Heaven on the Bund" },
        { nameKey: "resto_commune_name", descKey: "resto_commune_desc", locationKey: "resto_commune_location", gmapQuery: "Commune Social", amapQuery: "Commune Social" },
        { nameKey: "resto_jean-georges_name", descKey: "resto_jean-georges_desc", locationKey: "resto_jean-georges_location", gmapQuery: "Jean-Georges", amapQuery: "Jean-Georges" },
        { nameKey: "resto_ottoemezzo_name", descKey: "resto_ottoemezzo_desc", locationKey: "resto_ottoemezzo_location", gmapQuery: "8½ Otto e Mezzo Bombana", amapQuery: "8½ Otto e Mezzo Bombana" },
        { nameKey: "resto_fuhehui_name", descKey: "resto_fuhehui_desc", locationKey: "resto_fuhehui_location", gmapQuery: "福和慧", amapQuery: "福和慧" },
        { nameKey: "resto_mercatobyjg_name", descKey: "resto_mercatobyjg_desc", locationKey: "resto_mercatobyjg_location", gmapQuery: "Mercato by Jean-Georges", amapQuery: "Mercato by Jean-Georges" },
        { nameKey: "resto_unibrown_name", descKey: "resto_unibrown_desc", locationKey: "resto_unibrown_location", gmapQuery: "UNÏCO Shanghai", amapQuery: "UNÏCO Shanghai" },
        { nameKey: "resto_barrouge_name", descKey: "resto_barrouge_desc", locationKey: "resto_barrouge_location", gmapQuery: "Bar Rouge", amapQuery: "Bar Rouge" },
        { nameKey: "resto_captain_name", descKey: "resto_captain_desc", locationKey: "resto_captain_location", gmapQuery: "The Captain", amapQuery: "The Captain" },
        { nameKey: "resto_epiceriefab_name", descKey: "resto_epiceriefab_desc", locationKey: "resto_epiceriefab_location", gmapQuery: "Épicerie & F.A.B", amapQuery: "Épicerie & F.A.B" },
        { nameKey: "resto_cantondiscoy_name", descKey: "resto_cantondiscoy_desc", locationKey: "resto_cantondiscoy_location", gmapQuery: "Canton Disco", amapQuery: "Canton Disco" },
        { nameKey: "resto_shanghaitavern_name", descKey: "resto_shanghaitavern_desc", locationKey: "resto_shanghaitavern_location", gmapQuery: "Shanghai Tavern", amapQuery: "Shanghai Tavern" },
        { nameKey: "resto_theshed_name", descKey: "resto_theshed_desc", locationKey: "resto_theshed_location", gmapQuery: "The Shed", amapQuery: "The Shed" },
        { nameKey: "resto_liquidlaundry_name", descKey: "resto_liquidlaundry_desc", locationKey: "resto_liquidlaundry_location", gmapQuery: "Liquid Laundry", amapQuery: "Liquid Laundry" },
        { nameKey: "resto_shake_name", descKey: "resto_shake_desc", locationKey: "resto_shake_location", gmapQuery: "Shake", amapQuery: "Shake" },
        { nameKey: "resto_sobercompany_name", descKey: "resto_sobercompany_desc", locationKey: "resto_sobercompany_location", gmapQuery: "Sober Company", amapQuery: "Sober Company" }
      ]},
      { 
        time: "18:45", endTime: "20:30", type: "cruise", titleKey: "day2_event_cruise_title", descKey: "day2_event_cruise_desc",
        gmapQuery: "上海十六铺码头", amapQuery: "上海十六铺码头",
        recommendationTitleKey: "cruise_info_title",
        recommendations: [
          { nameKey: "cruise_step1_name", descKey: "cruise_step1_desc" },
          { nameKey: "cruise_step2_name", descKey: "cruise_step2_desc", gmapQuery: "十六铺码头, Shanghai", amapQuery: "十六铺码头, Shanghai" },
          { nameKey: "cruise_step3_name", descKey: "cruise_step3_desc" }
        ],
        subEvents: [
          { time: "18:45", titleKey: "day2_event_get_tickets_title", descKey: "day2_event_get_tickets_desc" },
          { time: "19:30", titleKey: "day2_event_cruise_title" }
        ]
      },
      { 
        time: "20:30", endTime: "21:30", type: "spot", titleKey: "day2_event5_title_new", descKey: "day2_event5_desc_new", 
        gmapQuery: "上海外灘", amapQuery: "上海外灘",
      }
    ]
  },
  {
    day: 3,
    date: "12/09",
    weekday: "Tue",
    titleKey: "day3_title",
    hotelKey: "day1_hotel_new",
    hotelGmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8",
    hotelAmapQuery: "Renaissance Shanghai Yu Garden Hotel",
    events: [
      { time: "09:30", endTime: "10:30", type: "transport", titleKey: "day3_event_to_zhujiajiao_title", descKey: "day3_event_to_zhujiajiao_desc", gmapQuery: "上海新亞外灘郁錦香酒店", amapQuery: "上海新亞外灘郁錦香酒店", appLink: "blacklane://" },
      { 
        time: "10:30", endTime: "14:30", type: "spot", titleKey: "day3_event1_title", descKey: "day3_event1_desc",
        gmapQuery: "朱家角古鎮", amapQuery: "朱家角古鎮",
        subEvents: [
          { time: "10:30", titleKey: "day3_sub_event1_title", descKey: "day3_sub_event1_desc" },
          { time: "11:20", titleKey: "day3_event2_title", type: "cruise" },
          { time: "12:30", titleKey: "day3_event3_title" },
          { time: "13:30", titleKey: "day3_sub_event_kezhigarden_title", descKey: "day3_sub_event_kezhigarden_desc", gmapQuery: "課植園", amapQuery: "課植園" }
        ]
      },
      { time: "14:30", endTime: "15:30", type: "transport", titleKey: "day3_event4_title", descKey: "Blacklane 專車返回飯店", gmapQuery: "朱家角古鎮", amapQuery: "朱家角古鎮", appLink: "blacklane://" },
      { time: "15:30", endTime: "17:00", type: "hotel", titleKey: "day3_event_rest_title", descKey: "day3_event_rest_desc", gmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8", amapQuery: "Renaissance Shanghai Yu Garden Hotel" },
      { time: "17:00", endTime: "17:30", type: "train", titleKey: "day3_event5_title", descKey: null, gmapQuery: "靜安寺地鐵站", amapQuery: "靜安寺地鐵站" },
      { time: "17:30", endTime: "19:00", type: "food", titleKey: "day3_event6_title", descKey: "day3_event6_desc", recommendations: [
        { nameKey: "resto_nanlu_name", descKey: "resto_nanlu_desc", locationKey: "resto_nanlu_location", gmapQuery: "南麓·浙里(静安寺店)", amapQuery: "南麓·浙里(静安寺店)" },
        { nameKey: "resto_guimanlong_name", descKey: "resto_guimanlong_desc", locationKey: "resto_guimanlong_location", gmapQuery: "桂满陇(静安寺店)", amapQuery: "桂满陇(静安寺店)" },
        { nameKey: "resto_orange_name", descKey: "resto_orange_desc", locationKey: "resto_orange_location", gmapQuery: "橘色涮涮屋(静安店)", amapQuery: "橘色涮涮屋(静安店)" },
        { nameKey: "resto_cuixi_name", descKey: "resto_cuixi_desc", locationKey: "resto_cuixi_location", gmapQuery: "翠玺(静安嘉里中心店)", amapQuery: "翠玺(静安嘉里中心店)" },
        { nameKey: "resto_wagas_name", descKey: "resto_wagas_desc", locationKey: "resto_wagas_location", gmapQuery: "Wagas(静安嘉里中心店)", amapQuery: "Wagas(静安嘉里中心店)" },
        { nameKey: "resto_calix_name", descKey: "resto_calix_desc", locationKey: "resto_calix_location", gmapQuery: "Calix(静安店)", amapQuery: "Calix(静安店)" },
        { nameKey: "resto_elementfresh_name", descKey: "resto_elementfresh_desc", locationKey: "resto_elementfresh_location", gmapQuery: "新元素(静安嘉里中心店)", amapQuery: "新元素(静安嘉里中心店)" },
        { nameKey: "resto_baker&spice_name", descKey: "resto_baker&spice_desc", locationKey: "resto_baker&spice_location", gmapQuery: "Baker & Spice(上海商城店)", amapQuery: "Baker & Spice(上海商城店)" },
        { nameKey: "resto_din_name", descKey: "resto_din_desc", locationKey: "resto_din_location", gmapQuery: "鼎泰丰(上海商城店)", amapQuery: "鼎泰丰(上海商城店)" },
        { nameKey: "resto_charcoal_name", descKey: "resto_charcoal_desc", locationKey: "resto_charcoal_location", gmapQuery: "CHARCOHOL", amapQuery: "CHARCOHOL" },
        { nameKey: "resto_laojishi_name", descKey: "resto_laojishi_desc", locationKey: "resto_laojishi_location", gmapQuery: "老吉士(静安店)", amapQuery: "老吉士(静安店)" }
      ]},
      { time: "19:00", endTime: "21:00", type: "spot", titleKey: "day3_event7_title", descKey: "day3_event7_desc", gmapQuery: "南京西路", amapQuery: "南京西路" },
    ]
  },
  {
    day: 4,
    date: "12/10",
    weekday: "Wed",
    titleKey: "day4_title",
    hotelKey: "day1_hotel_new",
    hotelGmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8",
    hotelAmapQuery: "Renaissance Shanghai Yu Garden Hotel",
    events: [
      { 
        time: "10:15", endTime: "11:50", type: "spot", titleKey: "day4_event1_title", descKey: "day4_event1_desc", gmapQuery: "武康大樓", amapQuery: "武康大樓"
      },
      { time: "12:00", endTime: "13:00", type: "food", titleKey: "day4_event2_title", descKey: "day4_event2_desc", recommendations: [
        { nameKey: "resto_egg_name", descKey: "resto_egg_desc", locationKey: "resto_egg_location", gmapQuery: "Egg", amapQuery: "Egg" },
        { nameKey: "resto_rac_name", descKey: "resto_rac_desc", locationKey: "resto_rac_location", gmapQuery: "RAC Coffee", amapQuery: "RAC Coffee" },
        { nameKey: "resto_blaz_name", descKey: "resto_blaz_desc", locationKey: "resto_blaz_location", gmapQuery: "Blaz", amapQuery: "Blaz" },
        { nameKey: "resto_omer_name", descKey: "resto_omer_desc", locationKey: "resto_omer_location", gmapQuery: "O'Mills", amapQuery: "O'Mills" },
        { nameKey: "resto_sunflour_name", descKey: "resto_sunflour_desc", locationKey: "resto_sunflour_location", gmapQuery: "Sunflour(安福路店)", amapQuery: "Sunflour(安福路店)" },
        { nameKey: "resto_fine_name", descKey: "resto_fine_desc", locationKey: "resto_fine_location", gmapQuery: "Fine", amapQuery: "Fine" },
        { nameKey: "resto_allday_name", descKey: "resto_allday_desc", locationKey: "resto_allday_location", gmapQuery: "All Day", amapQuery: "All Day" },
        { nameKey: "resto_franck_name", descKey: "resto_franck_desc", locationKey: "resto_franck_location", gmapQuery: "Franck Bistrot", amapQuery: "Franck Bistrot" },
        { nameKey: "resto_hulu_name", descKey: "resto_hulu_desc", locationKey: "resto_hulu_location", gmapQuery: "Hulu", amapQuery: "Hulu" },
        { nameKey: "resto_if_name", descKey: "resto_if_desc", locationKey: "resto_if_location", gmapQuery: "if", amapQuery: "if" },
        { nameKey: "resto_peet_name", descKey: "resto_peet_desc", locationKey: "resto_peet_location", gmapQuery: "Peet's Coffee(武康路店)", amapQuery: "Peet's Coffee(武康路店)" },
        { nameKey: "resto_arabica_name", descKey: "resto_arabica_desc", locationKey: "resto_arabica_location", gmapQuery: "Arabica(武康路店)", amapQuery: "Arabica(武康路店)" },
        { nameKey: "resto_donna_name", descKey: "resto_donna_desc", locationKey: "resto_donna_location", gmapQuery: "Donna", amapQuery: "Donna" },
        { nameKey: "resto_luneurs_name", descKey: "resto_luneurs_desc", locationKey: "resto_luneurs_location", gmapQuery: "Luneurs(武康路店)", amapQuery: "Luneurs(武康路店)" },
        { nameKey: "resto_painchaud_name", descKey: "resto_painchaud_desc", locationKey: "resto_painchaud_location", gmapQuery: "Pain Chaud(武康路店)", amapQuery: "Pain Chaud(武康路店)" },
        { nameKey: "resto_seesaw_name", descKey: "resto_seesaw_desc", locationKey: "resto_seesaw_location", gmapQuery: "Seesaw Coffee(愚园路店)", amapQuery: "Seesaw Coffee(愚园路店)" },
        { nameKey: "resto_manner_name", descKey: "resto_manner_desc", locationKey: "resto_manner_location", gmapQuery: "Manner Coffee(武康路店)", amapQuery: "Manner Coffee(武康路店)" },
        { nameKey: "resto_grinder_name", descKey: "resto_grinder_desc", locationKey: "resto_grinder_location", gmapQuery: "Grinder", amapQuery: "Grinder" },
        { nameKey: "resto_hunter_name", descKey: "resto_hunter_desc", locationKey: "resto_hunter_location", gmapQuery: "Hunter Gatherer", amapQuery: "Hunter Gatherer" },
        { nameKey: "resto_lafarine_name", descKey: "resto_lafarine_desc", locationKey: "resto_lafarine_location", gmapQuery: "La Farine", amapQuery: "La Farine" },
        { nameKey: "resto_bor_name", descKey: "resto_bor_desc", locationKey: "resto_bor_location", gmapQuery: "BOR", amapQuery: "BOR" },
        { nameKey: "resto_pirata_name", descKey: "resto_pirata_desc", locationKey: "resto_pirata_location", gmapQuery: "Pirata", amapQuery: "Pirata" },
        { nameKey: "resto_anfu_name", descKey: "resto_anfu_desc", locationKey: "resto_anfu_location", gmapQuery: "安福路小公主", amapQuery: "安福路小公主" },
        { nameKey: "resto_bo_name", descKey: "resto_bo_desc", locationKey: "resto_bo_location", gmapQuery: "BO SHANGHAI", amapQuery: "BO SHANGHAI" },
        { nameKey: "resto_taian_name", descKey: "resto_taian_desc", locationKey: "resto_taian_location", gmapQuery: "泰安门", amapQuery: "泰安门" },
        { nameKey: "resto_villa_name", descKey: "resto_villa_desc", locationKey: "resto_villa_location", gmapQuery: "Villa Le Bec", amapQuery: "Villa Le Bec" },
        { nameKey: "resto_colombo_name", descKey: "resto_colombo_desc", locationKey: "resto_colombo_location", gmapQuery: "Colombo", amapQuery: "Colombo" },
        { nameKey: "resto_azabuya_name", descKey: "resto_azabuya_desc", locationKey: "resto_azabuya_location", gmapQuery: "Azabuya", amapQuery: "Azabuya" },
        { nameKey: "resto_chili_name", descKey: "resto_chili_desc", locationKey: "resto_chili_location", gmapQuery: "Chili's", amapQuery: "Chili's" }
      ], recommendationTitleKey: "餐廳推薦" },
      { time: "13:15", endTime: "17:00", type: "spot", titleKey: "day4_event3_title", descKey: "day4_event3_desc", recommendations: [
        { nameKey: "shop_jiuguang_name", descKey: "shop_jiuguang_desc", locationKey: "shop_jiuguang_location", gmapQuery: "久光百货(上海店)", amapQuery: "久光百货(上海店)" },
        { nameKey: "shop_loccitane_name", descKey: "shop_loccitane_desc", locationKey: "shop_loccitane_location", gmapQuery: "L'OCCITANE(兴业太古汇店)", amapQuery: "L'OCCITANE(兴业太古汇店)" },
        { nameKey: "shop_muji_name", descKey: "shop_muji_desc", locationKey: "shop_muji_location", gmapQuery: "MUJI(上海环贸广场店)", amapQuery: "MUJI(上海环贸广场店)" },
        { nameKey: "shop_citysuper_name", descKey: "shop_citysuper_desc", locationKey: "shop_citysuper_location", gmapQuery: "city'super(兴业太古汇店)", amapQuery: "city'super(兴业太古汇店)" },
        { nameKey: "shop_ole_name", descKey: "shop_ole_desc", locationKey: "shop_ole_location", gmapQuery: "Ole'精品超市(静安嘉里中心店)", amapQuery: "Ole'精品超市(静安嘉里中心店)" },
        { nameKey: "shop_heytea_name", descKey: "shop_heytea_desc", locationKey: "shop_heytea_location", gmapQuery: "喜茶(静安嘉里中心店)", amapQuery: "喜茶(静安嘉里中心店)" },
        { nameKey: "shop_lego_name", descKey: "shop_lego_desc", locationKey: "shop_lego_location", gmapQuery: "LEGO(上海人民广场店)", amapQuery: "LEGO(上海人民广场店)" },
        { nameKey: "shop_gentlemonster_name", descKey: "shop_gentlemonster_desc", locationKey: "shop_gentlemonster_location", gmapQuery: "Gentle Monster(上海淮海中路旗舰店)", amapQuery: "Gentle Monster(上海淮海中路旗舰店)" },
        { nameKey: "shop_aesop_name", descKey: "shop_aesop_desc", locationKey: "shop_aesop_location", gmapQuery: "Aesop(东平路店)", amapQuery: "Aesop(东平路店)" },
        { nameKey: "shop_diptyque_name", descKey: "shop_diptyque_desc", locationKey: "shop_diptyque_location", gmapQuery: "Diptyque(静安嘉里中心店)", amapQuery: "Diptyque(静安嘉里中心店)" },
        { nameKey: "shop_nikoand_name", descKey: "shop_nikoand_desc", locationKey: "shop_nikoand_location", gmapQuery: "Niko and... (上海淮海中路旗舰店)", amapQuery: "Niko and... (上海淮海中路旗舰店)" },
        { nameKey: "shop_beast_name", descKey: "shop_beast_desc", locationKey: "shop_beast_location", gmapQuery: "野兽派(静安嘉里中心店)", amapQuery: "野兽派(静安嘉里中心店)" },
        { nameKey: "shop_harmay_name", descKey: "shop_harmay_desc", locationKey: "shop_harmay_location", gmapQuery: "HARMAY(新天地店)", amapQuery: "HARMAY(新天地店)" },
        { nameKey: "shop_icicle_name", descKey: "shop_icicle_desc", locationKey: "shop_icicle_location", gmapQuery: "ICICLE(静安嘉里中心店)", amapQuery: "ICICLE(静安嘉里中心店)" },
        { nameKey: "shop_shangxia_name", descKey: "shop_shangxia_desc", locationKey: "shop_shangxia_location", gmapQuery: "上下(淮海中路店)", amapQuery: "上下(淮海中路店)" },
        { nameKey: "shop_laderach_name", descKey: "shop_laderach_desc", locationKey: "shop_laderach_location", gmapQuery: "Läderach(兴业太古汇店)", amapQuery: "Läderach(兴业太古汇店)" },
        { nameKey: "shop_goyard_name", descKey: "shop_goyard_desc", locationKey: "shop_goyard_location", gmapQuery: "Goyard(恒隆广场店)", amapQuery: "Goyard(恒隆广场店)" },
        { nameKey: "shop_moynat_name", descKey: "shop_moynat_desc", locationKey: "shop_moynat_location", gmapQuery: "Moynat(恒隆广场店)", amapQuery: "Moynat(恒隆广场店)" },
        { nameKey: "shop_delvaux_name", descKey: "shop_delvaux_desc", locationKey: "shop_delvaux_location", gmapQuery: "Delvaux(恒隆广场店)", amapQuery: "Delvaux(恒隆广场店)" },
        { nameKey: "shop_byredo_name", descKey: "shop_byredo_desc", locationKey: "shop_byredo_location", gmapQuery: "Byredo(静安嘉里中心店)", amapQuery: "Byredo(静安嘉里中心店)" },
        { nameKey: "shop_lelabo_name", descKey: "shop_lelabo_desc", locationKey: "shop_lelabo_location", gmapQuery: "Le Labo(新天地店)", amapQuery: "Le Labo(新天地店)" },
        { nameKey: "shop_acne_name", descKey: "shop_acne_desc", locationKey: "shop_acne_location", gmapQuery: "Acne Studios(静安嘉里中心店)", amapQuery: "Acne Studios(静安嘉里中心店)" },
        { nameKey: "shop_maison_name", descKey: "shop_maison_desc", locationKey: "shop_maison_location", gmapQuery: "Maison Margiela(静安嘉里中心店)", amapQuery: "Maison Margiela(静安嘉里中心店)" },
        { nameKey: "shop_thom_name", descKey: "shop_thom_desc", locationKey: "shop_thom_location", gmapQuery: "Thom Browne(芮欧百货店)", amapQuery: "Thom Browne(芮欧百货店)" },
        { nameKey: "shop_ami_name", descKey: "shop_ami_desc", locationKey: "shop_ami_location", gmapQuery: "Ami(静安嘉里中心店)", amapQuery: "Ami(静安嘉里中心店)" },
        { nameKey: "shop_comme_name", descKey: "shop_comme_desc", locationKey: "shop_comme_location", gmapQuery: "Comme des Garçons(I.T 兴业太古汇店)", amapQuery: "Comme des Garçons(I.T 兴业太古汇店)" },
        { nameKey: "shop_yohji_name", descKey: "shop_yohji_desc", locationKey: "shop_yohji_location", gmapQuery: "Yohji Yamamoto(I.T 兴业太古汇店)", amapQuery: "Yohji Yamamoto(I.T 兴业太古汇店)" },
        { nameKey: "shop_isseymiyake_name", descKey: "shop_isseymiyake_desc", locationKey: "shop_isseymiyake_location", gmapQuery: "Issey Miyake(I.T 兴业太古汇店)", amapQuery: "Issey Miyake(I.T 兴业太古汇店)" },
        { nameKey: "shop_baobao_name", descKey: "shop_baobao_desc", locationKey: "shop_baobao_location", gmapQuery: "Bao Bao Issey Miyake(I.T 兴业太古汇店)", amapQuery: "Bao Bao Issey Miyake(I.T 兴业太古汇店)" }
      ], recommendationTitleKey: "shop_list_title" },
      { time: "17:10", endTime: "19:00", type: "spot", titleKey: "day4_event4_title", descKey: "day4_event4_desc", recommendations: [
        { nameKey: "shop_zara_name", descKey: "shop_zara_desc", locationKey: "shop_zara_location", gmapQuery: "ZARA(南京东路店)", amapQuery: "ZARA(南京东路店)" },
        { nameKey: "shop_uniqlo_name", descKey: "shop_uniqlo_desc", locationKey: "shop_uniqlo_location", gmapQuery: "优衣库(南京西路全球旗舰店)", amapQuery: "优衣库(南京西路全球旗舰店)" },
        { nameKey: "shop_citysuper_name", descKey: "shop_citysuper_desc", locationKey: "shop_citysuper_location", gmapQuery: "city'super(兴业太古汇店)", amapQuery: "city'super(兴业太古汇店)" },
        { nameKey: "shop_ole_name", descKey: "shop_ole_desc", locationKey: "shop_ole_location", gmapQuery: "Ole'精品超市(静安嘉里中心店)", amapQuery: "Ole'精品超市(静安嘉里中心店)" },
        { nameKey: "shop_heytea_name", descKey: "shop_heytea_desc", locationKey: "shop_heytea_location", gmapQuery: "喜茶(南京东路步行街店)", amapQuery: "喜茶(南京东路步行街店)" },
        { nameKey: "shop_lego_name", descKey: "shop_lego_desc", locationKey: "shop_lego_location", gmapQuery: "LEGO(上海人民广场店)", amapQuery: "LEGO(上海人民广场店)" },
        { nameKey: "shop_gentlemonster_name", descKey: "shop_gentlemonster_desc", locationKey: "shop_gentlemonster_location", gmapQuery: "Gentle Monster(上海淮海中路旗舰店)", amapQuery: "Gentle Monster(上海淮海中路旗舰店)" },
        { nameKey: "shop_aesop_name", descKey: "shop_aesop_desc", locationKey: "shop_aesop_location", gmapQuery: "Aesop(东平路店)", amapQuery: "Aesop(东平路店)" },
        { nameKey: "shop_diptyque_name", descKey: "shop_diptyque_desc", locationKey: "shop_diptyque_location", gmapQuery: "Diptyque(静安嘉里中心店)", amapQuery: "Diptyque(静安嘉里中心店)" },
        { nameKey: "shop_nikoand_name", descKey: "shop_nikoand_desc", locationKey: "shop_nikoand_location", gmapQuery: "Niko and... (上海淮海中路旗舰店)", amapQuery: "Niko and... (上海淮海中路旗舰店)" },
        { nameKey: "shop_beast_name", descKey: "shop_beast_desc", locationKey: "shop_beast_location", gmapQuery: "野兽派(静安嘉里中心店)", amapQuery: "野兽派(静安嘉里中心店)" },
        { nameKey: "shop_harmay_name", descKey: "shop_harmay_desc", locationKey: "shop_harmay_location", gmapQuery: "HARMAY(新天地店)", amapQuery: "HARMAY(新天地店)" },
        { nameKey: "shop_icicle_name", descKey: "shop_icicle_desc", locationKey: "shop_icicle_location", gmapQuery: "ICICLE(静安嘉里中心店)", amapQuery: "ICICLE(静安嘉里中心店)" },
        { nameKey: "shop_shangxia_name", descKey: "shop_shangxia_desc", locationKey: "shop_shangxia_location", gmapQuery: "上下(淮海中路店)", amapQuery: "上下(淮海中路店)" },
        { nameKey: "shop_muji_name", descKey: "shop_muji_desc", locationKey: "shop_muji_location", gmapQuery: "MUJI(上海环贸广场店)", amapQuery: "MUJI(上海环贸广场店)" },
        { nameKey: "shop_laderach_name", descKey: "shop_laderach_desc", locationKey: "shop_laderach_location", gmapQuery: "Läderach(兴业太古汇店)", amapQuery: "Läderach(兴业太古汇店)" },
        { nameKey: "shop_goyard_name", descKey: "shop_goyard_desc", locationKey: "shop_goyard_location", gmapQuery: "Goyard(恒隆广场店)", amapQuery: "Goyard(恒隆广场店)" },
        { nameKey: "shop_moynat_name", descKey: "shop_moynat_desc", locationKey: "shop_moynat_location", gmapQuery: "Moynat(恒隆广场店)", amapQuery: "Moynat(恒隆广场店)" },
        { nameKey: "shop_delvaux_name", descKey: "shop_delvaux_desc", locationKey: "shop_delvaux_location", gmapQuery: "Delvaux(恒隆广场店)", amapQuery: "Delvaux(恒隆广场店)" },
        { nameKey: "shop_byredo_name", descKey: "shop_byredo_desc", locationKey: "shop_byredo_location", gmapQuery: "Byredo(静安嘉里中心店)", amapQuery: "Byredo(静安嘉里中心店)" },
        { nameKey: "shop_lelabo_name", descKey: "shop_lelabo_desc", locationKey: "shop_lelabo_location", gmapQuery: "Le Labo(新天地店)", amapQuery: "Le Labo(新天地店)" },
        { nameKey: "shop_acne_name", descKey: "shop_acne_desc", locationKey: "shop_acne_location", gmapQuery: "Acne Studios(静安嘉里中心店)", amapQuery: "Acne Studios(静安嘉里中心店)" },
        { nameKey: "shop_maison_name", descKey: "shop_maison_desc", locationKey: "shop_maison_location", gmapQuery: "Maison Margiela(静安嘉里中心店)", amapQuery: "Maison Margiela(静安嘉里中心店)" },
        { nameKey: "shop_thom_name", descKey: "shop_thom_desc", locationKey: "shop_thom_location", gmapQuery: "Thom Browne(芮欧百货店)", amapQuery: "Thom Browne(芮欧百货店)" },
        { nameKey: "shop_ami_name", descKey: "shop_ami_desc", locationKey: "shop_ami_location", gmapQuery: "Ami(静安嘉里中心店)", amapQuery: "Ami(静安嘉里中心店)" },
        { nameKey: "shop_comme_name", descKey: "shop_comme_desc", locationKey: "shop_comme_location", gmapQuery: "Comme des Garçons(I.T 兴业太古汇店)", amapQuery: "Comme des Garçons(I.T 兴业太古汇店)" },
        { nameKey: "shop_yohji_name", descKey: "shop_yohji_desc", locationKey: "shop_yohji_location", gmapQuery: "Yohji Yamamoto(I.T 兴业太古汇店)", amapQuery: "Yohji Yamamoto(I.T 兴业太古汇店)" },
        { nameKey: "shop_isseymiyake_name", descKey: "shop_isseymiyake_desc", locationKey: "shop_isseymiyake_location", gmapQuery: "Issey Miyake(I.T 兴业太古汇店)", amapQuery: "Issey Miyake(I.T 兴业太古汇店)" },
        { nameKey: "shop_baobao_name", descKey: "shop_baobao_desc", locationKey: "shop_baobao_location", gmapQuery: "Bao Bao Issey Miyake(I.T 兴业太古汇店)", amapQuery: "Bao Bao Issey Miyake(I.T 兴业太古汇店)" }
      ], recommendationTitleKey: "shop_list_title" },
      { time: "19:00", endTime: null, type: "food", titleKey: "day4_event5_title", descKey: "day4_event5_desc", recommendations: [
        { nameKey: "resto_laolao_name", descKey: "resto_laolao_desc", locationKey: "resto_laolao_location", gmapQuery: "上海姥姥家常饭馆(南京东路店)", amapQuery: "上海姥姥家常饭馆(南京东路店)" },
        { nameKey: "resto_shen_name", descKey: "resto_shen_desc", locationKey: "resto_shen_location", gmapQuery: "沈大成(南京东路店)", amapQuery: "沈大成(南京东路店)" },
        { nameKey: "resto_yanyun_name", descKey: "resto_yanyun_desc", locationKey: "resto_yanyun_location", gmapQuery: "燕云楼(南京东路店)", amapQuery: "燕云楼(南京东路店)" },
        { nameKey: "resto_laosheng_name", descKey: "resto_laosheng_desc", locationKey: "resto_laosheng_location", gmapQuery: "老盛昌汤包馆(南京东路店)", amapQuery: "老盛昌汤包馆(南京东路店)" },
        { nameKey: "resto_nanjing_name", descKey: "resto_nanjing_desc", locationKey: "resto_nanjing_location", gmapQuery: "南京大牌档(第一百货店)", amapQuery: "南京大牌档(第一百货店)" },
        { nameKey: "resto_xiaozao_name", descKey: "resto_xiaozao_desc", locationKey: "resto_xiaozao_location", gmapQuery: "小灶王(南京东路)", amapQuery: "小灶王(南京东路)" },
        { nameKey: "resto_wangbaohe_name", descKey: "resto_wangbaohe_desc", locationKey: "resto_wangbaohe_location", gmapQuery: "王宝和酒家(南京东路)", amapQuery: "王宝和酒家(南京东路)" },
        { nameKey: "resto_dexing_name", descKey: "resto_dexing_desc", locationKey: "resto_dexing_location", gmapQuery: "德兴馆(广东路总店)", amapQuery: "德兴馆(广东路总店)" },
        { nameKey: "resto_gongdelin_name", descKey: "resto_gongdelin_desc", locationKey: "resto_gongdelin_location", gmapQuery: "功德林(南京西路店)", amapQuery: "功德林(南京西路店)" },
        { nameKey: "resto_meixin_name", descKey: "resto_meixin_desc", locationKey: "resto_meixin_location", gmapQuery: "美心粤菜(新世界大丸百货店)", amapQuery: "美心粤菜(新世界大丸百货店)" },
        { nameKey: "resto_taoyuan_name", descKey: "resto_taoyuan_desc", locationKey: "resto_taoyuan_location", gmapQuery: "桃园眷村(新天地店)", amapQuery: "桃园眷村(新天地店)" },
        { nameKey: "resto_heytea_name", descKey: "resto_heytea_desc", locationKey: "resto_heytea_location", gmapQuery: "喜茶(南京东路步行街店)", amapQuery: "喜茶(南京东路步行街店)" },
        { nameKey: "resto_lelecha_name", descKey: "resto_lelecha_desc", locationKey: "resto_lelecha_location", gmapQuery: "乐乐茶(人民广场店)", amapQuery: "乐乐茶(人民广场店)" },
        { nameKey: "resto_starbucks_name", descKey: "resto_starbucks_desc", locationKey: "resto_starbucks_location", gmapQuery: "星巴克臻选上海烘焙工坊", amapQuery: "星巴克臻选上海烘焙工坊" },
        { nameKey: "resto_peking_name", descKey: "resto_peking_desc", locationKey: "resto_peking_location", gmapQuery: "全聚德(南京东路店)", amapQuery: "全聚德(南京东路店)" },
        { nameKey: "resto_firstfood_name", descKey: "resto_firstfood_desc", locationKey: "resto_firstfood_location", gmapQuery: "第一食品商店(南京东路店)", amapQuery: "第一食品商店(南京东路店)" },
        { nameKey: "resto_taikang_name", descKey: "resto_taikang_desc", locationKey: "resto_taikang_location", gmapQuery: "泰康食品(南京东路店)", amapQuery: "泰康食品(南京东路店)" },
        { nameKey: "resto_zhenlao_name", descKey: "resto_zhenlao_desc", locationKey: "resto_zhenlao_location", gmapQuery: "真老大房(南京东路店)", amapQuery: "真老大房(南京东路店)" },
        { nameKey: "resto_guangming_name", descKey: "resto_guangming_desc", locationKey: "resto_guangming_location", gmapQuery: "光明邨大酒家(淮海中路店)", amapQuery: "光明邨大酒家(淮海中路店)" },
        { nameKey: "resto_hongzhang_name", descKey: "resto_hongzhang_desc", locationKey: "resto_hongzhang_location", gmapQuery: "洪长兴(广西北路店)", amapQuery: "洪长兴(广西北路店)" },
        { nameKey: "resto_xiaoshaoxing_name", descKey: "resto_xiaoshaoxing_desc", locationKey: "resto_xiaoshaoxing_location", gmapQuery: "小绍兴(云南南路店)", amapQuery: "小绍兴(云南南路店)" },
        { nameKey: "resto_wufangzhai_name", descKey: "resto_wufangzhai_desc", locationKey: "resto_wufangzhai_location", gmapQuery: "五芳斋(南京东路店)", amapQuery: "五芳斋(南京东路店)" },
        { nameKey: "resto_ningbo_name", descKey: "resto_ningbo_desc", locationKey: "resto_ningbo_location", gmapQuery: "宁波汤糰店(城隍庙)", amapQuery: "宁波汤糰店(城隍庙)" },
        { nameKey: "resto_laopai_name", descKey: "resto_ada_name", gmapQuery: "阿大葱油饼", amapQuery: "阿大葱油饼" },
        { nameKey: "resto_shengjian_name", descKey: "resto_shengjian_desc", gmapQuery: "生煎馒头", amapQuery: "生煎馒头" },
        { nameKey: "resto_m&m_name", descKey: "resto_m&m_desc", locationKey: "resto_mm_location", gmapQuery: "M&M's World(上海店)", amapQuery: "M&M's World(上海店)" },
        { nameKey: "resto_disney_name", descKey: "resto_disney_desc", locationKey: "resto_disney_location", gmapQuery: "迪士尼旗舰店(陆家嘴)", amapQuery: "迪士尼旗舰店(陆家嘴)" },
        { nameKey: "resto_popmart_name", descKey: "resto_popmart_desc", locationKey: "resto_popmart_location", gmapQuery: "POP MART(南京东路店)", amapQuery: "POP MART(南京东路店)" }
      ]},
    ]
  },
  {
    day: 5,
    date: "12/11",
    weekday: "Thu",
    titleKey: "day5_title",
    hotelKey: "day5_hotel",
    hotelGmapQuery: "Eco Tree Hotel Causeway Bay",
    hotelAmapQuery: "Eco Tree Hotel Causeway Bay",
    events: [
      { 
        time: "09:30", endTime: "10:10", type: "transport", titleKey: "day5_event1_combined_title",
        subEvents: [
          { time: "09:30", titleKey: "day5_sub_event1_title", gmapQuery: "https://maps.app.goo.gl/ooY3qW13eRpf8H2k8", amapQuery: "Renaissance Shanghai Yu Garden Hotel", appLink: "blacklane://" },
          { time: "10:02", titleKey: "day5_sub_maglev_title", gmapQuery: "https://maps.app.goo.gl/8fn7sFr7gSRb8rkb8", amapQuery: "https://maps.app.goo.gl/8fn7sFr7gSRb8rkb8" }
        ]
      },
      { 
        time: "10:30", endTime: "12:30", type: "spot", titleKey: "day5_event_lounge_title", descKey: "day5_event_lounge_desc", 
        gmapQuery: "https://maps.app.goo.gl/AAxw3k1HAmD72H7GA",
        amapQuery: "https://maps.app.goo.gl/AAxw3k1HAmD72H7GA",
        qrCodes: [{ path: "/qrcodes/dragonpass1211.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "12:50", endTime: "15:55", type: "flight", titleKey: "day5_event2_title",
        subEvents: [
          { time: "12:50", titleKey: "day5_sub_event2_title", descKey: "day5_sub_event2_desc" },
          { time: "15:55", titleKey: "day5_sub_event3_title" }
        ]
      },
      { 
        time: "16:30", endTime: "17:00", type: "train", titleKey: "day5_event3_title",
        gmapQuery: "Hong Kong International Airport",
        amapQuery: "Hong Kong International Airport",
        qrCodeModalTitleKey: "qr_modal_title_airport_express",
        qrCodes: [{ path: "/qrcodes/passenger1.jpg" }, { path: "/qrcodes/passenger2.jpg" }]
      },
      { 
        time: "17:00", endTime: "18:00", type: "hotel", titleKey: "day5_event_checkin_title", descKey: "day5_event_checkin_desc", 
        gmapQuery: "Eco Tree Hotel Causeway Bay",
        amapQuery: "Eco Tree Hotel Causeway Bay",
        pdfLink: "/PDF/1211-1212 香港.pdf"
      },
      { time: "19:00", endTime: "20:00", type: "food", titleKey: "day5_event4_title", descKey: "day5_event4_desc", gmapQuery: "華嫂冰室 灣仔", amapQuery: "華嫂冰室 灣仔" },
      { time: "20:00", endTime: "20:30", type: "food", titleKey: "day5_event_bakehouse_title", descKey: "day5_event_bakehouse_desc", gmapQuery: "Bakehouse 灣仔", amapQuery: "Bakehouse 灣仔" },
    ]
  },
  {
    day: 6,
    date: "12/12",
    weekday: "Fri",
    titleKey: "day6_title",
    hotelKey: null,
    hotelGmapQuery: null,
    hotelAmapQuery: null,
    events: [
      { time: "08:00", endTime: "08:45", type: "food", titleKey: "day6_event2_title", descKey: "day6_event2_desc", recommendations: [
        { nameKey: "resto_kamfung_name", descKey: "resto_kamfung_desc", locationKey: "resto_kamfung_location", gmapQuery: "金鳳茶餐廳", amapQuery: "金鳳茶餐廳" },
        { nameKey: "resto_tsuiwah_name", descKey: "resto_tsuiwah_desc", locationKey: "resto_tsuiwah_location", gmapQuery: "翠華餐廳(銅鑼灣店)", amapQuery: "翠華餐廳(銅鑼灣店)" },
        { nameKey: "resto_joyhing_name", descKey: "resto_joyhing_desc", locationKey: "resto_joyhing_location", gmapQuery: "再興燒臘飯店", amapQuery: "再興燒臘飯店" },
        { nameKey: "resto_australia_name", descKey: "resto_australia_desc", locationKey: "resto_australia_location", gmapQuery: "澳洲牛奶公司", amapQuery: "澳洲牛奶公司" },
        { nameKey: "resto_capital_name", descKey: "resto_capital_desc", locationKey: "resto_capital_location", gmapQuery: "華星冰室(灣仔店)", amapQuery: "華星冰室(灣仔店)" },
        { nameKey: "resto_lanfong_name", descKey: "resto_lanfong_desc", locationKey: "resto_lanfong_location", gmapQuery: "蘭芳園(中環總店)", amapQuery: "蘭芳園(中環總店)" },
        { nameKey: "resto_timhowan_name", descKey: "resto_timhowan_desc", locationKey: "resto_timhowan_location", gmapQuery: "添好運(中環店)", amapQuery: "添好運(中環店)" },
        { nameKey: "resto_congee_name", descKey: "resto_congee_desc", locationKey: "resto_congee_location", gmapQuery: "靠得住靚粥(灣仔店)", amapQuery: "靠得住靚粥(灣仔店)" },
        { nameKey: "resto_bakehouse_name", descKey: "resto_bakehouse_desc", locationKey: "resto_bakehouse_location", gmapQuery: "Bakehouse(灣仔店)", amapQuery: "Bakehouse(灣仔店)" },
        { nameKey: "resto_honolulu_name", descKey: "resto_honolulu_desc", locationKey: "resto_honolulu_location", gmapQuery: "檀島咖啡餅店(灣仔店)", amapQuery: "檀島咖啡餅店(灣仔店)" },
        { nameKey: "resto_yatloke_name", descKey: "resto_yatloke_desc", locationKey: "resto_yatloke_location", gmapQuery: "一樂燒鵝", amapQuery: "一樂燒鵝" },
        { nameKey: "resto_kaukee_name", descKey: "resto_kaukee_desc", locationKey: "resto_kaukee_location", gmapQuery: "九記牛腩", amapQuery: "九記牛腩" },
        { nameKey: "resto_singheung_name", descKey: "resto_singheung_desc", locationKey: "resto_singheung_location", gmapQuery: "勝香園", amapQuery: "勝香園" },
        { nameKey: "resto_mak_name", descKey: "resto_mak_desc", locationKey: "resto_mak_location", gmapQuery: "麥奀雲吞麵世家(中環店)", amapQuery: "麥奀雲吞麵世家(中環店)" },
        { nameKey: "resto_fourseasons_name", descKey: "resto_fourseasons_desc", locationKey: "resto_fourseasons_location", gmapQuery: "四季煲仔飯", amapQuery: "四季煲仔飯" },
        { nameKey: "resto_kamwah_name", descKey: "resto_kamwah_desc", locationKey: "resto_kamwah_location", gmapQuery: "金華冰廳", amapQuery: "金華冰廳" },
        { nameKey: "resto_mido_name", descKey: "resto_mido_desc", locationKey: "resto_mido_location", gmapQuery: "美都餐室", amapQuery: "美都餐室" },
        { nameKey: "resto_star_name", descKey: "resto_star_desc", locationKey: "resto_star_location", gmapQuery: "十字冰室", amapQuery: "十字冰室" },
        { nameKey: "resto_lawmark_name", descKey: "resto_lawmark_desc", locationKey: "resto_lawmark_location", gmapQuery: "羅富記粥麵專家", amapQuery: "羅富記粥麵專家" },
        { nameKey: "resto_sangkee_name", descKey: "resto_sangkee_desc", locationKey: "resto_sangkee_location", gmapQuery: "生記粥品專家", amapQuery: "生記粥品專家" },
        { nameKey: "resto_cheung_name", descKey: "resto_cheung_desc", locationKey: "resto_cheung_location", gmapQuery: "祥香茶餐廳", amapQuery: "祥香茶餐廳" },
        { nameKey: "resto_for_kee_name", descKey: "resto_for_kee_desc", locationKey: "resto_for_kee_location", gmapQuery: "科記咖啡餐室", amapQuery: "科記咖啡餐室" },
        { nameKey: "resto_ho_hung_kee_name", descKey: "resto_ho_hung_kee_desc", locationKey: "resto_ho_hung_kee_location", gmapQuery: "何洪記", amapQuery: "何洪記" },
        { nameKey: "resto_wong_chi_kei_name", descKey: "resto_wong_chi_kei_desc", locationKey: "resto_wong_chi_kei_location", gmapQuery: "黃枝記", amapQuery: "黃枝記" },
        { nameKey: "resto_one_dim_sum_name", descKey: "resto_one_dim_sum_desc", locationKey: "resto_one_dim_sum_location", gmapQuery: "一點心", amapQuery: "一點心" },
        { nameKey: "resto_lin_heung_name", descKey: "resto_lin_heung_desc", locationKey: "resto_lin_heung_location", gmapQuery: "蓮香樓", amapQuery: "蓮香樓" }
      ]},
      { time: "08:45", endTime: "09:15", type: "spot", titleKey: "day6_event1_title", descKey: null, gmapQuery: "Victoria Park, Hong Kong", amapQuery: "Victoria Park, Hong Kong" },
      { time: "09:15", endTime: "09:45", type: "food", titleKey: "day5_event_bakehouse_title", descKey: "day5_event_bakehouse_desc", gmapQuery: "https://maps.app.goo.gl/zyEgxSYm4B8c4qLLA", amapQuery: "Bakehouse 銅鑼灣" },
      { time: "09:45", endTime: "10:45", type: "spot", titleKey: "day6_event_central_stroll_title", descKey: "day6_event_central_stroll_desc", recommendations: [
        { nameKey: "souv_jenny_bakery_name", descKey: "souv_jenny_bakery_desc", locationKey: "souv_jenny_bakery_location", gmapQuery: "珍妮曲奇 Jenny Bakery 中環", amapQuery: "珍妮曲奇 Jenny Bakery 中環" },
        { nameKey: "souv_mr_simms_name", descKey: "souv_mr_simms_desc", locationKey: "souv_mr_simms_location", gmapQuery: "Mr Simms Olde Sweet Shoppe 中環", amapQuery: "Mr Simms Olde Sweet Shoppe 中環" },
        { nameKey: "souv_marks_spencer_name", descKey: "souv_marks_spencer_desc", locationKey: "souv_marks_spencer_location", gmapQuery: "Marks & Spencer Food 中環", amapQuery: "Marks & Spencer Food 中環" },
        { nameKey: "souv_goods_of_desire_name", descKey: "souv_goods_of_desire_desc", locationKey: "souv_goods_of_desire_location", gmapQuery: "G.O.D. 住好啲 中環", amapQuery: "G.O.D. 住好啲 中環" },
        { nameKey: "souv_pmq_name", descKey: "souv_pmq_desc", locationKey: "souv_pmq_location", gmapQuery: "PMQ 元創方", amapQuery: "PMQ 元創方" },
        { nameKey: "souv_tai_cheong_name", descKey: "souv_tai_cheong_desc", locationKey: "souv_tai_cheong_location", gmapQuery: "泰昌餅家 中環", amapQuery: "泰昌餅家 中環" },
        { nameKey: "souv_graham_street_market_name", descKey: "souv_graham_street_market_desc", locationKey: "souv_graham_street_market_location", gmapQuery: "嘉咸街市集", amapQuery: "嘉咸街市集" },
        { nameKey: "souv_pottinger_street_name", descKey: "souv_pottinger_street_desc", locationKey: "souv_pottinger_street_location", gmapQuery: "砵甸乍街 石板街", amapQuery: "砵甸乍街 石板街" },
        { nameKey: "souv_wing_wah_name", descKey: "souv_wing_wah_desc", locationKey: "souv_wing_wah_location", gmapQuery: "榮華餅家 中環", amapQuery: "榮華餅家 中環" },
        { nameKey: "souv_kee_wah_name", descKey: "souv_kee_wah_desc", locationKey: "souv_kee_wah_location", gmapQuery: "奇華餅家 中環", amapQuery: "奇華餅家 中環" },
        { nameKey: "souv_lemon_king_name", descKey: "souv_lemon_king_desc", locationKey: "souv_lemon_king_location", gmapQuery: "檸檬王 上環", amapQuery: "檸檬王 上環" },
        { nameKey: "souv_deuk_heung_name", descKey: "souv_deuk_heung_desc", locationKey: "souv_deuk_heung_location", gmapQuery: "德祥號", amapQuery: "德祥號" },
        { nameKey: "souv_penhaligons_name", descKey: "souv_penhaligons_desc", locationKey: "souv_penhaligons_location", gmapQuery: "Penhaligon's ifc", amapQuery: "Penhaligon's ifc" },
        { nameKey: "souv_city_super_name", descKey: "souv_city_super_desc", locationKey: "souv_city_super_location", gmapQuery: "city'super ifc", amapQuery: "city'super ifc" },
        { nameKey: "souv_bookazine_name", descKey: "souv_bookazine_desc", locationKey: "souv_bookazine_location", gmapQuery: "Bookazine ifc", amapQuery: "Bookazine ifc" },
        { nameKey: "souv_cat_street_name", descKey: "souv_cat_street_desc", locationKey: "souv_cat_street_location", gmapQuery: "摩羅上街", amapQuery: "摩羅上街" },
        { nameKey: "souv_man_mo_temple_name", descKey: "souv_man_mo_temple_desc", locationKey: "souv_man_mo_temple_location", gmapQuery: "文武廟", amapQuery: "文武廟" },
        { nameKey: "souv_starbucks_concept_name", descKey: "souv_starbucks_concept_desc", locationKey: "souv_starbucks_concept_location", gmapQuery: "星巴克冰室角落", amapQuery: "星巴克冰室角落" },
        { nameKey: "souv_bamford_name", descKey: "souv_bamford_desc", locationKey: "souv_bamford_location", gmapQuery: "Bamford ifc", amapQuery: "Bamford ifc" },
        { nameKey: "souv_loveramics_name", descKey: "souv_loveramics_desc", locationKey: "souv_loveramics_location", gmapQuery: "Loveramics(銅鑼灣)", amapQuery: "Loveramics(銅鑼灣)" },
        { nameKey: "souv_kurt_geiger_name", descKey: "souv_kurt_geiger_desc", locationKey: "souv_kurt_geiger_location", gmapQuery: "Kurt Geiger ifc", amapQuery: "Kurt Geiger ifc" },
        { nameKey: "souv_kapok_name", descKey: "souv_kapok_desc", locationKey: "souv_kapok_location", gmapQuery: "Kapok PMQ", amapQuery: "Kapok PMQ" },
        { nameKey: "souv_homeless_name", descKey: "souv_homeless_desc", locationKey: "souv_homeless_location", gmapQuery: "Homeless 中環", amapQuery: "Homeless 中環" },
        { nameKey: "souv_le_creuset_name", descKey: "souv_le_creuset_desc", locationKey: "souv_le_creuset_location", gmapQuery: "Le Creuset 中環", amapQuery: "Le Creuset 中環" },
        { nameKey: "souv_diptyque_name", descKey: "souv_diptyque_desc", locationKey: "souv_diptyque_location", gmapQuery: "Diptyque ifc", amapQuery: "Diptyque ifc" },
        { nameKey: "souv_aesop_name", descKey: "souv_aesop_desc", locationKey: "souv_aesop_location", gmapQuery: "Aesop ifc", amapQuery: "Aesop ifc" },
        { nameKey: "souv_lululemon_name", descKey: "souv_lululemon_desc", locationKey: "souv_lululemon_location", gmapQuery: "Lululemon ifc", amapQuery: "Lululemon ifc" },
        { nameKey: "souv_paper_art_name", descKey: "souv_paper_art_desc", locationKey: "souv_paper_art_location", gmapQuery: "中環 文具", amapQuery: "中環 文具" }
      ], recommendationTitleKey: "souvenir_list_title" },
      {
        time: "10:45", endTime: "11:15", type: "train", titleKey: "day6_sub_event4b_title",
        gmapQuery: "香港國際機場", amapQuery: "香港國際機場",
        qrCodeModalTitleKey: "qr_modal_title_airport_express",
        qrCodes: [{ path: "/qrcodes/passenger1_return.jpg" }, { path: "/qrcodes/passenger2_return.jpg" }]
      },
      { 
        time: "12:00", endTime: "13:30", type: "spot", titleKey: "day6_event_lounge_title", descKey: "day6_event_lounge_desc",
        gmapQuery: "Plaza Premium Lounge, Hong Kong International Airport", amapQuery: "Plaza Premium Lounge, Hong Kong International Airport",
        qrCodes: [{ path: "/qrcodes/dragonpass1212.jpg", name: "龍騰貴賓室" }]
      },
      { 
        time: "14:00", endTime: "16:00", type: "flight", titleKey: "day6_event5_title",
        subEvents: [
          { time: "14:00", titleKey: "day6_sub_event1_title", descKey: "day6_sub_event1_desc" },
          { time: "16:00", titleKey: "day6_sub_event2_title" }
        ]
      },
    ]
  }
];
