# A very simple Bottle Hello World app for you to get started with...
from bottle import default_app, route, static_file, request
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import smtplib
import requests, uuid

import pymysql
from sshtunnel import SSHTunnelForwarder

conf = """<html><head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">

<style>
    * {
        font-family: 'Outfit', sans-serif;
font-family: 'Roboto', sans-serif;
    }
</style>
    </head>
	<body>
	<div style="width: 100%; margin: auto; background-color: #121212; border-radius: 8px;">
    <div style="width: 90%; padding: 5%; margin: auto; background-color: #121212; text-align: center; border-radius: 8px;">
    <img src="https://adfolio.pythonanywhere.com/images/logo-red.png" style="width: 80px; aspect-ratio: 1; padding-top: 5%; padding-bottom: 5%;" />

    <div style="width: 90%; padding: 5%; background-color: #fff; margin: auto; border-radius: 8px; color: #000; text-align: left;">
    <h1 style="font-size: 1em;">From """

conb = """</h1><p>"""

conc = """</p></div></div><p style="color: #fff; text-align: center; margin: auto; width: 70%; padding: 5%; border-top: 5px solid #fff; font-size: small;">adrieloloko.com</p>
        </div>
	</body>
</html>"""

rv1 = """<html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head> <body style="width: 100%; border: 2px solid #086658; background-color: #ffffff; color: #000000;"> <div style="padding: 20px; background-color: #086658;"> <img src="https://rovatel.com.ng/wp-content/uploads/2023/05/white-logo.png" style="height: 40px; width: auto;" alt="" /> </div> <div style="padding: 20px; background: #fff;"> <p style="font-weight: 400; font-size: 12px;">08 May 2024</p> <h1 style="font-size: 20px; font-weight: 600; line-height: 1.5rem; margin-top: 10px;">
"""

rv2 = """</h1> <span style="color: #000000; padding-top: 20px; font-weight: 400; white-space: pre-wrap">"""

rv3 = """</span> <p style="font-weight: 700; margin-top: 24px;">Signed:</p> <p style="font-weight: 700; line-height: 0px;">Adriel Oloko</p> </div> <div style="background-color: #086658; width: 100%; box-shadow: 0px 4px 4px 0px #00000010;"> <table style="background-color: #086658; width: 66%; max-width: 272px; height: 64px; margin: 0 auto; text-align: center;"> <tr> 
<td style="text-align: center; width: 25%;"><img style="width: 24px; margin: 0 auto;" src="https://adrieloloko.com/1612d04ec41d8d8f77559665e9ac19f3/images/facebook-f-brands.png" /></td>
<td style="text-align: center; width: 25%;"><img style="width: 24px; margin: 0 auto;" src="https://adrieloloko.com/1612d04ec41d8d8f77559665e9ac19f3/images/twitter-brands.png" /></td> <td style="text-align: center; width: 25%;"><img style="width: 24px; margin: 0 auto;" src="https://adrieloloko.com/1612d04ec41d8d8f77559665e9ac19f3/images/instagram-brands.png" /></td> <td style="text-align: center; width: 25%;"><img style="width: 24px; margin: 0 auto;" src="https://adrieloloko.com/1612d04ec41d8d8f77559665e9ac19f3/images/tiktok-white-icon.png" /></td> </tr> </table> </div> <p style="padding: 10px 20px; font-weight: 600;">For any complaints or enquiry contact <a href="mailto:hr@rovatel.com.ng" style="color: blue;">hr@rovatel.com.ng</a></p> </body> </html>
"""

def mail_sender(sender, password, receiver, subject, content):
	#Setup the MIME
	message = MIMEMultipart()
	message['From'] = sender
	message['To'] = receiver
	message['Subject'] = subject

	session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
	session.starttls() #enable security
	session.login(sender, password)

	part2 = MIMEText(content, 'html')

	message.attach(part2)
	text = message.as_string()

	session.sendmail(sender, receiver, text)
	session.quit()
	print('Mail Sent')



@route("/")
def home():
    return static_file("index.html", root="/home/proffdve/adrieloloko/")

@route("/about")
def homee():
    return static_file("about.html", root="/home/proffdve/adrieloloko/")

@route("/test")
def home():
    return static_file("test.html", root="/home/proffdve/adrieloloko/")


@route('/contact-form', method='post')
def contact_form():
    em = request.forms.get('email')
    ms = request.forms.get('message')

    mail_sender('adrieloloko6@gmail.com', 'gmcmdtdlfxzxovyv', 'contactus@adrieloloko.com', 'Web Mail - '+em, conf+em+conb+ms+conc)
    #return (True)


@route("/<tp>/<path>")
def home(tp, path):
    return static_file(path, root="/home/proffdve/adrieloloko/"+tp+"/")

@route("/<project>/<file>")
def home_p(project, file):
    return static_file(path, root="/home/proffdve/adrieloloko/"+project+"/")

@route("/<project>/<folder>/<file>")
def home_pff(project, folder, file):
    return static_file(file, root="/home/proffdve/adrieloloko/"+project+"/"+folder+"/")


@route("/1612d04ec41d8d", method="POST")
def rovatel_mail():
    #session = smtplib.SMTP_SSL('adrieloloko.com', 465, context=ssl.create_default_context()) #enable security
    receiver = request.forms.get('recipient')
    subject = request.forms.get('subject')
    mainMessage = request.forms.get('message')

    mail_sender('adrieloloko6@gmail.com', 'gmcmdtdlfxzxovyv', 'demilade@rovatel.com.ng', subject, rv1+subject+rv2+mainMessage+rv3)
    
@route('/kkj')
def kkj():
    ssh_ip = '162.254.39.4'
    ssh_port = 21098
    username = 'proffdve'
    password = '4DR13L5K4R*q'
    
    with SSHTunnelForwarder(
        (ssh_ip, ssh_port),
        ssh_username = username,
        ssh_password = password,
        remote_bind_address=('localhost', 3306),
    ) as server:
        connection = pymysql.connect(
            host='127.0.0.1', 
            port = server.local_bind_port,
            password=password, 
            user='proffdve_admin',
            #database='proffdve_users'
        )
        
        cursor = connection.cursor()
        cursor.execute('SELECT VERSION();')
        data = cursor.fetchone()
    
        return(data)
        connection.close()
application = default_app()

