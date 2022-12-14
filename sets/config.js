
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

    icsdb ="AKfycbwnWcnY14eUCzQcA9B-UGW9GSkQX917EOPKRvSC8NgqD6qa8PHUHosRLGIl9pWzB_nB",
    icsoutput="AKfycbwOzLOFk6tAD3-Ax4ZLTbxzedT2rTBo1WlDzNwpU3sUDECdQ2QuK6XwpRdSKMxS4iEA",
    dbpost = [`${type}script.${site}${dbtype}${subject}${icsdb}/exec`],

    read_reference = dbget = [`${type}script.${site}${dbtype}${subject}${icsoutput}/exec`],
    ,
  ]
  