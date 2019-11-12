from sense_hat import SenseHat
import os
from time import sleep
import datetime

import firebase_admin
from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate('./ServiceAccountKey.json')
default_app = initialize_app(cred)
db = firestore.client()
dht_ref = db.collection('dht')
lights_ref = db.collection('lights')
sockets_ref = db.collection('Sockets')
doors_ref = db.collection('doors')
alerts_ref = db.collection('alerts')

docs = dht_ref.stream()
lights = lights_ref.stream()
sockets = sockets_ref.stream()
doors = doors_ref.stream()
alerts = alerts_ref.stream()

sensor_ref = dht_ref.document(u'sensor')

blue = (0, 0, 255)
darkblue = (0, 0, 139)
red = (255, 0 ,0)
yellow = (255, 255, 0)
green = (0, 255, 0)
darkyellow = (216, 216, 0)


sense = SenseHat()
sense.clear()

for light in lights:
    print('{} => {}'.format(light.id, light.to_dict()))
    lightstatus = light.get('Status')
    print(lightstatus)
    if light.id == 'light1' and light.get('Status') == false:
        sense.set_pixel(7, 2, darkyellow)
    elif light.id == 'light1' and light.get('Status') == true:
        sense.set_pixel(7, 2, yellow)
    if light.id == 'light2' and light.get('Status') == false:
        sense.set_pixel(7, 4, darkyellow)
    elif light.id == 'light2' and light.get('Status') == true:
        sense.set_pixel(7, 4, yellow)
    if light.id == 'light3' and light.get('Status') == false:
        sense.set_pixel(3, 2, darkyellow)
    elif light.id == 'light3' and light.get('Status') == true:
        sense.set_pixel(3, 2, yellow)
    if light.id == 'light4' and light.get('Status') == false:
        sense.set_pixel(3, 4, darkyellow)
    elif light.id == 'light4' and light.get('Status') == true:
        sense.set_pixel(3, 4, yellow)
for socket in sockets:
    if socket.id == 'socket1' and socket.get('Status') == false:
        sense.set_pixel(4, 0, darkblue)
    elif socket.id == 'socket1' and socket.get('Status') == true:
        sense.set_pixel(4, 0, blue)
    if socket.id == 'socket2' and socket.get('Status') == false:
        sense.set_pixel(0, 3, darkblue)
        sense.set_pixel(0, 4, darkblue)
    elif socket.id == 'socket2' and socket.get('Status') == true:
        sense.set_pixel(0, 3, blue)
        sense.set_pixel(0, 4, blue)
    if socket.id == 'socket3' and socket.get('Status') == false:
        sense.set_pixel(4, 7, darkblue)
    elif socket.id == 'socket3' and socket.get('Status') == true:
        sense.set_pixel(4, 7, blue)
for door in doors:
    if door.id == 'frontdoor' and door.get('Status') == false:
        sense.set_pixel(0, 0, red)
        sense.set_pixel(1, 0, red)
        sense.set_pixel(2, 0, red)
    elif door.id == 'frontdoor' and door.get('Status') == true:
        sense.set_pixel(0, 0, green)
        sense.set_pixel(1, 0, green)
        sense.set_pixel(2, 0, green)
    if door.id == 'backdoor' and door.get('Status') == false:
        sense.set_pixel(0, 7, red)
        sense.set_pixel(1, 7, red)
        sense.set_pixel(2, 7, red)
    elif door.id == 'backdoor' and door.get('Status') == true:
        sense.set_pixel(0, 7, green)
        sense.set_pixel(1, 7, green)
        sense.set_pixel(2, 7, green)
for alert in alert:
    if alert.id == 'breakin' and alert.get('Status') == true:
        sense.clear([255, 0, 0])
        sense.sleep(0.1)
        sense.clear();

temperature = sense.get_temperature()
humidity = sense.get_humidity()

sensor_ref.update({
    u"Temperature": temperature,
    u"Humidity": humidity
})