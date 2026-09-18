// IP info fetch with timeout
    var t=new XMLHttpRequest();t.timeout=5000;
    t.onreadystatechange=function(){if(4==this.readyState&&200==this.status){try{var a=JSON.parse(this.responseText),b=new Date();document.getElementById('isp').textContent='Operateur: '+a.connection.isp;document.getElementById('ip_add').textContent='Addresse IP: '+a.ip+' '+b.toLocaleString('FR-FR');document.getElementById('city').textContent='Ville: '+a.city+', '+a.country}catch(e){}}};
    t.open('GET','https://ipwho.is/?lang=en',true);t.send();