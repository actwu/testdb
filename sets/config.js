
  template = [
    screens = document.querySelector('#screen'),
    setout=`class="big-my fullscreen bg"`,    
    temp = "iframe"
  ]
  database = [

    type = "https://",
    site = "google.com/",
    dbtype = "macros",
    subject="/s/",

    icsdb ="AKfycbzViRVR0lmLr7p3nWc-tdHyEG-PwM0T42exeunsRQCL2ZXVyVfInddqrIDicE3Ftzyx",
    icsoutput=icsdb,
    dbpost = [`${type}script.${site}${dbtype}${subject}${icsdb}/exec`],

    read_reference = dbget = [`${type}script.${site}${dbtype}${subject}${icsoutput}/exec`],
    ,
  ]
  